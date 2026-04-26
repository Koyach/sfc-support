import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://sfc-support.koyatani.com";
const SITE_NAME = "Epoch塾";
const TITLE = "Epoch塾｜総合型選抜・AO入試 専門個別指導塾｜慶應SFC合格率100%・志望理由書添削";
const DESCRIPTION =
  "【慶應SFC合格率100%・4名全員合格】Epoch塾は総合型選抜・AO入試の専門個別指導塾。志望理由書添削の専属講師と現役SFC合格者が、活動計画の壁打ちから面接対策まで1on1で伴走。月額15,000円〜、初回面談無料。慶應SFC（総合政策学部・環境情報学部）対策に特化。";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f2440" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Epoch塾",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "谷昊埜", url: "https://koyatani.com" }],
  creator: "谷昊埜",
  publisher: "Epoch塾",
  keywords: [
    "Epoch塾",
    "エポック塾",
    "総合型選抜",
    "AO入試",
    "総合型選抜 塾",
    "AO入試 塾",
    "総合型選抜 対策",
    "AO入試 対策",
    "慶應SFC",
    "慶應SFC 総合型",
    "慶應SFC AO",
    "SFC 総合型選抜",
    "SFC 個別指導",
    "総合政策学部",
    "環境情報学部",
    "志望理由書 添削",
    "志望理由書 書き方",
    "活動計画 書き方",
    "自由記述 書き方",
    "活動報告書",
    "面接対策",
    "総合型 個別指導",
    "AO 個別指導",
    "1on1 受験",
    "高校生 総合型",
    "オンライン 総合型 塾",
    "総合型 合格率",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  category: "education",
  classification: "Education / Tutoring / College Prep",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Epoch塾 — 最初のEpochを、ここで刻む。総合型選抜・AO入試 専門個別指導塾。",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
    creator: "@koyatani_AI",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  verification: {
    // google: "（Search Consoleの認証コードを取得したらここに入れる）",
  },
};

const STRUCTURED_DATA = [
  {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: "Epoch塾",
    alternateName: ["エポック塾", "Epoch Juku"],
    url: SITE_URL,
    logo: `${SITE_URL}/opengraph-image`,
    image: `${SITE_URL}/opengraph-image`,
    description:
      "総合型選抜・AO入試に特化した個別指導塾。慶應SFC合格率100%（4名中4名）の実績。志望理由書添削の専属講師と現役SFC合格者の2名体制で、1on1で伴走。",
    slogan: "最初のEpochを、ここで刻む。",
    foundingDate: "2026-04",
    areaServed: {
      "@type": "Country",
      name: "日本",
    },
    knowsAbout: [
      "総合型選抜",
      "AO入試",
      "慶應SFC",
      "志望理由書",
      "活動計画",
      "面接対策",
      "総合政策学部",
      "環境情報学部",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "JP",
    },
    sameAs: [
      "https://koyatani.com",
      "https://www.instagram.com/koyatani_0828/",
    ],
    founder: {
      "@id": `${SITE_URL}/#instructor-tani`,
    },
    employee: [
      { "@id": `${SITE_URL}/#instructor-tani` },
      { "@id": `${SITE_URL}/#instructor-yamamoto` },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Epoch塾コース一覧",
      itemListElement: [
        {
          "@type": "Offer",
          name: "初回面談（無料）",
          price: "0",
          priceCurrency: "JPY",
          description: "ヒアリング・相性確認の初回面談。完全無料。",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#pricing`,
        },
        {
          "@type": "Offer",
          name: "月2回コース（Standard）",
          price: "20000",
          priceCurrency: "JPY",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "20000",
            priceCurrency: "JPY",
            referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
            valueAddedTaxIncluded: true,
          },
          description: "月2回×1時間の1on1面談、活動計画・志望理由書フィードバック、先輩との座談会、先輩マッチング。開塾キャンペーン適用価格。",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#pricing`,
        },
        {
          "@type": "Offer",
          name: "月1回コース（Light）",
          price: "15000",
          priceCurrency: "JPY",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "15000",
            priceCurrency: "JPY",
            referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
            valueAddedTaxIncluded: true,
          },
          description: "月1回×1時間の1on1面談。自分のペースで進めたい方向け。開塾キャンペーン適用価格。",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#pricing`,
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: DESCRIPTION,
    inLanguage: "ja",
    publisher: { "@id": `${SITE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: TITLE,
    description: DESCRIPTION,
    inLanguage: "ja",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    primaryImageOfPage: `${SITE_URL}/opengraph-image`,
    breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: SITE_URL,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#instructor-tani`,
    name: "谷昊埜",
    alternateName: "Koya Tani",
    jobTitle: "代表講師（活動計画・面接対策）",
    description:
      "2025年に総合型選抜で慶應義塾大学SFC（総合政策学部）に合格。学生団体ミラコエ代表。Bedrock Space COO。これまで4名の受験生をサポートし、全員がSFCに合格（合格率100%）。",
    url: "https://koyatani.com",
    sameAs: [
      "https://koyatani.com",
      "https://www.instagram.com/koyatani_0828/",
    ],
    affiliation: {
      "@type": "EducationalOrganization",
      name: "慶應義塾大学 総合政策学部（SFC）",
    },
    worksFor: { "@id": `${SITE_URL}/#organization` },
    knowsAbout: ["総合型選抜", "AO入試", "活動計画", "面接対策", "地方創生", "起業", "教育", "AI"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#instructor-yamamoto`,
    name: "山本優季",
    alternateName: "Yuki Yamamoto",
    jobTitle: "添削講師（志望理由書）",
    description:
      "Epoch塾の志望理由書添削担当講師。書き手の中にある「まだ言葉になっていない問い」を引き出し、論理構造と表現の両面から、志望大学に届く宣言文へと磨き上げる。",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    knowsAbout: ["志望理由書添削", "自由記述", "活動報告書", "文章構造", "言語化サポート"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Epoch塾 月2回コース（総合型選抜・AO入試 個別指導）",
    description:
      "月2回×1時間の1on1面談。活動計画の壁打ち、志望理由書添削、面接対策、SFC生との座談会・先輩マッチングを含む総合型選抜・AO入試の個別指導コース。",
    provider: { "@id": `${SITE_URL}/#organization` },
    educationalLevel: "高校生",
    inLanguage: "ja",
    coursePrerequisites: "なし",
    courseMode: "online",
    teaches: ["総合型選抜対策", "志望理由書", "活動計画", "面接対策"],
    offers: {
      "@type": "Offer",
      price: "20000",
      priceCurrency: "JPY",
      category: "Subscription",
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: "PT2H",
      instructor: [
        { "@id": `${SITE_URL}/#instructor-tani` },
        { "@id": `${SITE_URL}/#instructor-yamamoto` },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Epoch塾 月1回コース（総合型選抜・AO入試 個別指導）",
    description:
      "月1回×1時間の1on1面談。自分のペースで進めたい方向けの総合型選抜・AO入試の個別指導コース。志望理由書の添削も含まれる。",
    provider: { "@id": `${SITE_URL}/#organization` },
    educationalLevel: "高校生",
    inLanguage: "ja",
    courseMode: "online",
    teaches: ["総合型選抜対策", "志望理由書", "活動計画", "面接対策"],
    offers: {
      "@type": "Offer",
      price: "15000",
      priceCurrency: "JPY",
      category: "Subscription",
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: "PT1H",
      instructor: [
        { "@id": `${SITE_URL}/#instructor-tani` },
        { "@id": `${SITE_URL}/#instructor-yamamoto` },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Epoch塾はオンラインで受けられますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、全てオンライン（Zoom）で実施します。全国どこからでも受講可能です。",
        },
      },
      {
        "@type": "Question",
        name: "総合型選抜・AO入試の対策はいつから始めるのがベストですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "高2の冬〜高3の春が理想です。活動計画を練る時間が十分に取れます。ただし高3の夏からでも間に合うケースはあります。",
        },
      },
      {
        "@type": "Question",
        name: "慶應SFC以外の大学も対応していますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "現在は慶應SFC（総合政策学部・環境情報学部）の総合型選抜を中心にサポートしています。志望理由書添削は他大学のAO・総合型にも対応可能ですので、初回面談時にご相談ください。",
        },
      },
      {
        "@type": "Question",
        name: "保護者への説明はありますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "初回面談に保護者の方も同席いただけます。サポート内容・料金・進め方について丁寧にご説明します。",
        },
      },
      {
        "@type": "Question",
        name: "途中でやめることはできますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "月額制のため、いつでも解約可能です。契約期間の縛りはありません。",
        },
      },
      {
        "@type": "Question",
        name: "講師は選べますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "代表講師（谷）が活動計画・面接対策、添削講師（山本）が志望理由書を担当する分担制です。コースには両方のサポートが含まれます。",
        },
      },
      {
        "@type": "Question",
        name: "Epoch塾の料金はいくらですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "月2回コースが月額20,000円（開塾キャンペーン価格／通常30,000円）、月1回コースが月額15,000円（同／通常20,000円）です。初回面談は無料、入会金・教材費はかかりません。",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": `${SITE_URL}/#organization` },
    author: { "@type": "Person", name: "S.H" },
    reviewBody: "SFCにいるアツい先輩と繋いでもらい、たくさんの刺激を得ることができました！",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": `${SITE_URL}/#organization` },
    author: { "@type": "Person", name: "A.M" },
    reviewBody: "おかげで自分の軸と、SFCで求められる軸の違いを認識できて、面談の練習になりました！",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": `${SITE_URL}/#organization` },
    author: { "@type": "Person", name: "N.Y" },
    reviewBody:
      "高校3年生の5月に初めてお会いし、優しさもありながら厳しく本音で言ってくださいました。具体的に今後どのような活動が自分の探究に必要なのかをアドバイスしてくださり、道筋が見え、その後自ら行動を起こすことができSFC合格へとつながりました。",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSans.variable} ${sourceSerif.variable} scroll-smooth`}>
      <head>
        <link rel="canonical" href={SITE_URL} />
        {STRUCTURED_DATA.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>
      <body className="font-[family-name:var(--font-noto)] antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
