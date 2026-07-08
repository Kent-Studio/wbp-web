import { Noto_Serif_JP } from "next/font/google";

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-[#f7f4ee] px-5 py-24 text-[#26231f] sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold tracking-[0.24em] text-[#a66a43]">ABOUT</p>
          <h2 className={`${serif.className} mt-5 text-4xl font-medium leading-tight sm:text-5xl`}>
            住まいの不安を、
            <br />
            工務店の目でほどく。
          </h2>
        </div>
        <div className="space-y-6 text-base leading-9 text-[#4a453d] sm:text-lg">
          <p>
            森庭工務店は、地域の戸建て住宅に向き合うリフォーム工務店です。水まわり、外壁、内装、断熱、バリアフリーまで、暮らしの変化に合わせた改修を一棟ずつ丁寧に計画します。
          </p>
          <p>
            まだ直さなくてよい箇所まで急がせることはありません。現地調査で状態を見極め、費用、工程、保証の範囲をわかりやすくお伝えします。
          </p>
        </div>
      </div>
    </section>
  );
}
