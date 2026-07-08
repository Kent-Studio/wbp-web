export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-[#1f4a3d] px-5 py-24 text-[#fffaf0] sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.24em] text-[#d7bd7c]">CONTACT</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
            まずは、住まいの気になる場所を聞かせてください。
          </h2>
          <p className="mt-7 leading-8 text-[#f7f4ee]/80">
            無料相談・現地調査・概算見積もりに対応します。しつこい営業は行いません。
          </p>
          <p className="mt-4 text-sm leading-7 text-[#f7f4ee]/70">
            フォーム送信後、1営業日以内に担当者よりご連絡します。
          </p>
          <div className="mt-10 border border-[#d7bd7c]/35 p-6">
            <p className="text-sm text-[#d7bd7c]">電話相談</p>
            <p className="mt-2 text-3xl font-semibold">046-000-0000</p>
            <p className="mt-2 text-sm text-[#f7f4ee]/70">受付 9:00-18:00 / 水曜定休</p>
          </div>
        </div>

        <form className="grid gap-5 bg-[#f7f4ee] p-6 text-[#26231f] sm:p-8">
          <label className="grid gap-2 text-sm font-semibold">
            お名前
            <input className="border border-[#d8d3c8] bg-white px-4 py-3 font-normal outline-none focus:border-[#1f4a3d]" placeholder="山田 太郎" />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            メールアドレス
            <input type="email" className="border border-[#d8d3c8] bg-white px-4 py-3 font-normal outline-none focus:border-[#1f4a3d]" placeholder="sample@example.com" />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            電話番号
            <input type="tel" className="border border-[#d8d3c8] bg-white px-4 py-3 font-normal outline-none focus:border-[#1f4a3d]" placeholder="090-1234-5678" />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            ご相談内容
            <textarea className="min-h-32 border border-[#d8d3c8] bg-white px-4 py-3 font-normal outline-none focus:border-[#1f4a3d]" placeholder="キッチン改修、外壁、雨漏り点検など" />
          </label>
          <button type="button" className="mt-2 bg-[#a66a43] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#8f5735]">
            無料相談を送信する
          </button>
          <p className="text-xs leading-6 text-[#6a6258]">デモサイトのため送信機能は未実装です。実運用時はフォームまたは外部サービスへ接続します。</p>
        </form>
      </div>
    </section>
  );
}
