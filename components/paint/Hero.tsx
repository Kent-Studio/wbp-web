import Image from "next/image";

const trustPoints = [
  {
    label: "自社施工",
    text: "職人が直接対応",
  },
  {
    label: "現地調査",
    text: "住まいに合う提案",
  },
  {
    label: "保証対応",
    text: "施工後も安心",
  },
];

const achievements = [
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
      className="relative min-h-screen overflow-hidden bg-emerald-950 text-white"
      aria-labelledby="hero-title"
    >
      <Image
        src="/demo/paint/hero.jpg"
        alt="外壁を丁寧に塗装する職人"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-emerald-950/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/85 to-emerald-950/15" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-emerald-950/90 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-12 pt-28 sm:pb-16 lg:pt-24">
        <div className="grid w-full items-end gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-3 text-sm font-medium tracking-[0.28em] text-amber-200">
              <span className="h-px w-10 bg-amber-200" aria-hidden="true" />
              地域密着20年の信頼と実績
            </p>

            <h1
              id="hero-title"
              className="text-4xl font-light leading-tight tracking-normal text-white sm:text-5xl lg:text-7xl"
            >
              塗装で守るのは、
              <br />
              建物だけじゃない。
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-100 sm:text-lg">
              大切な住まいと、そこにある家族の暮らしを、職人の技術と誠実な施工で支えます。
            </p>

            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div
                  key={point.label}
                  className="border-l border-white/20 pl-5 first:border-l-0 first:pl-0 sm:first:border-l sm:first:pl-5 lg:first:border-l-0 lg:first:pl-0"
                >
                  <p className="text-base font-medium text-white">
                    {point.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-200">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-14 items-center justify-center rounded-md bg-emerald-700 px-7 text-sm font-medium text-white shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-emerald-950"
                aria-label="無料相談とお見積りへ進む"
              >
                無料相談・お見積りはこちら
              </a>

              <a
                href="#works"
                className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/45 bg-white/5 px-7 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-emerald-950"
                aria-label="施工事例を見る"
              >
                施工事例を見る
              </a>
            </div>
          </div>

          <aside
            className="w-full border border-amber-200/30 bg-emerald-950/70 p-6 shadow-2xl shadow-emerald-950/40 backdrop-blur-md sm:max-w-md lg:justify-self-end"
            aria-label="施工実績"
          >
            <div className="grid grid-cols-2 divide-x divide-amber-200/20">
              {achievements.map((item) => (
                <div key={item.label} className="px-5 first:pl-0 last:pr-0">
                  <p className="text-sm font-medium text-amber-200">
                    {item.label}
                  </p>
                  <p className="mt-3 font-serif text-4xl leading-none text-amber-100">
                    {item.value}
                    <span className="ml-1 align-baseline text-sm font-sans text-zinc-100">
                      {item.unit}
                    </span>
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-zinc-300">
              デモサイト用の仮数値です。実際の掲載時は最新の実績に差し替えてください。
            </p>
          </aside>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 text-center text-[10px] font-medium tracking-[0.28em] text-white/70 md:block">
        SCROLL
        <span
          className="mx-auto mt-2 block h-10 w-px bg-white/50"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
