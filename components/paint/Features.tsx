import FadeIn from "@/components/ui/FadeIn";

const features = [
  {
    title: "地域密着",
    description:
      "厚木市を中心に迅速対応。現地調査から施工、アフターフォローまで責任を持って対応します。",
  },
  {
    title: "自社施工",
    description:
      "営業会社を介さず職人が直接施工。中間マージンを抑え、高品質な施工を適正価格でご提供します。",
  },
  {
    title: "最長10年保証",
    description:
      "施工後も安心していただけるよう、保証制度と定期点検で長く住まいを守ります。",
  },
  {
    title: "無料見積り",
    description:
      "現地調査・お見積りは無料。しつこい営業は一切行いませんので安心してご相談ください。",
  },
];

export default function Features() {
  return (
    <section className="bg-zinc-50 py-24">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-emerald-700">
              FEATURES
            </p>

            <h2 className="mt-4 text-4xl font-light text-zinc-900 md:text-5xl">
              選ばれる理由
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              地域に根ざした施工と、
              <br />
              一件一件を大切にする職人仕事。
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-900 text-xl font-semibold text-white">
                  ✓
                </div>

                <h3 className="text-2xl font-medium text-zinc-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-zinc-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
