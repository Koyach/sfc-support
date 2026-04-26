import type { Metadata } from "next";
import { Noto_Sans_JP, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sfc-support.koyatani.com"),
  title: "Epoch塾 | 最初のEpochを、ここで刻む。",
  description:
    "総合型選抜・AO入試の専門塾。志望理由書添削、活動計画の壁打ち、面接対策。合格を通過点に、自分が時代を区切る側に立つ最初の一歩を踏み出す塾。",
  keywords: ["Epoch塾", "総合型選抜", "AO入試", "慶應", "SFC", "志望理由書", "活動計画", "個別指導", "総合政策学部", "環境情報学部"],
  openGraph: {
    title: "Epoch塾 | 最初のEpochを、ここで刻む。",
    description:
      "総合型選抜・AO入試の専門塾。合格はゴールではなく、自分が時代を区切る側に立つ最初の一歩。",
    type: "website",
    locale: "ja_JP",
    url: "https://sfc-support.koyatani.com",
    siteName: "Epoch塾",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epoch塾 | 最初のEpochを、ここで刻む。",
    description: "総合型選抜・AO入試の専門塾。合格を通過点に、自分が時代を区切る側に立つ最初の一歩を。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSans.variable} ${sourceSerif.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Epoch塾",
              url: "https://sfc-support.koyatani.com",
              description:
                "総合型選抜・AO入試の専門塾。志望理由書添削、活動計画の壁打ち、面接対策を提供。",
              founder: {
                "@type": "Person",
                name: "谷昊埜",
                alternateName: "Koya Tani",
                url: "https://koyatani.com",
                affiliation: {
                  "@type": "EducationalOrganization",
                  name: "慶應義塾大学 総合政策学部（SFC）",
                },
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "月2回コース",
                  price: "30000",
                  priceCurrency: "JPY",
                  description: "月2回 x 1時間の1on1面談 + 志望理由書添削 + 先輩マッチング",
                },
                {
                  "@type": "Offer",
                  name: "月1回コース",
                  price: "20000",
                  priceCurrency: "JPY",
                  description: "月1回 x 1時間の1on1面談",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-[family-name:var(--font-noto)] antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
