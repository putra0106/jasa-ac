import { ButtonPrimary } from "../components/Button";
import PricingCard from "../components/PricingCard";
import TitleSection from "../components/titleSection";
import { services } from "../data/content";

export default function ServiceAndPricing() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans flex items-center flex flex-col">
      <div className="relative text-center max-w-2xl mx-auto mb-10">
        {/* Gradient Hitam */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-40 bg-gradient-to-b from-black/10 to-transparent blur-3xl"></div>
        <TitleSection
          titleSection={"Service And Pricing"}
          colorTitleSection="greyColor"
        />
        <h1
          className="relative text-3xl md:text-4xl font-extrabold text-[var(--primary-color)] my-4 tracking-tight "
          style={{ fontFamily: "var(--font-heading)" }}>
          Harganya Jelas, <br className="sm:hidden" />
          <span
            className="text-[var(--secondary-color)]"
            style={{ fontFamily: "var(--font-heading)" }}>
            Gak Pake Ditembak
          </span>
        </h1>
        <p className="text-slate-600 text-base md:text-lg">
          Nanti teknisi kami cek dulu AC kamu dan kasih tahu total biayanya.
          Kalau setuju, baru dikerjain.
          <span className="font-bold"> Tanpa Biaya Tersembunyi!</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch">
        {services.map((service, index) => (
          <PricingCard
            key={index}
            title={service.title}
            price={service.price}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
