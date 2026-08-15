import { Noto_Serif_JP } from "next/font/google";
import { HiOutlineShieldCheck, HiStar } from "react-icons/hi2";

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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

type PerformanceCardsProps = {
  className?: string;
};

export default function PerformanceCards({
  className = "",
}: PerformanceCardsProps) {
  return (
    <div className={`grid gap-5 ${className}`}>
      {/* Performance */}
      <aside
        aria-label="施工実績"
        className="w-full max-w-[380px] rounded-2xl border border-[#c9a96a]/30 bg-[#081d16]/80 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-md"
      >
        <div className="flex items-center justify-between gap-4">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#d6b16f]">
            PERFORMANCE
          </p>

          <div className="flex gap-1 text-[#e4c77f]" aria-label="5つ星評価">
            {Array.from({ length: 5 }).map((_, index) => (
              <HiStar key={index} className="h-4 w-4" aria-hidden="true" />
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 grid-cols-2 divide-x divide-[#c9a96a]/20">
          {metrics.map((item) => (
            <div key={item.label} className="min-w-0 px-4 first:pl-0 last:pr-0">
              <p className="text-xs font-semibold text-[#d6b16f]">
                {item.label}
              </p>

              <p
                className={`${serif.className} mt-3 flex min-w-0 items-end text-3xl leading-none text-[#e6c985] sm:text-4xl`}
              >
                <span>{item.value}</span>

                <span className="ml-2 whitespace-nowrap font-sans text-xs text-[#fffaf2] sm:text-sm">
                  {item.unit}
                </span>
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-right text-[11px] leading-5 text-[#f3ead8]/55">
          ※2026年度 デモサイト掲載用データ
        </p>
      </aside>

      {/* Warranty */}
      <aside
        aria-label="保証内容"
        className="w-full max-w-[380px] rounded-2xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur-md"
      >
        <p className="text-[11px] font-semibold tracking-[0.22em] text-[#d6b16f]">
          WARRANTY
        </p>

        <div className="mt-4 flex items-center justify-between gap-5">
          <div className="min-w-0">
            <p
              className={`${serif.className} text-2xl leading-snug text-[#fffaf2]`}
            >
              最長10年保証
            </p>

            <p className="mt-3 text-sm leading-7 text-[#f3ead8]/75">
              施工後の定期点検から
              <br />
              アフターサポートまで対応
            </p>
          </div>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d6b16f]/30 bg-[#06140f]/30">
            <HiOutlineShieldCheck
              className="h-8 w-8 text-[#e6c985]"
              aria-hidden="true"
            />
          </div>
        </div>
      </aside>
    </div>
  );
}
