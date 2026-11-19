"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, RotateCcw, XCircle } from "lucide-react";
import { buttonClass, cx } from "@/components/ui/primitives";

export interface TryoutQuestion {
  q: string;
  a: string;
  b: string;
  c: string;
  d: string;
  answer: string;
  explanation: string;
}

/** Public taster: a few CBT-style questions answered in the browser, with a nudge to register. */
export function HomeTryout({ heading, intro, questions, ctaLabel, ctaNote }: { heading: string; intro: string; questions: readonly TryoutQuestion[]; ctaLabel: string; ctaNote: string }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<Record<number, string>>({});
  const [done, setDone] = useState(false);
  const total = questions.length;
  const key = (k: number) => questions[k].answer.trim().toUpperCase();
  const score = questions.filter((_, k) => picked[k] === key(k)).length;
  const q = questions[i];
  const letters = ["A", "B", "C", "D"] as const;
  const text = (l: string) => (q as unknown as Record<string, string>)[l.toLowerCase()];
  const answered = picked[i] !== undefined;
  const reset = () => {
    setPicked({});
    setI(0);
    setDone(false);
  };

  return (
    <section id="try-english" className="scroll-mt-4 border-b border-line bg-surface" aria-labelledby="tryout-h">
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <div className="text-center">
        <span className="inline-block rounded-full bg-gold-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-navy-800 ring-1 ring-gold-400/50">Free preview · No sign-up needed</span>
        <h2 id="tryout-h" className="text-3xl font-extrabold tracking-tight text-navy-800 sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted">{intro}</p>
      </div>
      <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-white shadow-lg">
        <div className="flex items-center justify-between bg-navy-800 px-5 py-3 text-white">
          <span className="text-sm font-bold tracking-wide">ENGLISH LANGUAGE · CBT PREVIEW</span>
          <span className="text-sm">{done ? "Result" : `Question ${i + 1} of ${total}`}</span>
        </div>
        <div className="h-1.5 bg-slate-100" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done ? total : Object.keys(picked).length}>
          <div className="h-full bg-gold-500 transition-all" style={{ width: `${((done ? total : Object.keys(picked).length) / total) * 100}%` }} />
        </div>
        {done ? (
          <div className="p-6 text-center sm:p-10">
            <p className="text-5xl font-extrabold text-navy-800">
              {score}/{total}
            </p>
            <p className="mt-2 font-semibold text-navy-800">{score === total ? "Excellent! A perfect score." : score >= total / 2 ? "Good effort! There is more to learn and practise." : "Keep going. Regular practice makes the difference."}</p>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted">{ctaNote}</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/register" className={buttonClass("primary", "lg")}>
                {ctaLabel}
              </Link>
              <button type="button" onClick={reset} className={buttonClass("secondary", "lg")}>
                <RotateCcw className="size-4" /> Try again
              </button>
            </div>
          </div>
        ) : (
          <div className="p-5 sm:p-8">
            <p className="text-lg font-semibold leading-relaxed text-navy-800">{q.q}</p>
            <ul className="mt-5 space-y-2.5">
              {letters.map((l) => {
                const correct = key(i) === l;
                const chosen = picked[i] === l;
                return (
                  <li key={l}>
                    <button
                      type="button"
                      disabled={answered}
                      onClick={() => setPicked((p) => ({ ...p, [i]: l }))}
                      className={cx(
                        "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition",
                        !answered && "border-line hover:border-navy-700 hover:bg-gold-50",
                        answered && correct && "border-green-600 bg-green-50 text-green-900",
                        answered && chosen && !correct && "border-red-500 bg-red-50 text-red-900",
                        answered && !correct && !chosen && "border-line opacity-60",
                      )}
                    >
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-navy-800 text-xs font-bold text-white">{l}</span>
                      <span className="flex-1">{text(l)}</span>
                      {answered && correct && <CheckCircle2 className="size-5 text-green-600" aria-label="Correct" />}
                      {answered && chosen && !correct && <XCircle className="size-5 text-red-600" aria-label="Wrong" />}
                    </button>
                  </li>
                );
              })}
            </ul>
            {answered && q.explanation && (
              <p className="mt-4 rounded-xl bg-gold-50 p-3 text-sm text-navy-800">
                <strong>Explanation: </strong>
                {q.explanation}
              </p>
            )}
            <div className="mt-6 flex items-center justify-between">
              <button type="button" disabled={i === 0} onClick={() => setI(i - 1)} className={buttonClass("ghost", "sm")}>
                <ChevronLeft className="size-4" /> Previous
              </button>
              {i < total - 1 ? (
                <button type="button" disabled={!answered} onClick={() => setI(i + 1)} className={buttonClass("primary", "sm")}>
                  Next <ChevronRight className="size-4" />
                </button>
              ) : (
                <button type="button" disabled={!answered} onClick={() => setDone(true)} className={buttonClass("gold", "sm")}>
                  See my score
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
    </section>
  );
}
