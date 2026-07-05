"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    {
      label: "施工事例",
      href: "#works",
    },
    {
      label: "施工の流れ",
      href: "#flow",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
    {
      label: "お問い合わせ",
      href: "#contact",
    },
  ];

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#top"
          className="text-lg font-semibold tracking-[0.2em] text-zinc-900"
        >
          PAINT DEMO
        </a>

        {/* PC Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-700 transition hover:text-emerald-700"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-md bg-emerald-900 px-6 py-3 text-white transition hover:bg-emerald-800"
          >
            無料見積り
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <nav className="flex flex-col p-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-zinc-100 py-4"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-6 rounded-md bg-emerald-900 py-4 text-center text-white"
              onClick={() => setMenuOpen(false)}
            >
              無料見積り
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
