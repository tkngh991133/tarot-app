"use client";

import { useState } from "react";
import { InputForm } from "@/components/InputForm";
import { FlipCard } from "@/components/FlipCard";
import { ResultDisplay, FortuneResult } from "@/components/ResultDisplay";
import { drawThreeCards } from "@/lib/cards";
import { DrawnCard, FortuneInput } from "@/lib/types";

type Stage = "form" | "reveal" | "loading" | "result" | "error";

export default function Home() {
  const [stage, setStage] = useState<Stage>("form");
  const [input, setInput] = useState<FortuneInput | null>(null);
  const [cards, setCards] = useState<DrawnCard[]>([]);
  const [revealedCount, setRevealedCount] = useState(0);
  const [result, setResult] = useState<FortuneResult | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleFormSubmit = (data: FortuneInput) => {
    const drawn = drawThreeCards();
    const positions: DrawnCard["position"][] = ["past", "present", "future"];
    const drawnCards: DrawnCard[] = drawn.map((d, i) => ({
      id: d.card.id,
      nameJa: d.card.nameJa,
      nameEn: d.card.nameEn,
      reversed: d.reversed,
      position: positions[i],
    }));
    setInput(data);
    setCards(drawnCards);
    setRevealedCount(0);
    setStage("reveal");
  };

  const handleReveal = (index: number) => {
    if (index !== revealedCount) return;
    setRevealedCount((c) => c + 1);
  };

  const handleFetchFortune = async () => {
    if (!input) return;
    setStage("loading");
    try {
      const res = await fetch("/api/tarot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input,
          cards: cards.map((c) => ({
            id: c.id,
            reversed: c.reversed,
            position: c.position,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "鑑定の取得に失敗しました");
        setStage("error");
        return;
      }
      setResult(data.result);
      setStage("result");
    } catch (e) {
      setErrorMsg("通信エラーが発生しました。もう一度お試しください。");
      setStage("error");
    }
  };

  const handleRestart = () => {
    setInput(null);
    setCards([]);
    setRevealedCount(0);
    setResult(null);
    setErrorMsg("");
    setStage("form");
  };

  return (
    <main className="star-bg relative flex-1 flex flex-col items-center px-4 py-8 gap-8">
      <header className="relative z-10 text-center">
        <h1 className="font-display text-2xl gold-text tracking-[0.2em]">
          タロットの導き
        </h1>
        <p className="text-xs text-white/50 mt-2 tracking-widest">
          過去 ・ 現在 ・ 未来
        </p>
      </header>

      <div className="relative z-10 w-full flex-1 flex flex-col items-center">
        {stage === "form" && <InputForm onSubmit={handleFormSubmit} />}

        {(stage === "reveal" || stage === "loading") && (
          <div className="w-full max-w-md mx-auto flex flex-col items-center gap-8">
            <p className="text-sm text-white/70 text-center">
              カードをタップして、過去 → 現在 → 未来の順にめくってください
            </p>
            <div className="flex justify-center gap-4">
              {cards.map((card, i) => (
                <FlipCard
                  key={card.position}
                  card={card}
                  revealed={i < revealedCount}
                  active={i === revealedCount}
                  onReveal={() => handleReveal(i)}
                />
              ))}
            </div>
            {revealedCount === 3 && stage === "reveal" && (
              <button
                type="button"
                onClick={handleFetchFortune}
                className="font-display tracking-widest text-base py-4 px-8 rounded-xl border gold-border bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-[#0F0B24] font-semibold shadow-lg shadow-black/30 active:scale-[0.98] transition"
              >
                鑑定結果を見る
              </button>
            )}
            {stage === "loading" && (
              <div className="flex flex-col items-center gap-3 text-white/70 text-sm">
                <div className="w-8 h-8 border-2 border-[var(--gold)] border-t-transparent rounded-full animate-spin" />
                星々からの導きを読み解いています…
              </div>
            )}
          </div>
        )}

        {stage === "result" && result && (
          <ResultDisplay cards={cards} result={result} onRestart={handleRestart} />
        )}

        {stage === "error" && (
          <div className="w-full max-w-md mx-auto flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-red-300">{errorMsg}</p>
            <button
              type="button"
              onClick={handleFetchFortune}
              className="font-display tracking-widest text-sm py-3 px-6 rounded-xl border gold-border text-[var(--gold-light)]"
            >
              もう一度試す
            </button>
            <button
              type="button"
              onClick={handleRestart}
              className="text-xs text-white/50 underline"
            >
              最初からやり直す
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
