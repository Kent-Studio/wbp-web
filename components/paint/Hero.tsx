import Image from "next/image";
import { Noto_Serif_JP } from "next/font/google";

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const strengths = [
  {
    title: "高品質な施工",
    description: "自社職人による確かな技術力",
    icon: (
      <path d="M12 3.5 5.5 6v5.2c0 4 2.7 7.7 6.5 9.3 3.8-1.6 6.5-5.3 6.5-9.3V6L12 3.5Zm0 4.2v8.5m-3.2-4.1 2.3 2.3 4.4-5" />
    ),
  },
  {
    title: "最適なご提案",
    description: "住まいの状態に合わせた最適な塗装プラン",
    icon: (
      <path d="m4.5 11.5 7.5-7 7.5 7m-13 0v7h11v-7M9.8 18.5v-4.8h4.4v4.8" />
    ),
  },
  {
    title: "安心の保証",
    description: "施工後も長く寄り添うアフターサポート",
    icon: (
      <path d="M12 20.5s-7.3-4.1-7.3-10a4 4 0 0 1 7.3-2.3 4 4 0 0 1 7.3 2.3c0 5.9-7.3 10-7.3 10Z" />
    ),
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
        className="object-cover object-right"
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
        <div className="grid w-full items-end gap-14 lg:grid-cols-[minmax(0,1fr)_430px]">
          {/* Left */}

          <div className="max-w-3xl">
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
              className={`${serif.className} mt-8 max-w-3xl text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[1.14] text-[#fffaf2]`}
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

            <div className="mt-14 grid max-w-3xl gap-8 sm:grid-cols-3">
              {strengths.map((item) => (
                <article
                  key={item.title}
                  className="border-[#c9a96a]/30 sm:border-l sm:pl-7 sm:first:border-l-0 sm:first:pl-0"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-9 w-9 fill-none stroke-[#e6c985] stroke-[1.4]"
                  >
                    {item.icon}
                  </svg>

                  <h3 className="mt-4 text-base font-semibold text-[#fffaf2]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#f3ead8]/78">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-14 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                aria-label="無料見積りへ進む"
                className="inline-flex min-h-16 items-center justify-center gap-3 rounded-xl border border-[#c9a96a]/30 bg-[#005f3c] px-9 text-sm font-semibold text-white shadow-[0_24px_60px_rgba(0,0,0,.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b7349] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#d6b16f] focus:ring-offset-2 focus:ring-offset-[#06140f]"
              >
                無料見積りはこちら
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5 fill-none stroke-current stroke-[2]"
                >
                  <path d="M5 12h14" />
                  <path d="m13 5 7 7-7 7" />
                </svg>
              </a>

              <a
                href="#works"
                aria-label="施工事例を見る"
                className="inline-flex min-h-16 items-center justify-center gap-3 rounded-xl border border-[#f8f3e8]/40 bg-black/15 px-9 text-sm font-semibold text-[#fffaf2] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#d6b16f] focus:ring-offset-2 focus:ring-offset-[#06140f]"
              >
                施工事例を見る
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5 fill-none stroke-current stroke-[2]"
                >
                  <path d="M5 12h14" />
                  <path d="m13 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right */}

          <div className="grid gap-5 lg:justify-items-end">
            <aside
              aria-label="施工実績"
              className="w-full max-w-[430px] rounded-2xl border border-[#c9a96a]/30 bg-[#081d16]/75 p-8 shadow-[0_30px_90px_rgba(0,0,0,.42)] backdrop-blur-md"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold tracking-[0.18em] text-[#d6b16f]">
                  PERFORMANCE
                </p>

                <div className="flex text-[#e4c77f]">★★★★★</div>
              </div>

              <div className="mt-8 grid grid-cols-2 divide-x divide-[#c9a96a]/20">
                {metrics.map((item) => (
                  <div key={item.label} className="px-5 first:pl-0 last:pr-0">
                    <p className="text-sm font-semibold text-[#d6b16f]">
                      {item.label}
                    </p>

                    <p
                      className={`${serif.className} mt-4 text-5xl leading-none text-[#e6c985]`}
                    >
                      {item.value}

                      <span className="ml-2 text-sm font-sans text-[#fffaf2]">
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
              className="w-full max-w-[430px] rounded-2xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md"
            >
              <p className="text-xs font-semibold tracking-[0.22em] text-[#d6b16f]">
                WARRANTY
              </p>

              <div className="mt-4 flex items-end justify-between gap-6">
                <div>
                  <p className={`${serif.className} text-3xl text-[#fffaf2]`}>
                    最長10年保証
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#f3ead8]/75">
                    施工後の定期点検から
                    <br />
                    アフターサポートまで対応
                  </p>
                </div>

                <div className="rounded-full border border-[#d6b16f]/30 px-5 py-3 text-center">
                  <p className="text-xs tracking-[0.18em] text-[#d6b16f]">
                    AFTER
                  </p>

                  <p className="mt-1 text-lg font-semibold text-white">CARE</p>
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

        <span
          aria-hidden="true"
          className="mx-auto mt-3 block h-14 w-px origin-top animate-scroll-line bg-[#f8f3e8]/45"
        />
      </div>
    </section>
  );
}
