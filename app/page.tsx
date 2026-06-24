export default function Home() {
  return (
    <main className="bg-white text-zinc-900">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <p className="text-sm font-medium tracking-[0.3em] text-zinc-900">
            WBP
          </p>

          <nav>
            <ul className="flex gap-8 text-sm text-zinc-600">
              <li>
                <a href="#about" className="hover:text-zinc-900">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-zinc-900">
                  Services
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-zinc-900">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex min-h-screen items-center justify-center px-6 pt-16">
        <div className="max-w-4xl text-center">
          <p className="mb-6 text-sm tracking-[0.4em] text-emerald-900">
            WORKBENCH PARTNERS
          </p>

          <h1 className="text-5xl font-light leading-tight md:text-7xl">
            地域事業者のための
            <br />
            Web制作・集客支援
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
            口コミで評価される技術が、 Webでも正しく伝わるように。
          </p>

          <div className="mt-12">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-emerald-900 px-8 py-4 text-white transition hover:opacity-90"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-zinc-200 px-6 py-32">
        <div className="mx-auto max-w-4xl">
          <p className="mb-10 text-sm tracking-[0.4em] text-emerald-900">
            ABOUT
          </p>

          <h2 className="mb-12 text-3xl font-light md:text-4xl">
            現場とITをつなぐパートナー
          </h2>

          <div className="space-y-6 text-lg leading-9 text-zinc-700">
            <p>
              WORKBENCH PARTNERSは地域事業者向けの
              Web制作・デジタル活用支援を行っています。
            </p>

            <p>
              製造業で設備保全業務を経験した後、
              現在はシステム開発に従事しています。
            </p>

            <p>
              現場の課題を理解する視点とITの知識を活かし、
              信頼されるホームページ制作を目指しています。
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-zinc-200 px-6 py-32">
        <div className="mx-auto max-w-4xl">
          <p className="mb-10 text-sm tracking-[0.4em] text-emerald-900">
            SERVICES
          </p>

          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xl font-medium">Website</h3>

              <p className="leading-8 text-zinc-600">ホームページ制作</p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-medium">Landing Page</h3>

              <p className="leading-8 text-zinc-600">ランディングページ制作</p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-medium">Digital Support</h3>

              <p className="leading-8 text-zinc-600">Web活用支援・改善提案</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-200 px-6 py-32">
        <div className="mx-auto max-w-4xl">
          <p className="mb-10 text-sm tracking-[0.4em] text-emerald-900">
            CONTACT
          </p>

          <h2 className="mb-6 text-3xl font-light md:text-4xl">お問い合わせ</h2>

          <p className="text-lg leading-8 text-zinc-700">
            お問い合わせフォームは現在準備中です。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-sm tracking-[0.3em] text-zinc-500">
            WORKBENCH PARTNERS
          </p>

          <p className="text-sm text-zinc-400">© 2026 WORKBENCH PARTNERS</p>
        </div>
      </footer>
    </main>
  );
}
