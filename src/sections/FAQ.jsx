import { useState } from "react";
import { ChevronDown } from "lucide-react";
import TitleSection from "../components/TitleSection";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Ada biaya transport tambahan gak?",
      answer:
        "Gak ada, biaya transport udah termasuk di harga jasa. Tapi, kalau teknisi udah dateng ke rumah dan kamu mendadak batalin orderan, cuma kena biaya cek standar aja kok.",
    },
    {
      question: "Hari Minggu atau tanggal merah bisa dipanggil?",
      answer:
        "Bisa banget! Kami tetap buka di hari Minggu dan tanggal merah buat bantu kamu yang libur kerja.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <TitleSection titleSection="FAQ" colorTitleSection="greyColor" />

          <h2
            className="mt-5 text-3xl md:text-4xl font-extrabold text-[var(--primary-color)]"
            style={{ fontFamily: "var(--font-heading)" }}>
            Pertanyaan yang
            <br />
            <span className="text-[var(--secondary-color)]">
              Sering Ditanyakan
            </span>
          </h2>

          <p className="mt-4 text-slate-600">
            Masih ada yang ingin ditanyakan? Berikut beberapa pertanyaan yang
            paling sering ditanyakan pelanggan kami.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left">
                  <h3 className="font-semibold text-[var(--primary-color)]">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="leading-8 text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
