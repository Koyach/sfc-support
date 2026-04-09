"use client";

export default function CampusGallery() {
  const photos = [
    { id: 1, label: "SFC写真 1" },
    { id: 2, label: "SFC写真 2" },
    { id: 3, label: "SFC写真 3" },
    { id: 4, label: "SFC写真 4" },
    { id: 5, label: "SFC写真 5" },
  ];

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <p className="reveal text-[0.75rem] font-medium tracking-widest uppercase text-[var(--blue-600)] mb-3">Campus</p>
        <h2 className="reveal reveal-delay-1 text-[clamp(1.4rem,3vw,2rem)] font-bold text-[var(--gray-900)]">SFCキャンパス</h2>
      </div>

      {/* Horizontal scroll */}
      <div className="reveal reveal-delay-2 flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide">
        {/* Left spacer for max-w-6xl alignment */}
        <div className="shrink-0 w-[max(0px,calc((100vw-1152px)/2))]" />

        {photos.map((photo) => (
          <div
            key={photo.id}
            className="shrink-0 w-[300px] md:w-[400px] aspect-[3/2] rounded-xl bg-gradient-to-br from-[var(--blue-50)] to-[var(--gray-100)] border border-gray-200 snap-start flex items-center justify-center"
          >
            <p className="text-[var(--gray-400)] text-sm">{photo.label}</p>
          </div>
        ))}

        <div className="shrink-0 w-6" />
      </div>
    </section>
  );
}
