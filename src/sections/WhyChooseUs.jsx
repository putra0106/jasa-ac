import { benefit } from "../data/content";
import BenefitCard from "../components/benefitCard";
import benefitImage from "../assets/benefitImage.webp";
import TitleSection from "../components/titleSection";

export default function WhyChooseUs() {
  return (
    <section className="min-h-screen bg-[var(--primary-color,#0f172a)] py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden relative">
      {/* Abstract background decorative elements to create visual depth without cluttering */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-yellow-400/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-white/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Modern Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Area with Decorative Frame and Depth Layers */}
          <div className="w-full lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md lg:max-w-full">
              {/* Dynamic decorative offset frame behind the image */}
              <div className="absolute inset-0 border-2 border-yellow-400 rounded-3xl translate-x-4 translate-y-4 -z-10 hidden sm:block" />
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-3xl blur-md -z-10 opacity-50" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.01] hidden md:flex">
                <img
                  src={benefitImage}
                  alt="Tim teknisi servis AC"
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-square lg:aspect-[4/5]"
                />
                {/* Overlay gradient to subtly blend image bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Benefit Content Area */}
          <div className="w-full lg:col-span-7 flex flex-col gap-6">
            {/* Header Section with dynamic alignment */}
            <div className="space-y-3 text-center lg:text-left mb-4">
              <TitleSection
                titleSection={"Why Choose Us?"}
                colorTitleSection="yellowColor"
              />

              <h2
                className="text-3xl md:text-5xl font-black text-yellow-400 tracking-tight leading-tight mt-3"
                style={{ fontFamily: "var(--font-heading)" }}>
                Kenapa Harus Servis AC <br className="hidden sm:inline" />
                <span
                  className="text-white"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  di Tempat Kami?
                </span>
              </h2>
            </div>

            {/* List of beautifully designed benefit cards with smooth hover cards */}
            <div className="flex flex-col gap-4">
              {benefit.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 md:p-6 shadow-md hover:shadow-xl border border-slate-100 hover:border-yellow-400/30 transition-all duration-300 transform hover:-translate-y-0.5">
                  <BenefitCard
                    index={index}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
