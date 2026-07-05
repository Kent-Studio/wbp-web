export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold tracking-[0.2em] text-white">
              PAINT DEMO
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              地域密着の外壁・屋根塗装専門店。
              <br />
              このサイトはWORKBENCH PARTNERSが制作した 営業用デモサイトです。
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Menu
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a href="#works" className="transition hover:text-white">
                  施工事例
                </a>
              </li>

              <li>
                <a href="#flow" className="transition hover:text-white">
                  施工の流れ
                </a>
              </li>

              <li>
                <a href="#faq" className="transition hover:text-white">
                  よくある質問
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-white">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>

          {/* Area */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Area
            </h3>

            <ul className="mt-6 space-y-4 text-zinc-400">
              <li>厚木市</li>
              <li>海老名市</li>
              <li>伊勢原市</li>
              <li>愛川町</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          © 2026 WORKBENCH PARTNERS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
