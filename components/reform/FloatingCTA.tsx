export default function FloatingCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#d8d3c8] bg-[#f7f4ee]/96 p-3 shadow-[0_-12px_32px_rgba(0,0,0,0.12)] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a href="tel:0460000000" className="border border-[#1f4a3d] px-4 py-3 text-center text-sm font-semibold text-[#1f4a3d]">
          電話する
        </a>
        <a href="#contact" className="bg-[#1f4a3d] px-4 py-3 text-center text-sm font-semibold text-white">
          無料相談
        </a>
      </div>
    </div>
  );
}
