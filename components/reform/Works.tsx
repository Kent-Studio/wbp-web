const works = [
  {
    type: "水まわり改修",
    title: "築28年戸建て キッチン・LDK改修",
    area: "厚木市 / 工期 12日",
    budget: "参考目安 180万円〜",
    detail: "暗かった独立キッチンを、家族が集まる明るいLDKへ。収納計画まで見直しました。",
  },
  {
    type: "外装リフォーム",
    title: "外壁・屋根・雨樋の総合メンテナンス",
    area: "海老名市 / 工期 16日",
    budget: "参考目安 120万円〜",
    detail: "劣化診断をもとに塗装と雨仕舞いを調整。台風前の不安を解消しました。",
  },
  {
    type: "バリアフリー",
    title: "玄関まわりと浴室の安全改修",
    area: "伊勢原市 / 工期 7日",
    budget: "参考目安 65万円〜",
    detail: "段差、手すり、浴室暖房を整え、ご家族が安心して暮らせる住まいに。",
  },
];

export default function Works() {
  return (
    <section id="works" className="scroll-mt-20 bg-[#f7f4ee] px-5 py-24 text-[#26231f] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.24em] text-[#a66a43]">WORKS</p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">暮らしに合わせた施工事例</h2>
          </div>
          <a href="#contact" className="text-sm font-semibold text-[#1f4a3d] underline underline-offset-8">
            類似工事の概算を相談する
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {works.map((work) => (
            <article key={work.title} className="border border-[#d8d3c8] bg-[#fffaf0] p-7 shadow-sm">
              <p className="text-sm font-semibold text-[#a66a43]">{work.type}</p>
              <h3 className="mt-5 text-2xl font-semibold leading-snug">{work.title}</h3>
              <p className="mt-4 text-sm text-[#6a6258]">{work.area}</p>
              <p className="mt-3 inline-flex border border-[#c8b89a] px-3 py-2 text-sm font-semibold text-[#1f4a3d]">
                {work.budget}
              </p>
              <p className="mt-6 leading-8 text-[#4a453d]">{work.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
