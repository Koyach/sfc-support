import { ImageResponse } from "next/og";

export const alt = "Epoch塾 — 最初のEpochを、ここで刻む。総合型選抜・AO入試 専門個別指導塾。";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0f2440 0%, #1e3a5f 100%)",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#93c5fd",
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          <span>Epoch / e·poch</span>
          <span>総合型選抜・AO入試 専門塾</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#ffffff",
              letterSpacing: -2,
            }}
          >
            最初のEpochを、
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#60a5fa",
              letterSpacing: -2,
            }}
          >
            ここで刻む。
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 28,
              color: "#cbd5e1",
              lineHeight: 1.5,
            }}
          >
            慶應SFC合格率100%・志望理由書添削・活動計画の壁打ち
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#93c5fd",
            fontSize: 24,
          }}
        >
          <span style={{ fontWeight: 600, color: "#ffffff", fontSize: 32 }}>Epoch塾</span>
          <span>sfc-support.koyatani.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
