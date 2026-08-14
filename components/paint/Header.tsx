"use client";

import { useEffect, useState } from "react";
import {
  HiOutlineBars3,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineXMark,
} from "react-icons/hi2";

import { TbBuildingEstate } from "react-icons/tb";

const navigationLinks = [
  {
    label: "ホーム",
    href: "#top",
  },
  {
    label: "当社の強み",
    href: "#features",
  },
  {
    label: "施工事例",
    href: "#works",
  },
  {
    label: "お客様の声",
    href: "#reviews",
  },
  {
    label: "工事の流れ",
    href: "#flow",
  },
  {
    label: "よくあるご質問",
    href: "#faq",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06140f]/90 text-white backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? "shadow-[0_12px_40px_rgba(0,0,0,0.28)]" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:h-24 lg:px-10">
        {/* Logo */}
        <a
          href="#top"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3"
          aria-label="ページ上部へ戻る"
        >
          <span
            className="flex h-12 w-12 items-center justify-center rounded-none border border-[#d6b16f] text-[#d6b16f] transition-all duration-300 group-hover:border-[#e6c985] group-hover:text-[#e6c985]"
            aria-hidden="true"
          >
            <TbBuildingEstate className="h-7 w-7" />
          </span>

          <span className="leading-none">
            <span className="block text-lg font-medium tracking-[0.24em] text-[#fffaf2] lg:text-xl">
              ATSUGI
            </span>

            <span className="mt-1.5 block text-[9px] tracking-[0.22em] text-[#d9d0bf]/75 lg:text-[10px]">
              EXTERIOR PAINTING
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-5 xl:flex xl:gap-6"
          aria-label="メインナビゲーション"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative whitespace-nowrap py-3 text-sm font-medium text-[#f8f3e8]/85 transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[#d6b16f] after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop contact area */}
        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <a
            href="tel:0000000000"
            className="group flex items-center gap-3"
            aria-label="電話をかける"
          >
            <HiOutlinePhone
              className="h-6 w-6 text-[#fffaf2] transition-colors group-hover:text-[#d6b16f]"
              aria-hidden="true"
            />

            <span>
              <span className="block whitespace-nowrap text-lg font-semibold tracking-[0.04em] text-[#fffaf2]">
                000-0000-0000
              </span>

              <span className="mt-1 block whitespace-nowrap text-[10px] text-[#f3ead8]/65">
                受付 8:00〜18:00（土日祝対応）
              </span>
            </span>
          </a>

          <a
            href="#contact"
            className="group inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-sm border border-[#158459]/55 bg-[#005f3c] px-5 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#08724a] hover:shadow-[0_18px_45px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-[#d6b16f] focus:ring-offset-2 focus:ring-offset-[#06140f] xl:px-6"
          >
            <HiOutlineEnvelope className="h-5 w-5" aria-hidden="true" />
            無料相談・お見積り
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/15 bg-white/[0.06] text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#d6b16f] xl:hidden"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? (
            <HiOutlineXMark className="h-7 w-7" aria-hidden="true" />
          ) : (
            <HiOutlineBars3 className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-[#06140f]/98 transition-[max-height,opacity] duration-300 xl:hidden ${
          menuOpen
            ? "max-h-[calc(100svh-5rem)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav
          className="max-h-[calc(100svh-5rem)] overflow-y-auto px-5 py-6 sm:px-8"
          aria-label="モバイルナビゲーション"
        >
          <ul>
            {navigationLinks.map((link) => (
              <li key={link.label} className="border-b border-white/10">
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex min-h-14 items-center justify-between py-3 text-base font-medium text-[#f8f3e8]/90 transition-colors hover:text-[#d6b16f]"
                >
                  {link.label}

                  <span className="text-[#d6b16f]" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a
              href="tel:0000000000"
              onClick={closeMenu}
              className="flex min-h-14 items-center justify-center gap-3 border border-white/20 bg-white/[0.05] px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <HiOutlinePhone className="h-5 w-5" aria-hidden="true" />
              電話で相談する
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="flex min-h-14 items-center justify-center gap-3 bg-[#005f3c] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#08724a]"
            >
              <HiOutlineEnvelope className="h-5 w-5" aria-hidden="true" />
              無料相談・お見積り
            </a>
          </div>

          <p className="mt-5 text-center text-xs leading-6 text-[#f3ead8]/60">
            受付時間 8:00〜18:00
            <br />
            土日祝も対応しています
          </p>
        </nav>
      </div>
    </header>
  );
}
