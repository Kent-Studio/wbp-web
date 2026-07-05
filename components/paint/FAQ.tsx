"use client";

import FadeIn from "@/components/ui/FadeIn";
import { useState } from "react";

const faqs = [
  {
    question: "見積りだけでもお願いできますか？",
    answer:
      "もちろん可能です。現地調査・お見積りは無料です。ご納得いただけるまで丁寧にご説明いたします。",
  },
  {
    question: "工事期間はどのくらいですか？",
    answer:
      "一般的な戸建住宅の場合、7〜14日程度が目安です。天候や施工内容によって前後する場合があります。",
  },
  {
    question: "工事中は家にいないといけませんか？",
    answer:
      "ご不在でも施工可能です。毎日の作業内容や進捗はご報告いたしますのでご安心ください。",
  },
  {
    question: "保証はありますか？",
    answer:
      "施工内容に応じた保証をご用意しております。工事完了後もアフターフォローを大切にしています。",
  },
  {
    question: "対応エリアはどこですか？",
    answer:
      "厚木市を中心に、海老名市・伊勢原市・愛川町など近隣エリアに対応しています。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-white py-24">
      <FadeIn>
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-700">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-light text-zinc-900 md:text-5xl">
              よくあるご質問
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              お客様から多くいただくご質問をまとめました。
            </p>
          </div>

          <div className="mt-16 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-6 text-left transition hover:bg-zinc-50"
                >
                  <span className="text-lg font-medium text-zinc-900">
                    {faq.question}
                  </span>

                  <span className="text-2xl text-emerald-700">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="border-t border-zinc-200 px-8 py-6">
                    <p className="leading-8 text-zinc-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
