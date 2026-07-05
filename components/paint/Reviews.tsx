import FadeIn from "@/components/ui/FadeIn";

const reviews = [
  {
    name: "厚木市 M様",
    rating: 5,
    comment:
      "施工内容や塗料について丁寧に説明していただき、安心してお任せできました。仕上がりも想像以上で大変満足しています。",
  },
  {
    name: "海老名市 K様",
    rating: 5,
    comment:
      "職人さんの対応がとても丁寧で、毎日の作業報告も分かりやすかったです。近所への配慮も素晴らしく安心できました。",
  },
  {
    name: "伊勢原市 T様",
    rating: 5,
    comment:
      "見積りから施工完了までスムーズでした。価格だけでなく品質にも満足しており、知人にも紹介したいと思います。",
  },
];

export default function Reviews() {
  return (
    <section className="bg-zinc-50 py-24">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-emerald-700">
              VOICE
            </p>

            <h2 className="mt-4 text-4xl font-light text-zinc-900 md:text-5xl">
              お客様の声
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              掲載イメージです。受注後は実際のお客様の声へ差し替えます。
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 text-amber-400 text-xl">{"★★★★★"}</div>

                <p className="leading-8 text-zinc-600">「{review.comment}」</p>

                <div className="mt-8 border-t border-zinc-200 pt-6">
                  <p className="font-medium text-zinc-900">{review.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
