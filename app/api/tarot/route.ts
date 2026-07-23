import { NextRequest, NextResponse } from "next/server";
import { MAJOR_ARCANA } from "@/lib/cards";
import { FortuneInput, GENDER_LABEL, OCCUPATION_LABEL, THEME_LABEL } from "@/lib/types";

export const runtime = "nodejs";
export const maxDuration = 60;

type RequestBody = {
  input: FortuneInput;
  cards: {
    id: number;
    reversed: boolean;
    position: "past" | "present" | "future";
  }[];
};

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "GEMINI_API_KEYが設定されていません" },
      { status: 500 }
    );
  }

  let body: RequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "リクエストが不正です" }, { status: 400 });
  }

  const { input, cards } = body;
  if (!input || !cards || cards.length !== 3) {
    return NextResponse.json({ error: "入力データが不足しています" }, { status: 400 });
  }

  const cardDetails = cards.map((c) => {
    const meta = MAJOR_ARCANA.find((m) => m.id === c.id);
    if (!meta) return null;
    return {
      position: c.position,
      nameJa: meta.nameJa,
      nameEn: meta.nameEn,
      reversed: c.reversed,
      meaning: c.reversed ? meta.reversedMeaning : meta.uprightMeaning,
      keywords: c.reversed ? meta.reversedKeywords : meta.uprightKeywords,
    };
  });

  const positionLabel = { past: "過去", present: "現在", future: "未来" };

  const cardsText = cardDetails
    .map((c) => {
      if (!c) return "";
      return `- ${positionLabel[c.position]}：『${c.nameJa}（${c.nameEn}）』${
        c.reversed ? "逆位置" : "正位置"
      }\n  基本キーワード: ${c.keywords.join("、")}\n  基本的な意味: ${c.meaning}`;
    })
    .join("\n");

  const prompt = `あなたは経験豊富なタロット占い師です。以下の相談者の情報と、実際に引かれた3枚のタロットカード（大アルカナ・過去/現在/未来の展開）をもとに、温かく、かつ的確な鑑定文を作成してください。

【相談者情報】
- 生年月日: ${input.birthYear}年${input.birthMonth}月${input.birthDay}日
- 性別: ${GENDER_LABEL[input.gender]}
- 職業: ${OCCUPATION_LABEL[input.occupation]}
- 占いたいテーマ: ${THEME_LABEL[input.theme]}
- 相談内容: ${input.question ? input.question : "（自由記述の入力なし。テーマに沿った一般的な鑑定をしてください）"}

【引かれたカード】
${cardsText}

【出力形式】
必ず次のJSON形式のみで出力してください。前置きや説明、Markdownのコードブロック記号は一切不要です。

{
  "past": "過去のカードについての解説（150〜200文字程度、相談者のテーマ・相談内容に絡めて）",
  "present": "現在のカードについての解説（150〜200文字程度）",
  "future": "未来のカードについての解説（150〜200文字程度）",
  "overall": "3枚全体を踏まえた総合アドバイス（250〜350文字程度。相談者の質問に具体的に答える形で、背中を押すような温かいトーンで）"
}`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.9,
            responseMimeType: "application/json",
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      return NextResponse.json(
        { error: `Gemini APIエラー: ${errText}` },
        { status: 502 }
      );
    }

    const data = await response.json();
    const text: string | undefined = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return NextResponse.json(
        { error: "Gemini APIから結果を取得できませんでした" },
        { status: 502 }
      );
    }

    const cleaned = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    return NextResponse.json({ result: parsed });
  } catch (e) {
    return NextResponse.json(
      { error: `鑑定の生成に失敗しました: ${(e as Error).message}` },
      { status: 500 }
    );
  }
}
