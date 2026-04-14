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
  title: "SFC総合型選抜サポート | 谷昊埜",
  description:
    "慶應SFC在学生による総合型選抜の個別サポート。活動計画の壁打ち・志望理由書添削・SFC生との座談会。合格率100%（4名中4名）の実績。",
  keywords: ["SFC", "総合型選抜", "慶應", "AO入試", "活動計画", "志望理由書", "SFC対策", "慶應SFC 総合型", "SFC 個別指導", "総合政策学部", "環境情報学部"],
  openGraph: {
    title: "SFC総合型選抜サポート | 谷昊埜",
    description:
      "慶應SFC在学生が直接サポート。合格率100%の個別指導。",
    type: "website",
    locale: "ja_JP",
    url: "https://sfc-support.koyatani.com",
    siteName: "SFC総合型選抜サポート",
  },
  twitter: {
    card: "summary_large_image",
    title: "SFC総合型選抜サポート | 谷昊埜",
    description: "慶應SFC在学生が直接サポート。合格率100%の個別指導。",
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
              name: "SFC総合型選抜サポート",
              url: "https://sfc-support.koyatani.com",
              description:
                "慶應SFC在学生による総合型選抜の個別サポート。活動計画の壁打ち・志望理由書添削・SFC生との座談会。",
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
                  description: "月2回 x 1時間の1on1面談 + SFC生との座談会 + 先輩マッチング",
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
