"use client";

export function CardBack() {
  return (
    <svg viewBox="0 0 200 340" className="w-full h-full">
      <defs>
        <linearGradient id="backBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#241a5e" />
          <stop offset="100%" stopColor="#0F0B24" />
        </linearGradient>
        <linearGradient id="backGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8C874" />
          <stop offset="100%" stopColor="#B08A3E" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="192" height="332" rx="10" fill="url(#backBg)" />
      <rect
        x="10"
        y="10"
        width="180"
        height="320"
        rx="6"
        fill="none"
        stroke="url(#backGold)"
        strokeWidth="1.5"
      />
      <circle cx="100" cy="170" r="60" fill="none" stroke="url(#backGold)" strokeWidth="0.8" />
      <circle cx="100" cy="170" r="45" fill="none" stroke="url(#backGold)" strokeWidth="0.8" />
      <circle cx="100" cy="170" r="8" fill="url(#backGold)" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 100 + Math.cos(angle) * 45;
        const y1 = 170 + Math.sin(angle) * 45;
        const x2 = 100 + Math.cos(angle) * 60;
        const y2 = 170 + Math.sin(angle) * 60;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#backGold)"
            strokeWidth="0.8"
          />
        );
      })}
      <text
        x="100"
        y="176"
        textAnchor="middle"
        fontSize="10"
        fill="#0F0B24"
        fontFamily="Cinzel, serif"
      >
        ✦
      </text>
    </svg>
  );
}
