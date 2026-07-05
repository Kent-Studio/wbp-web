export default function FloatingCTA() {
  return (
    <>
      {/* PC */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:block">
        <a
          href="#contact"
          className="rounded-full bg-emerald-900 px-8 py-4 text-white shadow-xl transition hover:-translate-y-1 hover:bg-emerald-800"
        >
          無料見積りはこちら
        </a>
      </div>

      {/* Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden">
        <a
          href="tel:0000000000"
          className="flex-1 bg-zinc-900 py-4 text-center font-medium text-white transition hover:bg-zinc-800"
        >
          📞 電話する
        </a>

        <a
          href="#contact"
          className="flex-1 bg-emerald-900 py-4 text-center font-medium text-white transition hover:bg-emerald-800"
        >
          ✉ 無料見積り
        </a>
      </div>
    </>
  );
}
