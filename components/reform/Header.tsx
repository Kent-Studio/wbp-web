"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "私たちについて", href: "#about" },
  { label: "選ばれる理由", href: "#features" },
  { label: "施工事例", href: "#works" },
  { label: "流れ", href: "#flow" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition ${
        scrolled
          ? "border-[#d8d3c8] bg-[#f7f4ee]/95 shadow-sm backdrop-blur"
          : "border-white/15 bg-[#06140f]/55 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#top"
          className={`font-serif text-xl font-semibold tracking-[0.18em] ${
            scrolled ? "text-[#26231f]" : "text-[#fffaf0]"
          }`}
          aria-label="森庭工務店 トップへ"
        >
          MORINIWA
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="主要ナビゲーション"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:text-[#a66a43] ${
                scrolled ? "text-[#3c3832]" : "text-[#fffaf0]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div
            className={`text-right ${
              scrolled ? "text-[#26231f]" : "text-[#fffaf0]"
            }`}
          >
            <p className="text-base font-semibold">046-000-0000</p>
            <p className="text-xs opacity-75">受付 9:00-18:00 / 水曜定休</p>
          </div>
          <a
            href="#contact"
            className="rounded-sm bg-[#1f4a3d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2d6554] focus:outline-none focus:ring-2 focus:ring-[#c8b89a]"
          >
            無料相談
          </a>
        </div>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center border lg:hidden ${
            scrolled
              ? "border-[#d8d3c8] text-[#26231f]"
              : "border-white/30 text-white"
          }`}
          aria-label="メニューを開閉"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-[#d8d3c8] bg-[#f7f4ee] px-5 py-5 lg:hidden">
          <nav
            className="mx-auto grid max-w-7xl gap-1"
            aria-label="モバイルナビゲーション"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-[#d8d3c8] py-4 text-sm font-medium text-[#26231f]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 rounded-sm bg-[#1f4a3d] px-5 py-4 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              無料相談・現地調査を依頼
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
