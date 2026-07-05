import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

export default function Greeting() {
  return (
    <section className="bg-white py-24">
      <FadeIn>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 md:flex-row">
          {/* Photo */}
          <div className="flex-1">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/demo/paint/president.jpg"
                alt="代表"
                width={700}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex-1">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-emerald-700">
              GREETING
            </p>

            <h2 className="mt-4 text-4xl font-light text-zinc-900 md:text-5xl">
              代表挨拶
            </h2>

            <h3 className="mt-10 text-3xl leading-relaxed font-light text-zinc-900">
              一軒一軒を、
              <br />
              自分の家だと思って施工しています。
            </h3>

            <p className="mt-8 leading-9 text-zinc-600">
              地域のお客様との信頼関係を大切にし、
              お問い合わせから施工完了、アフターフォローまで
              一貫して責任を持って対応しています。
            </p>

            <p className="mt-6 leading-9 text-zinc-600">
              塗装は見た目を美しくするだけでなく、
              大切な住まいを長く守るための工事です。 一件一件丁寧に施工し、
              「お願いしてよかった」と思っていただける仕事を心掛けています。
            </p>

            <p className="mt-10 text-lg font-medium text-zinc-900">
              代表　山田 太郎（掲載イメージ）
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
