import TitleSection from "../components/TitleSection";
import { Quote } from "lucide-react";

export default function Testimoni() {
  const testi = [
    {
      chat: `"Teknisinya jujur banget. Pas dicek ternyata freon saya masih penuh, jadi cuma perlu dicuci aja. Gak dikit-dikit dibilang freon abis kaya tempat lain. Recommended!"`,
      author: "Kak Sarah, Depok",
    },
    {
      chat: `"Admin WA-nya fast respon. Pas dapet jadwal, teknisinya dateng tepat waktu dan kerjanya rapi banget pake ditutup plastik dulu kasur kamar saya."`,
      author: "Mas Rian, Jagakarsa",
    },
  ];

  return (
    <section className="bg-[var(--primary-color)] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex gap-4 items-center ">
        {/* Header */}
        <div className=" max-w-2xl mx-auto mb-12">
          <TitleSection
            colorTitleSection="yellowColor"
            titleSection="Testimoni"
          />

          <h2
            className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-white"
            style={{ fontFamily: "var(--font-heading)" }}>
            Kata Mereka yang Sudah
            <br />
            <span className="text-[var(--secondary-color)]">
              Menggunakan Jasa Kami
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-base md:text-lg">
            Kepuasan pelanggan adalah prioritas kami. Berikut pengalaman
            pelanggan yang telah menggunakan jasa service AC kami.
          </p>
        </div>

        {/* Card Testimoni */}
        <div className="flex flex-col gap-6">
          {testi.map((item, index) => (
            <div
              key={index}
              className="relative rounded-3xl bg-white p-8 shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--secondary-color)] shadow-lg">
                <Quote size={24} className="text-white" />
              </div>

              <div className="pt-6">
                <p className="italic text-slate-700 leading-8">{item.chat}</p>

                <div className="mt-6 border-t pt-4">
                  <span className="font-semibold text-[var(--primary-color)]">
                    {item.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
