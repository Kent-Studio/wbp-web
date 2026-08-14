import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";

export default function FloatingCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.2)] lg:hidden">
      <a
        href="tel:0000000000"
        className="flex min-h-16 flex-1 items-center justify-center gap-2 bg-[#111815] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#1b2521] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#d6b16f]"
      >
        <HiOutlinePhone className="h-5 w-5 shrink-0" aria-hidden="true" />
        電話で相談
      </a>

      <a
        href="#contact"
        className="flex min-h-16 flex-1 items-center justify-center gap-2 bg-[#005f3c] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#08724a] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#d6b16f]"
      >
        <HiOutlineEnvelope className="h-5 w-5 shrink-0" aria-hidden="true" />
        無料相談・お見積り
      </a>
    </div>
  );
}
