"use client";

import Image from "next/image";

export default function CampusGallery() {
  const photos = [
    { id: 1, label: "ミラコエ イベント", src: "/images/gallery/miracoe.jpg", alt: "Epoch塾 代表講師 谷昊埜が代表を務める学生団体ミラコエの選挙参加促進イベント" },
    { id: 2, label: "国会議員との対談", src: "/images/gallery/political.jpg", alt: "超党派の国会議員を招いた271名規模のイベント — Epoch塾 代表講師の活動実績" },
    { id: 3, label: "スキー競技", src: "/images/gallery/skiing.jpg", alt: "フリースタイルスキー ジュニアワールドツアー2位 — 谷昊埜の競技経歴" },
    { id: 4, label: "ケニア 教育活動", src: "/images/gallery/kenya.jpg", alt: "ケニアでの教育活動 — Epoch塾 代表講師の海外活動経験" },
    { id: 5, label: "高校生への講演", src: "/images/gallery/lecture.jpg", alt: "高校生への講演活動 — 総合型選抜・AO入試の合格ノウハウを伝える" },
  ];

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <p className="reveal text-[0.75rem] font-medium tracking-widest uppercase text-[var(--blue-600)] mb-3">Activities</p>
        <h2 className="reveal reveal-delay-1 text-[clamp(1.4rem,3vw,2rem)] font-bold text-[var(--gray-900)]">代表講師の活動記録</h2>
        <p className="reveal reveal-delay-2 mt-2 text-[0.85rem] text-[var(--gray-500)]">谷昊埜が学生団体・国会議員対談・教育活動などで積み重ねてきた現場の記録。</p>
      </div>

      {/* Horizontal scroll */}
      <div className="reveal reveal-delay-2 flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide">
        <div className="shrink-0 w-[max(0px,calc((100vw-1152px)/2))]" />

        {photos.map((photo) => (
          <div
            key={photo.id}
            className="shrink-0 w-[300px] md:w-[400px] snap-start group"
          >
            <div className="relative aspect-[3/2] rounded-xl overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 300px, 400px"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-[var(--gray-600)]">{photo.label}</p>
          </div>
        ))}

        <div className="shrink-0 w-6" />
      </div>
    </section>
  );
}
