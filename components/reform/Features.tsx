const features = [
  {
    title: "現地調査から職人が同席",
    text: "営業担当だけで判断せず、施工を知る職人が劣化・下地・納まりまで確認します。",
  },
  {
    title: "暮らしに合わせた優先順位",
    text: "すぐ直すべき箇所、将来でよい箇所を分け、無理のない改修計画に整えます。",
  },
  {
    title: "小さな工事も相談しやすい",
    text: "手すり一本、建具調整、雨漏り点検など、住まいの小さな違和感にも対応します。",
  },
  {
    title: "保証と点検まで一貫対応",
    text: "施工後の点検・補修相談まで、地域の工務店として長く寄り添います。",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 bg-[#fffaf0] px-5 py-24 text-[#26231f] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.24em] text-[#a66a43]">FEATURES</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">森庭工務店が選ばれる理由</h2>
          <p className="mt-5 leading-8 text-[#5d564d]">
            華やかな見せ方より、調査・提案・施工・アフターの正確さを大切にしています。
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-[#d8d3c8] bg-[#d8d3c8] md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <article key={feature.title} className="bg-[#fffaf0] p-8">
              <p className="font-serif text-4xl text-[#c8b89a]">0{index + 1}</p>
              <h3 className="mt-8 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-4 leading-8 text-[#5d564d]">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
