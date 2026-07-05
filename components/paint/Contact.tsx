import FadeIn from "@/components/ui/FadeIn";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-emerald-900 py-24 text-white"
    >
      <FadeIn>
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-emerald-200">
              CONTACT
            </p>

            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              無料見積り・お問い合わせ
            </h2>

            <p className="mt-6 text-lg leading-8 text-emerald-100">
              外壁・屋根塗装のご相談、お見積りは無料です。
              <br />
              お気軽にお問い合わせください。
            </p>
          </div>

          <form className="mt-16 space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm">
                お名前
              </label>

              <input
                id="name"
                type="text"
                placeholder="山田 太郎"
                className="w-full rounded-lg border border-emerald-700 bg-white px-4 py-4 text-zinc-900 outline-none transition focus:border-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm">
                メールアドレス
              </label>

              <input
                id="email"
                type="email"
                placeholder="sample@example.com"
                className="w-full rounded-lg border border-emerald-700 bg-white px-4 py-4 text-zinc-900 outline-none transition focus:border-white"
              />
            </div>

            <div>
              <label htmlFor="tel" className="mb-2 block text-sm">
                電話番号
              </label>

              <input
                id="tel"
                type="tel"
                placeholder="090-1234-5678"
                className="w-full rounded-lg border border-emerald-700 bg-white px-4 py-4 text-zinc-900 outline-none transition focus:border-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm">
                ご相談内容
              </label>

              <textarea
                id="message"
                rows={6}
                placeholder="ご相談内容をご入力ください。"
                className="w-full rounded-lg border border-emerald-700 bg-white px-4 py-4 text-zinc-900 outline-none transition focus:border-white"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-white px-8 py-4 text-lg font-medium text-emerald-900 transition hover:bg-zinc-100"
            >
              無料で相談する
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-emerald-200">
            ※ デモサイトのため送信機能は実装していません。
            <br />
            実運用時はお問い合わせフォームまたはGoogleフォームへ接続します。
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
