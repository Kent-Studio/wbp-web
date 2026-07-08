const steps = [
  ["01", "無料相談", "電話・フォームから、気になる箇所やご希望をお聞かせください。"],
  ["02", "現地調査", "劣化、寸法、下地、生活動線を確認し、必要な工事を整理します。"],
  ["03", "ご提案・見積もり", "工事範囲、使用素材、費用、工期、保証内容を明確にします。"],
  ["04", "施工", "近隣配慮と安全管理を徹底し、職人が丁寧に進めます。"],
  ["05", "引き渡し・点検", "仕上がり確認後も、定期点検と補修相談で暮らしを支えます。"],
];

export default function Flow() {
  return (
    <section id="flow" className="scroll-mt-20 bg-[#fffaf0] px-5 py-24 text-[#26231f] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold tracking-[0.24em] text-[#a66a43]">FLOW</p>
        <h2 className="mt-5 text-center text-3xl font-semibold sm:text-4xl">お問い合わせから施工後まで</h2>
        <div className="mt-14 grid gap-4">
          {steps.map(([number, title, text]) => (
            <article key={number} className="grid gap-5 border border-[#d8d3c8] bg-[#f7f4ee] p-6 sm:grid-cols-[96px_180px_1fr] sm:items-center">
              <p className="font-serif text-4xl text-[#c8b89a]">{number}</p>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="leading-8 text-[#5d564d]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
