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
    description: "住まいの状態に合わせた塗装プラン",
    icon: (
      <path d="m4.5 11.5 7.5-7 7.5 7m-13 0v7h11v-7M9.8 18.5v-4.8h4.4v4.8" />
    ),
  },
  {
    title: "安心の保証",
    description: "施工後も長く寄り添うアフターケア",
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
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#06140f] text-[#f8f3e8]"
      aria-labelledby="hero-title"
    >
      <Image
        src="/demo/paint/hero.png"
        alt="外壁を丁寧に塗装する職人"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center]"
      />

      <div className="absolute inset-0 bg-[#06140f]/35" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,19,14,0.98)_0%,rgba(3,23,16,0.93)_34%,rgba(3,23,16,0.56)_58%,rgba(3,18,14,0.14)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(0deg,rgba(3,18,14,0.92),rgba(3,18,14,0))]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pb-20 lg:pt-28">
        <div className="grid w-full items-end gap-12 lg:grid-cols-[minmax(0,1fr)_430px]">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-4 text-xs font-medium tracking-[0.24em] text-[#c9a96a] sm:text-sm">
              <span className="h-px w-10 bg-[#c9a96a]" aria-hidden="true" />
              地域密着20年の信頼と実績
              <span
                className="hidden h-px w-10 bg-[#c9a96a] sm:block"
                aria-hidden="true"
              />
            </p>

            <h1
              id="hero-title"
              className={`${serif.className} mt-7 max-w-3xl text-[clamp(2.8rem,7vw,6.7rem)] font-medium leading-[1.14] text-[#fffaf0]`}
            >
              塗装で守るのは、
              <br />
              建物だけじゃない。
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#f3ead8]/90 sm:text-lg sm:leading-9">
              大切な資産と、そこにある家族の暮らしを。
              <br className="hidden sm:block" />
              私たちの技術と誠実な施工で、住まいの未来まで支えます。
            </p>

            <div className="mt-12 grid max-w-3xl gap-6 sm:grid-cols-3">
              {strengths.map((item) => (
                <article
                  key={item.title}
                  className="border-[#d7bd7c]/35 sm:border-l sm:pl-7 sm:first:border-l-0 sm:first:pl-0"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-9 w-9 fill-none stroke-[#ead7a4] stroke-[1.4]"
                  >
                    {item.icon}
                  </svg>
                  <h2 className="mt-4 text-base font-semibold text-[#fffaf0]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#f3ead8]/78">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-16 items-center justify-center gap-3 rounded-sm border border-emerald-500/40 bg-[#00613d] px-8 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(0,0,0,0.28)] transition hover:bg-[#08724a] focus:outline-none focus:ring-2 focus:ring-[#e4c77f] focus:ring-offset-2 focus:ring-offset-[#06140f]"
                aria-label="無料相談とお見積りへ進む"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5 fill-none stroke-current stroke-[1.8]"
                >
                  <path d="M4.5 6.5h15v11h-15v-11Z" />
                  <path d="m5.2 7.2 6.8 5.4 6.8-5.4" />
                </svg>
                無料相談・お見積りはこちら
              </a>

              <a
                href="#works"
                className="inline-flex min-h-16 items-center justify-center gap-4 rounded-sm border border-[#f8f3e8]/55 bg-black/10 px-8 text-sm font-semibold text-[#fffaf0] backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#e4c77f] focus:ring-offset-2 focus:ring-offset-[#06140f]"
                aria-label="施工事例を見る"
              >
                施工事例を見る
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="grid gap-4 lg:justify-items-end">
            <aside
              className="w-full max-w-[430px] border border-[#d7bd7c]/35 bg-[#06140f]/70 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-8"
              aria-label="施工実績"
            >
              <div className="grid grid-cols-2 divide-x divide-[#d7bd7c]/25">
                {metrics.map((item) => (
                  <div key={item.label} className="px-5 first:pl-0 last:pr-0">
                    <p className="text-sm font-semibold text-[#d7bd7c]">
                      {item.label}
                    </p>
                    <p
                      className={`${serif.className} mt-4 text-4xl font-medium leading-none text-[#e4c77f] sm:text-5xl`}
                    >
                      {item.value}
                      <span className="ml-2 align-baseline text-sm font-sans text-[#fffaf0]">
                        {item.unit}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-right text-xs leading-5 text-[#f3ead8]/65">
                ※2026年度 デモサイト掲載用データ
              </p>
            </aside>

            <aside
              className="w-full max-w-[430px] border border-white/15 bg-white/[0.08] p-5 backdrop-blur-md"
              aria-label="保証内容"
            >
              <p className="text-xs font-medium tracking-[0.2em] text-[#d7bd7c]">
                WARRANTY
              </p>
              <div className="mt-3 flex items-end justify-between gap-5">
                <p className={`${serif.className} text-3xl text-[#fffaf0]`}>
                  最長10年保証
                </p>
                <p className="text-right text-sm leading-6 text-[#f3ead8]/75">
                  施工後の点検まで
                  <br />
                  一貫して対応
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 text-center text-[10px] font-medium tracking-[0.28em] text-[#f8f3e8]/70 md:block">
        SCROLL
        <span
          className="mx-auto mt-2 block h-12 w-px bg-[#f8f3e8]/45"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
