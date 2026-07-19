import { MessageCircleMore } from "lucide-react";
import { ButtonPrimary } from "../components/Button";

export default function FinalCTA() {
  return (
    <section className="bg-[var(--primary-color)] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}>
          Mau AC Kamu
          <br />
          <span className="text-[var(--secondary-color)]">
            Dingin Normal Lagi?
          </span>
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-slate-300">
          Langsung aja klik tombol di bawah ini buat tanya-tanya dulu atau
          langsung pesan teknisi.{" "}
          <span className="font-semibold text-white">
            Konsultasi gratis tanpa biaya!
          </span>
        </p>

        <div className="mt-10 flex justify-center">
          <ButtonPrimary
            icon={<MessageCircleMore />}
            content="Hubungi Admin via WhatsApp Sekarang"
            className="bg-[var(--secondary-color)] hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-300">
          <span>✓ Respon Cepat</span>
          <span>✓ Harga Transparan</span>
          <span>✓ Teknisi Berpengalaman</span>
        </div>
      </div>
    </section>
  );
}
