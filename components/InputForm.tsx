"use client";

import { useRef, useState } from "react";
import {
  FortuneInput,
  Gender,
  GENDER_LABEL,
  Occupation,
  OCCUPATION_LABEL,
  Theme,
  THEME_LABEL,
} from "@/lib/types";

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 90 }, (_, i) => CURRENT_YEAR - i);
const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);

const THEMES: Theme[] = ["love", "work", "general", "relationship", "money"];

export function InputForm({
  onSubmit,
}: {
  onSubmit: (input: FortuneInput) => void;
}) {
  const [birthYear, setBirthYear] = useState<number>(1990);
  const [birthMonth, setBirthMonth] = useState<number>(1);
  const [birthDay, setBirthDay] = useState<number>(1);
  const [gender, setGender] = useState<Gender>("no_answer");
  const [occupation, setOccupation] = useState<Occupation>("employee");
  const [theme, setTheme] = useState<Theme>("general");

  // iOSのフリック入力対策：テキストは制御コンポーネントにせず、
  // onBlurのタイミングでのみ値を取得する
  const questionRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    const question = questionRef.current?.value?.trim() ?? "";
    onSubmit({
      birthYear,
      birthMonth,
      birthDay,
      gender,
      occupation,
      theme,
      question,
    });
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-6">
      <section className="panel rounded-xl p-5">
        <h2 className="font-display text-sm gold-text tracking-widest mb-4">
          生年月日
        </h2>
        <div className="grid grid-cols-3 gap-2">
          <select
            className="bg-transparent border gold-border rounded-lg px-2 py-2 text-sm"
            value={birthYear}
            onChange={(e) => setBirthYear(Number(e.target.value))}
          >
            {YEARS.map((y) => (
              <option key={y} value={y} className="bg-[#1a1440]">
                {y}年
              </option>
            ))}
          </select>
          <select
            className="bg-transparent border gold-border rounded-lg px-2 py-2 text-sm"
            value={birthMonth}
            onChange={(e) => setBirthMonth(Number(e.target.value))}
          >
            {MONTHS.map((m) => (
              <option key={m} value={m} className="bg-[#1a1440]">
                {m}月
              </option>
            ))}
          </select>
          <select
            className="bg-transparent border gold-border rounded-lg px-2 py-2 text-sm"
            value={birthDay}
            onChange={(e) => setBirthDay(Number(e.target.value))}
          >
            {DAYS.map((d) => (
              <option key={d} value={d} className="bg-[#1a1440]">
                {d}日
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="panel rounded-xl p-5">
        <h2 className="font-display text-sm gold-text tracking-widest mb-4">
          性別
        </h2>
        <div className="grid grid-cols-4 gap-2">
          {(Object.keys(GENDER_LABEL) as Gender[]).map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setGender(g)}
              className={`text-xs py-2 rounded-lg border transition ${
                gender === g
                  ? "bg-[var(--gold)] text-[#0F0B24] border-[var(--gold)] font-medium"
                  : "border-white/20 text-[var(--ivory)]/80"
              }`}
            >
              {GENDER_LABEL[g]}
            </button>
          ))}
        </div>
      </section>

      <section className="panel rounded-xl p-5">
        <h2 className="font-display text-sm gold-text tracking-widest mb-4">
          ご職業
        </h2>
        <select
          className="w-full bg-transparent border gold-border rounded-lg px-3 py-2 text-sm"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value as Occupation)}
        >
          {(Object.keys(OCCUPATION_LABEL) as Occupation[]).map((o) => (
            <option key={o} value={o} className="bg-[#1a1440]">
              {OCCUPATION_LABEL[o]}
            </option>
          ))}
        </select>
      </section>

      <section className="panel rounded-xl p-5">
        <h2 className="font-display text-sm gold-text tracking-widest mb-4">
          占いたいテーマ
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {THEMES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTheme(t)}
              className={`text-sm py-2.5 rounded-lg border transition ${
                theme === t
                  ? "bg-[var(--gold)] text-[#0F0B24] border-[var(--gold)] font-medium"
                  : "border-white/20 text-[var(--ivory)]/80"
              }`}
            >
              {THEME_LABEL[t]}
            </button>
          ))}
        </div>
      </section>

      <section className="panel rounded-xl p-5">
        <h2 className="font-display text-sm gold-text tracking-widest mb-4">
          具体的な悩み・質問（任意）
        </h2>
        <textarea
          ref={questionRef}
          defaultValue=""
          rows={4}
          placeholder="例：転職を考えていますが、今のタイミングは適切ですか？"
          className="w-full bg-transparent border gold-border rounded-lg px-3 py-2 text-sm placeholder:text-white/30 resize-none"
        />
      </section>

      <button
        type="button"
        onClick={handleSubmit}
        className="font-display tracking-widest text-base py-4 rounded-xl border gold-border bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-[#0F0B24] font-semibold shadow-lg shadow-black/30 active:scale-[0.98] transition"
      >
        カードを引く
      </button>
    </div>
  );
}
