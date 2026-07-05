import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-24 md:flex-row">
        {/* Left */}
        <div className="flex-1">
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-emerald-700 uppercase">
            Atsugi Exterior Painting
          </p>

          <h1 className="text-5xl font-light leading-tight text-zinc-900 md:text-6xl">
            厚木市の
            <br />
            外壁・屋根塗装専門店
          </h1>

          <p className="mt-8 text-xl leading-9 text-zinc-600">
            職人直営だからできる、
            <br />
            安心価格と高品質施工。
          </p>

          <div className="mt-8 space-y-2 text-zinc-700">
            <p>✓ 地域密着・自社施工</p>
            <p>✓ 無料見積・現地調査</p>
            <p>✓ 最長10年保証対応</p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-md bg-emerald-900 px-8 py-4 text-center font-medium text-white transition hover:bg-emerald-800"
            >
              無料見積りはこちら
            </a>

            <a
              href="#works"
              className="rounded-md border border-zinc-300 px-8 py-4 text-center font-medium transition hover:bg-zinc-100"
            >
              施工事例を見る
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex-1">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/demo/paint/hero.jpg"
              alt="施工イメージ"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
