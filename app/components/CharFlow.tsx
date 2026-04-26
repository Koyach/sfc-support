import React from "react";

export type Segment = {
  text: string;
  strong?: boolean;
  break?: boolean;
};

type Props = {
  segments: Segment[];
  baseDelay?: number;
  charDelay?: number;
};

export default function CharFlow({ segments, baseDelay = 0, charDelay = 0.022 }: Props) {
  let charIndex = 0;
  return (
    <>
      {segments.map((seg, segIdx) => {
        const chars = Array.from(seg.text);
        const inner = chars.map((c, i) => {
          const idx = charIndex++;
          return (
            <span
              key={`${segIdx}-${i}`}
              className="char"
              style={{ ["--char-delay" as string]: `${baseDelay + idx * charDelay}s` }}
            >
              {c}
            </span>
          );
        });
        return (
          <React.Fragment key={segIdx}>
            {seg.strong ? (
              <strong className="text-[var(--blue-700)] font-bold">{inner}</strong>
            ) : (
              <>{inner}</>
            )}
            {seg.break && <br className="hidden sm:inline" />}
          </React.Fragment>
        );
      })}
    </>
  );
}
