import Image from "next/image";
import { Noto_Serif_JP } from "next/font/google";

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const proof = [
  { label: "住宅リフォーム", text: "戸建ての改修に特化" },
  { label: "自社職人", text: "調査から施工まで一貫対応" },
  { label: "保証・点検", text: "引き渡し後も地域で支える" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#06140f] text-[#fffaf0]"
      aria-labelledby="hero-title"
    >
      <Image
        src="/demo/reform/hero.png"
        alt="住まいの外装を丁寧に施工する職人"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 bg-[#06140f]/30" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,18,13,0.98)_0%,rgba(8,31,23,0.92)_35%,rgba(8,31,23,0.54)_58%,rgba(8,31,23,0.10)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(0deg,rgba(4,18,13,0.92),rgba(4,18,13,0))]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pt-32">
        <div className="grid w-full items-end gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-4 text-xs font-semibold tracking-[0.24em] text-[#d7bd7c] sm:text-sm">
              <span className="h-px w-10 bg-[#d7bd7c]" aria-hidden="true" />
              厚木・海老名エリアの地域密着リフォーム
            </p>
            <h1
              id="hero-title"
              className={`${serif.className} mt-7 text-[clamp(2.75rem,7vw,6.4rem)] font-medium leading-[1.14] text-[#fffaf0]`}
            >
              暮らしを整え、
              <br />
              家の価値を育てる。
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#f7f4ee]/90 sm:text-lg sm:leading-9">
              水まわり、外装、間取り変更まで。住まいの悩みを丁寧に聞き、職人の目で本当に必要な改修だけをご提案します。
            </p>

            <div className="mt-12 grid max-w-3xl gap-6 sm:grid-cols-3">
              {proof.map((item) => (
                <div
                  key={item.label}
                  className="border-[#c8b89a]/35 sm:border-l sm:pl-7 sm:first:border-l-0 sm:first:pl-0"
                >
                  <p className="text-base font-semibold text-[#fffaf0]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#f7f4ee]/75">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-16 items-center justify-center rounded-sm bg-[#1f4a3d] px-8 text-sm font-semibold text-white shadow-[0_24px_60px_rgba(0,0,0,0.32)] transition hover:bg-[#2d6554] focus:outline-none focus:ring-2 focus:ring-[#d7bd7c] focus:ring-offset-2 focus:ring-offset-[#06140f]"
              >
                無料相談・現地調査を依頼
              </a>
              <a
                href="#works"
                className="inline-flex min-h-16 items-center justify-center gap-4 rounded-sm border border-[#fffaf0]/55 bg-black/10 px-8 text-sm font-semibold text-[#fffaf0] backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#d7bd7c] focus:ring-offset-2 focus:ring-offset-[#06140f]"
              >
                施工事例を見る
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="grid gap-4 lg:justify-items-end">
            <aside
              className="w-full max-w-[420px] border border-[#d7bd7c]/35 bg-[#06140f]/72 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.36)] backdrop-blur-md sm:p-8"
              aria-label="施工実績"
            >
              <div className="grid grid-cols-2 divide-x divide-[#d7bd7c]/25">
                <div className="pr-5">
                  <p className="text-sm font-semibold text-[#d7bd7c]">
                    累計施工
                  </p>
                  <p
                    className={`${serif.className} mt-4 text-5xl font-medium leading-none text-[#e4c77f]`}
                  >
                    1,800
                    <span className="ml-2 text-sm font-sans text-[#fffaf0]">
                      件以上
                    </span>
                  </p>
                </div>
                <div className="pl-5">
                  <p className="text-sm font-semibold text-[#d7bd7c]">
                    地域対応
                  </p>
                  <p
                    className={`${serif.className} mt-4 text-5xl font-medium leading-none text-[#e4c77f]`}
                  >
                    20
                    <span className="ml-2 text-sm font-sans text-[#fffaf0]">
                      年
                    </span>
                  </p>
                </div>
              </div>
              <p className="mt-5 text-right text-xs leading-5 text-[#f7f4ee]/65">
                ※デモサイト掲載用の仮数値です
              </p>
            </aside>
            <aside
              className="w-full max-w-[420px] border border-white/15 bg-white/[0.08] p-5 backdrop-blur-md"
              aria-label="相談しやすさ"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#d7bd7c]">
                PROMISE
              </p>
              <p className={`${serif.className} mt-3 text-3xl text-[#fffaf0]`}>
                しつこい営業なし
              </p>
              <p className="mt-3 text-sm leading-7 text-[#f7f4ee]/75">
                見積もりだけ、小さな修繕、補助金相談も歓迎します。
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
