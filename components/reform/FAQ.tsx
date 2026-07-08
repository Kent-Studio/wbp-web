"use client";

import { useState } from "react";

const faqs = [
  ["見積もりだけでも相談できますか？", "はい。現地調査とお見積もりは無料です。ご納得いただくまで契約を急がせることはありません。"],
  ["小さな修繕でも依頼できますか？", "可能です。手すり、建具、雨漏り点検、部分補修など、住まいの小さな困りごともご相談ください。"],
  ["補助金や助成金の相談はできますか？", "対象工事や時期により異なるため、現地調査時に利用可能性を確認してご案内します。"],
  ["住みながら工事できますか？", "多くの工事で可能です。水まわりや大規模改修では生活への影響を事前に説明し、工程を調整します。"],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-[#f7f4ee] px-5 py-24 text-[#26231f] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-sm font-semibold tracking-[0.24em] text-[#a66a43]">FAQ</p>
        <h2 className="mt-5 text-center text-3xl font-semibold sm:text-4xl">よくあるご質問</h2>
        <div className="mt-12 divide-y divide-[#d8d3c8] border-y border-[#d8d3c8]">
          {faqs.map(([question, answer], index) => (
            <div key={question}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={open === index}
                onClick={() => setOpen(open === index ? -1 : index)}
              >
                <span className="text-lg font-semibold">{question}</span>
                <span className="text-2xl text-[#a66a43]" aria-hidden="true">
                  {open === index ? "−" : "+"}
                </span>
              </button>
              {open === index && <p className="pb-7 leading-8 text-[#5d564d]">{answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
