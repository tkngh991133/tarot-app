"use client";

import { DrawnCard } from "@/lib/types";
import { TarotCardArt } from "./TarotCardArt";

export type FortuneResult = {
  past: string;
  present: string;
  future: string;
  overall: string;
};

const POSITION_LABEL: Record<DrawnCard["position"], string> = {
  past: "過去",
  present: "現在",
  future: "未来",
};

function Section({
  card,
  text,
}: {
  card: DrawnCard;
  text: string;
}) {
  return (
    <div className="panel rounded-xl p-4 flex gap-4">
      <div className="w-16 shrink-0">
        <TarotCardArt
          id={card.id}
          nameJa={card.nameJa}
          nameEn={card.nameEn}
          reversed={card.reversed}
        />
      </div>
      <div className="flex flex-col gap-1.5 min-w-0">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-xs gold-text tracking-widest">
            {POSITION_LABEL[card.position]}
          </span>
          <span className="text-xs text-white/60">
            {card.nameJa}
            {card.reversed ? "（逆位置）" : "（正位置）"}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-[var(--ivory)]/90">{text}</p>
      </div>
    </div>
  );
}

export function ResultDisplay({
  cards,
  result,
  onRestart,
}: {
  cards: DrawnCard[];
  result: FortuneResult;
  onRestart: () => void;
}) {
  const byPos = (pos: DrawnCard["position"]) => cards.find((c) => c.position === pos)!;

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-4">
      <h2 className="font-display text-center text-lg gold-text tracking-widest">
        鑑定結果
      </h2>

      <Section card={byPos("past")} text={result.past} />
      <Section card={byPos("present")} text={result.present} />
      <Section card={byPos("future")} text={result.future} />

      <div className="panel rounded-xl p-5 mt-2">
        <h3 className="font-display text-sm gold-text tracking-widest mb-2">
          総合アドバイス
        </h3>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {result.overall}
        </p>
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="font-display tracking-widest text-base py-4 rounded-xl border gold-border bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-[#0F0B24] font-semibold shadow-lg shadow-black/30 active:scale-[0.98] transition mt-2"
      >
        もう一度占う
      </button>
    </div>
  );
}
