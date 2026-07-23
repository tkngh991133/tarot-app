"use client";

import { useState } from "react";

// 共通のゴールドラインアート・シンボル集。
// 手相アプリと同系統の「紺紫背景×ゴールド線画」フラットイラストスタイルで統一。
//
// 【あとから絵柄を差し替える場合】
// public/cards/{id}.png（0.png〜21.png、idはlib/cards.tsのCardMeaning.idと対応）を
// 配置するだけで、そのカードは配置した画像が優先表示されます。
// 画像が無いカードは、このファイルの自作SVGデザインがそのまま使われ続けます。
// （png以外にjpg/webpを使いたい場合はCUSTOM_IMAGE_EXTを変更してください）
const CUSTOM_IMAGE_EXT = "png";

const ROMAN = [
  "0",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
  "XVI",
  "XVII",
  "XVIII",
  "XIX",
  "XX",
  "XXI",
];

function Icon({ icon }: { icon: string }) {
  // すべて中心 (100,150) を基準にした単一ストロークのシンボル
  const stroke = { stroke: "url(#goldGrad)", fill: "none", strokeWidth: 2.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (icon) {
    case "fool":
      return (
        <g {...stroke}>
          <path d="M60 190 Q100 150 140 190" />
          <circle cx="100" cy="110" r="10" fill="url(#goldGrad)" stroke="none" />
          <path d="M100 120 L100 155 M100 130 L80 145 M100 130 L120 145" />
          <path d="M60 190 L55 205 M140 190 L145 205" />
          <circle cx="100" cy="75" r="26" />
          <path d="M100 49 L100 40 M124 62 L132 55 M76 62 L68 55" />
        </g>
      );
    case "magician":
      return (
        <g {...stroke}>
          <path d="M100 60 L100 95" />
          <circle cx="100" cy="52" r="9" fill="url(#goldGrad)" stroke="none" />
          <path d="M70 200 L130 200 L120 150 L80 150 Z" />
          <path d="M60 150 L140 150" />
          <path d="M85 120 Q100 105 115 120 Q100 135 85 120 Z" />
        </g>
      );
    case "priestess":
      return (
        <g {...stroke}>
          <path d="M100 60 A30 30 0 1 1 99.9 60" />
          <path d="M70 130 L70 210 M130 130 L130 210" />
          <path d="M85 100 L85 210 M115 100 L115 210" />
          <circle cx="100" cy="150" r="14" />
        </g>
      );
    case "empress":
      return (
        <g {...stroke}>
          <path d="M100 55 L108 75 L130 75 L112 88 L120 110 L100 96 L80 110 L88 88 L70 75 L92 75 Z" />
          <path d="M70 160 Q100 130 130 160 Q120 205 100 215 Q80 205 70 160 Z" />
        </g>
      );
    case "emperor":
      return (
        <g {...stroke}>
          <path d="M75 90 L75 70 L88 82 L100 65 L112 82 L125 70 L125 90 Z" />
          <path d="M70 90 L130 90 L124 160 L76 160 Z" />
          <path d="M76 160 L124 160 L118 205 L82 205 Z" />
        </g>
      );
    case "hierophant":
      return (
        <g {...stroke}>
          <path d="M70 210 L70 130 A30 30 0 0 1 130 130 L130 210" />
          <path d="M88 165 L88 195 M112 165 L112 195" />
          <path d="M78 165 L98 145 M122 165 L102 145" />
        </g>
      );
    case "lovers":
      return (
        <g {...stroke}>
          <circle cx="85" cy="140" r="24" />
          <circle cx="115" cy="140" r="24" />
          <path d="M100 60 L100 40 M92 48 L100 40 L108 48" />
          <path d="M70 200 Q100 185 130 200" />
        </g>
      );
    case "chariot":
      return (
        <g {...stroke}>
          <circle cx="75" cy="185" r="22" />
          <circle cx="125" cy="185" r="22" />
          <path d="M60 150 L140 150 L130 110 L70 110 Z" />
          <path d="M75 165 L75 205 M125 165 L125 205" />
          <path d="M100 110 L100 90" />
        </g>
      );
    case "strength":
      return (
        <g {...stroke}>
          <path d="M100 90 A18 18 0 1 1 99.9 90" />
          <path d="M70 145 Q100 120 130 145 Q120 190 100 205 Q80 190 70 145 Z" />
        </g>
      );
    case "hermit":
      return (
        <g {...stroke}>
          <path d="M100 200 L100 110" />
          <path d="M80 130 L120 130 L112 95 L88 95 Z" />
          <path d="M100 118 L100 105" />
          <circle cx="100" cy="112" r="4" fill="url(#goldGrad)" stroke="none" />
        </g>
      );
    case "wheel":
      return (
        <g {...stroke}>
          <circle cx="100" cy="150" r="45" />
          <circle cx="100" cy="150" r="10" />
          <path d="M100 105 L100 195 M55 150 L145 150 M68 118 L132 182 M68 182 L132 118" />
        </g>
      );
    case "justice":
      return (
        <g {...stroke}>
          <path d="M100 70 L100 200" />
          <path d="M65 100 L135 100" />
          <path d="M65 100 L50 130 L80 130 Z" />
          <path d="M135 100 L120 130 L150 130 Z" />
          <path d="M80 200 L120 200" />
        </g>
      );
    case "hanged":
      return (
        <g {...stroke}>
          <path d="M60 90 L140 90" />
          <path d="M100 90 L100 130 L120 175 L120 205 M100 130 L80 175 L80 205" />
          <circle cx="100" cy="150" r="16" />
        </g>
      );
    case "death":
      return (
        <g {...stroke}>
          <path d="M100 95 A25 30 0 1 1 99.9 95" />
          <path d="M85 150 L85 205 M115 150 L115 205 M85 175 L115 175" />
          <path d="M70 100 Q100 70 130 100" />
        </g>
      );
    case "temperance":
      return (
        <g {...stroke}>
          <path d="M75 120 L75 175 Q75 195 95 195 L95 120" />
          <path d="M125 120 L125 175 Q125 195 105 195 L105 120" />
          <path d="M85 145 Q100 130 115 145" />
          <path d="M100 90 L100 60" />
        </g>
      );
    case "devil":
      return (
        <g {...stroke}>
          <path d="M70 110 L130 110 L118 160 L82 160 Z" />
          <path d="M85 110 L75 85 L95 95 M115 110 L125 85 L105 95" />
          <path d="M85 175 L75 205 M115 175 L125 205" />
          <path d="M82 140 L118 140" />
        </g>
      );
    case "tower":
      return (
        <g {...stroke}>
          <path d="M75 205 L75 100 L125 100 L125 205" />
          <path d="M65 100 L135 100 L100 70 Z" />
          <path d="M100 55 L88 90 L108 90 L92 120" />
          <path d="M70 150 L60 165 M130 150 L140 165" />
        </g>
      );
    case "star":
      return (
        <g {...stroke}>
          <path d="M100 60 L108 88 L138 88 L114 106 L122 134 L100 116 L78 134 L86 106 L62 88 L92 88 Z" />
          <path d="M70 190 Q100 170 130 190" />
          <path d="M65 205 Q100 185 135 205" />
        </g>
      );
    case "moon":
      return (
        <g {...stroke}>
          <path d="M110 95 A35 35 0 1 0 111 205 A28 28 0 0 1 110 95 Z" />
          <path d="M60 210 Q100 190 140 210" />
        </g>
      );
    case "sun":
      return (
        <g {...stroke}>
          <circle cx="100" cy="140" r="28" />
          <path d="M100 95 L100 82 M100 198 L100 185 M55 140 L68 140 M132 140 L145 140 M69 109 L60 100 M131 109 L140 100 M69 171 L60 180 M131 171 L140 180" />
        </g>
      );
    case "judgement":
      return (
        <g {...stroke}>
          <path d="M85 130 L115 130 L135 100 L115 145 L95 145" />
          <path d="M100 155 L100 205 M80 190 L100 205 L120 190" />
          <path d="M70 100 Q100 80 130 100" />
        </g>
      );
    case "world":
      return (
        <g {...stroke}>
          <path d="M100 145 A38 45 0 1 1 99.9 145" />
          <path d="M62 120 Q100 105 138 120 M62 170 Q100 185 138 170" />
        </g>
      );
    default:
      return <circle cx="100" cy="150" r="30" {...stroke} />;
  }
}

export function TarotCardArt({
  id,
  nameJa,
  nameEn,
  reversed,
}: {
  id: number;
  nameJa: string;
  nameEn: string;
  reversed: boolean;
}) {
  // カスタム画像（public/cards/{id}.png）が存在すればそちらを優先表示し、
  // 無ければ従来の自作SVGデザインにフォールバックする
  const [customLoaded, setCustomLoaded] = useState(false);
  const [customFailed, setCustomFailed] = useState(false);
  const customSrc = `/cards/${id}.${CUSTOM_IMAGE_EXT}`;

  return (
    <div
      className="relative w-full h-full"
      style={{ transform: reversed ? "rotate(180deg)" : undefined }}
    >
      {!customFailed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={customSrc}
          alt={`${nameJa} (${nameEn})`}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          style={{ opacity: customLoaded ? 1 : 0 }}
          onLoad={() => setCustomLoaded(true)}
          onError={() => setCustomFailed(true)}
        />
      )}
      {(customFailed || !customLoaded) && (
        <TarotCardArtSVG id={id} nameJa={nameJa} nameEn={nameEn} />
      )}
    </div>
  );
}

function TarotCardArtSVG({
  id,
  nameJa,
  nameEn,
}: {
  id: number;
  nameJa: string;
  nameEn: string;
}) {
  return (
    <svg viewBox="0 0 200 340" className="w-full h-full">
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8C874" />
          <stop offset="100%" stopColor="#B08A3E" />
        </linearGradient>
        <linearGradient id="cardBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A1440" />
          <stop offset="100%" stopColor="#0F0B24" />
        </linearGradient>
      </defs>

      <rect x="4" y="4" width="192" height="332" rx="10" fill="url(#cardBg)" />
      <rect
        x="10"
        y="10"
        width="180"
        height="320"
        rx="6"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="1.5"
      />
      <rect
        x="15"
        y="15"
        width="170"
        height="310"
        rx="4"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="0.6"
      />

      {/* 角の装飾 */}
      {[
        [15, 15],
        [185, 15],
        [15, 325],
        [185, 325],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.5" fill="url(#goldGrad)" />
      ))}

      <text
        x="100"
        y="42"
        textAnchor="middle"
        fontSize="16"
        fill="url(#goldGrad)"
        fontFamily="Cinzel, serif"
        letterSpacing="2"
      >
        {ROMAN[id]}
      </text>

      <Icon icon={
        [
          "fool","magician","priestess","empress","emperor","hierophant","lovers",
          "chariot","strength","hermit","wheel","justice","hanged","death",
          "temperance","devil","tower","star","moon","sun","judgement","world",
        ][id]
      } />

      <line x1="35" y1="270" x2="165" y2="270" stroke="url(#goldGrad)" strokeWidth="0.6" />
      <text
        x="100"
        y="295"
        textAnchor="middle"
        fontSize="13"
        fill="#F2EFE6"
        fontFamily="Cinzel, serif"
        letterSpacing="1"
      >
        {nameEn}
      </text>
      <text
        x="100"
        y="312"
        textAnchor="middle"
        fontSize="12"
        fill="url(#goldGrad)"
        fontFamily="serif"
      >
        {nameJa}
      </text>
    </svg>
  );
}
