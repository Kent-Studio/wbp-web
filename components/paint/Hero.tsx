import Image from "next/image";
import { Noto_Serif_JP } from "next/font/google";

import {
  HiOutlineShieldCheck,
  HiOutlineHomeModern,
  HiOutlineSparkles,
  HiArrowRight,
  HiStar,
  HiOutlineChevronDoubleDown,
  HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2";

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const strengths = [
  {
    title: "高品質な施工",
    description: "自社職人による確かな技術力",
    icon: HiOutlineShieldCheck,
  },
  {
    title: "最適なご提案",
    description: "住まいの状態に合わせた最適な塗装プラン",
    icon: HiOutlineHomeModern,
  },
  {
    title: "安心の保証",
    description: "施工後も長く寄り添うアフターサポート",
    icon: HiOutlineSparkles,
  },
];

const metrics = [
  {
    label: "施工実績",
    value: "2,500",
    unit: "件以上",
  },
  {
    label: "お客様満足度",
    value: "98.6",
    unit: "%",
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate min-h-screen min-h-[100svh] overflow-hidden bg-[#06140f] text-[#f8f3e8]"
    >
      {/* Background Image */}

      <Image
        src="/demo/paint/hero.png"
        alt="外壁を丁寧に塗装する職人"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center] scale-105 brightness-90 contrast-110"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#06140f]/35" aria-hidden="true" />

      {/* Left Gradient */}

      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,19,14,0.98)_0%,rgba(3,23,16,0.93)_34%,rgba(3,23,16,0.58)_58%,rgba(3,18,14,0.12)_100%)]"
        aria-hidden="true"
      />

      {/* Premium Radial Light */}

      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,170,76,0.14),transparent_45%)]"
        aria-hidden="true"
      />

      {/* Bottom Fade */}

      <div
        className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(0deg,rgba(3,18,14,0.94),rgba(3,18,14,0))]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-screen min-h-[100svh] max-w-7xl items-center px-6 pb-16 pt-28 sm:px-10 sm:pt-32 lg:px-10 lg:pb-20 lg:pt-28">
        <div className="grid w-full items-end gap-14 lg:grid-cols-[minmax(0,1.2fr)_380px]">
          {/* Left */}

          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-4 text-xs font-medium tracking-[0.28em] text-[#d6b16f] uppercase sm:text-sm">
              <span className="h-px w-10 bg-[#d6b16f]" aria-hidden="true" />
              地域密着20年の信頼と実績
              <span
                className="hidden h-px w-10 bg-[#d6b16f] sm:block"
                aria-hidden="true"
              />
            </p>

            <h1
              id="hero-title"
              className={`${serif.className} mt-8 max-w-4xl text-[clamp(2.6rem,5vw,5.8rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-[#fffaf2]`}
            >
              塗装で守るのは、
              <br />
              建物だけじゃない。
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-[#f3ead8]/90">
              大切な資産と、そこにある家族の暮らしを。
              <br className="hidden sm:block" />
              私たちの技術と誠実な施工で、 住まいの未来まで支えます。
            </p>

            {/* Strength */}

            <div className="mt-14 grid max-w-4xl gap-8 sm:grid-cols-3">
              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="text-center border-[#c9a96a]/30 sm:border-l sm:px-6 sm:first:border-l-0"
                  >
                    <Icon className="mx-auto h-10 w-10 text-[#e6c985]" />
                    <h3 className="mt-5 text-lg font-semibold text-[#fffaf2]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#f3ead8]/78">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>

            {/* CTA */}

            <div className="mt-14 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                aria-label="無料見積りへ進む"
                className="inline-flex min-h-16 items-center justify-center gap-3 rounded-xl border border-[#c9a96a]/30 bg-[#005f3c] px-9 text-sm font-semibold text-white shadow-[0_24px_60px_rgba(0,0,0,.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b7349] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#d6b16f] focus:ring-offset-2 focus:ring-offset-[#06140f]"
              >
                <HiOutlineClipboardDocumentCheck className="h-5 w-5" />
                無料相談・お見積り
                <HiArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#works"
                aria-label="施工事例を見る"
                className="inline-flex min-h-16 items-center justify-center gap-3 rounded-xl border border-[#f8f3e8]/40 bg-black/15 px-9 text-sm font-semibold text-[#fffaf2] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#d6b16f] focus:ring-offset-2 focus:ring-offset-[#06140f]"
              >
                施工事例を見る
                <HiArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right */}

          <div className="grid gap-5 lg:justify-items-end">
            <aside
              aria-label="施工実績"
              className="w-full max-w-[380px] rounded-2xl border border-[#c9a96a]/30 bg-[#081d16]/75 p-6 shadow-[0_30px_90px_rgba(0,0,0,.42)] backdrop-blur-md"
            >
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-[#d6b16f]">
                  PERFORMANCE
                </p>

                <div className="flex gap-1 text-[#e4c77f]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <HiStar key={i} className="h-4 w-4" />
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 divide-x divide-[#c9a96a]/20">
                {metrics.map((item) => (
                  <div key={item.label} className="px-5 first:pl-0 last:pr-0">
                    <p className="text-sm font-semibold text-[#d6b16f]">
                      {item.label}
                    </p>

                    <p
                      className={`${serif.className} mt-4 flex items-end text-4xl leading-none text-[#e6c985]`}
                    >
                      <span>{item.value}</span>

                      <span className="ml-2 whitespace-nowrap text-sm font-sans text-[#fffaf2]">
                        {item.unit}
                      </span>
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-right text-xs leading-5 text-[#f3ead8]/60">
                ※2026年度 デモサイト掲載用データ
              </p>
            </aside>

            <aside
              aria-label="保証内容"
              className="w-full max-w-[380px] rounded-2xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur-md"
            >
              <p className="text-xs font-semibold tracking-[0.22em] text-[#d6b16f]">
                WARRANTY
              </p>

              <div className="mt-4 flex items-end justify-between gap-6">
                <div>
                  <p className={`${serif.className} text-2xl text-[#fffaf2]`}>
                    最長10年保証
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#f3ead8]/75">
                    施工後の定期点検から
                    <br />
                    アフターサポートまで対応
                  </p>
                </div>

                <div className="rounded-full border border-[#d6b16f]/30 p-4">
                  <HiOutlineShieldCheck className="h-9 w-9 text-[#e6c985]" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Scroll */}

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="text-center text-[10px] font-medium tracking-[0.35em] text-[#f8f3e8]/70">
          SCROLL
        </div>

        <HiOutlineChevronDoubleDown className="mx-auto mt-3 h-5 w-5 animate-bounce text-[#f8f3e8]/70" />
      </div>
    </section>
  );
}
