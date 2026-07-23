"use client";

import { CardBack } from "./CardBack";
import { TarotCardArt } from "./TarotCardArt";
import { DrawnCard } from "@/lib/types";

const POSITION_LABEL: Record<DrawnCard["position"], string> = {
  past: "過去",
  present: "現在",
  future: "未来",
};

export function FlipCard({
  card,
  revealed,
  active,
  onReveal,
}: {
  card: DrawnCard;
  revealed: boolean;
  active: boolean;
  onReveal: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="font-display text-xs tracking-[0.3em] gold-text">
        {POSITION_LABEL[card.position]}
      </span>
      <button
        type="button"
        disabled={!active || revealed}
        onClick={onReveal}
        className="relative w-24 h-40 sm:w-28 sm:h-48"
        style={{ perspective: "1000px" }}
        aria-label={
          revealed ? `${card.nameJa}` : `${POSITION_LABEL[card.position]}のカードをめくる`
        }
      >
        <div
          className="relative w-full h-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: revealed ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <div
            className="absolute inset-0 rounded-lg overflow-hidden shadow-lg shadow-black/40"
            style={{ backfaceVisibility: "hidden" }}
          >
            <CardBack />
            {active && !revealed && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 animate-pulse">
                <span className="text-[10px] text-white/80 font-display tracking-widest">
                  TAP
                </span>
              </div>
            )}
          </div>
          <div
            className="absolute inset-0 rounded-lg overflow-hidden shadow-lg shadow-black/40"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <TarotCardArt
              id={card.id}
              nameJa={card.nameJa}
              nameEn={card.nameEn}
              reversed={card.reversed}
            />
          </div>
        </div>
      </button>
      {revealed && (
        <span className="text-[11px] text-white/70">
          {card.nameJa}
          {card.reversed ? "（逆位置）" : "（正位置）"}
        </span>
      )}
    </div>
  );
}
