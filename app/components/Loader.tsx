"use client";

import { useEffect, useRef, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading");
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 8 + 2;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setPhase("exit"), 300);
        setTimeout(() => {
          setPhase("done");
          document.body.style.overflow = "";
        }, 1000);
      }
      setProgress(Math.min(Math.floor(current), 100));
    }, 40);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center transition-opacity duration-700 ${
        phase === "exit" ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Logo / Name */}
      <p className="text-[0.7rem] font-medium tracking-[0.3em] uppercase text-[var(--blue-600)] mb-3">
        Epoch
      </p>
      <p className="font-[family-name:var(--font-serif)] text-[clamp(1.4rem,3vw,1.8rem)] font-semibold text-[var(--gray-900)] mb-2 tracking-wide">
        最初のEpochを、ここで刻む。
      </p>
      <p className="text-[0.75rem] text-[var(--gray-500)] mb-8 tracking-wider">
        Epoch塾
      </p>

      {/* Progress bar */}
      <div className="w-[min(280px,60vw)] h-[3px] bg-[var(--gray-200)] rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-[var(--blue-600)] rounded-full transition-[width] duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Counter */}
      <p className="mt-3 text-[0.75rem] font-medium tracking-widest text-[var(--gray-400)] tabular-nums">
        {String(progress).padStart(3, "0")}
      </p>
    </div>
  );
}
