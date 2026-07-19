import { Phone } from "lucide-react";
import { ButtonPrimary } from "./Button";

export default function PricingCard({ title, price, description }) {
  return (
    <div
      className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2
 transition-all duration-300 flex flex-col items-center text-center h-full">
      <div className="flex flex-col gap-2 flex-grow mb-6 w-full">
        <h3 className="text-lg md:text-xl font-bold text-slate-700 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-slate-500 uppercase tracking-wide">
          Mulai dari
        </p>

        <div className="text-4xl font-black text-[var(--primary-color)] ">
          {price}
        </div>
        <p className="text-slate-500 text-sm leading-relaxed px-2">
          {description}
        </p>
      </div>
      <div className="w-full ">
        <ButtonPrimary
          icon={<Phone size={16} />}
          content="Pesan via Whatsapp"
          className="bg-[var(--secondary-color)] text-[var(--primary-color)]"
        />
      </div>
    </div>
  );
}
