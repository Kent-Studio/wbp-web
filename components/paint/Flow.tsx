import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    title: "お問い合わせ",
    description:
      "お電話・メール・お問い合わせフォームからお気軽にご相談ください。",
  },
  {
    number: "02",
    title: "現地調査",
    description: "建物の状態を確認し、最適な施工方法をご提案します。",
  },
  {
    number: "03",
    title: "お見積り",
    description: "施工内容・使用塗料・費用を分かりやすくご説明します。",
  },
  {
    number: "04",
    title: "ご契約",
    description: "内容にご納得いただいた上でご契約となります。",
  },
  {
    number: "05",
    title: "施工開始",
    description: "安全管理を徹底し、丁寧に施工を進めます。",
  },
  {
    number: "06",
    title: "完成・お引渡し",
    description: "最終確認後、お引渡し。保証・アフターサポートもご案内します。",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="scroll-mt-20 bg-zinc-50 py-24">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-emerald-700">
              FLOW
            </p>

            <h2 className="mt-4 text-4xl font-light text-zinc-900 md:text-5xl">
              施工の流れ
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              お問い合わせから施工完了まで、 一つひとつ丁寧にご対応いたします。
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="text-5xl font-light text-emerald-100">
                  {step.number}
                </span>

                <h3 className="mt-4 text-2xl font-medium text-zinc-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-zinc-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
