"use client";

import { useState } from "react";

const CALENDAR_URL = "https://calendar.app.google/riCES5AXDQzaAwF37";

const NAV_ITEMS = [
  { label: "実績", href: "#results" },
  { label: "サポート内容", href: "#support" },
  { label: "料金", href: "#pricing" },
  { label: "講師", href: "#profile" },
  { label: "合格者の声", href: "#voices" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-sm font-bold tracking-wide text-[var(--blue-800)]">
          SFC総合型サポート
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="text-[0.8rem] text-gray-500 hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex bg-[var(--blue-600)] text-white text-[0.8rem] font-medium px-5 py-2.5 rounded-lg hover:bg-[var(--blue-700)] transition-colors"
          >
            無料面談を予約
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setOpen(!open)}
            aria-label="メニュー"
          >
            <span className={`block h-[1.5px] w-5 bg-gray-700 transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-gray-700 transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-gray-700 transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        className={`md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-[0.9rem] text-gray-600 hover:text-gray-900 py-3 border-b border-gray-50"
            >
              {item.label}
            </a>
          ))}
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 mb-2 text-center bg-[var(--blue-600)] text-white text-[0.85rem] font-medium px-5 py-3 rounded-lg"
          >
            無料面談を予約する
          </a>
        </div>
      </nav>
    </header>
  );
}
