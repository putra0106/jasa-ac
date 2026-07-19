import { WashingMachine, Wrench } from "lucide-react";
import TitleSection from "../components/titleSection";
import GaransiCard from "../components/GaransiCard";

export default function Garansi() {
  const garansiContent = [
    {
      icon: (
        <WashingMachine className="h-6 w-6 text-[var(--secondary-color)]" />
      ),
      title: "Garansi Cuci AC: 14 Hari",
      description:
        "          (Kalau dalam 2 minggu AC bocor air lagi, kami datang benerin gratis)",
    },
    {
      icon: <Wrench className="h-6 w-6 text-[var(--secondary-color)]" />,
      title: "Garansi Perbaikan & Sparepart: 30 Hari",
      description: "          (Sesuai bagian sparepart yang diganti)",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans flex items-center flex flex-col">
      <div className="relative text-center max-w-2xl mx-auto mb-10">
        {/* Gradient Hitam */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-40 bg-gradient-to-b from-black/10 to-transparent blur-3xl"></div>
        <TitleSection titleSection={"Garansi"} colorTitleSection="greyColor" />
        <h1
          className="relative text-3xl md:text-4xl font-extrabold text-[var(--primary-color)] my-4 tracking-tight "
          style={{ fontFamily: "var(--font-heading)" }}>
          Ada Jaminan Garansi Uang Kembali <br />
          <span
            className="text-[var(--secondary-color)]"
            style={{ fontFamily: "var(--font-heading)" }}>
            / Servis Ulang
          </span>
        </h1>
        <p className="text-slate-600 text-base md:text-lg">
          Selesai diperbaiki tapi ternyata AC-nya masih bermasalah? <br />
          Tenang, kami tanggung jawab penuh kok:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 xl:gap-8 items-stretch">
        {garansiContent.map((garansi, index) => (
          <GaransiCard
            index={index}
            icon={garansi.icon}
            title={garansi.title}
            description={garansi.description}
          />
        ))}
      </div>
      <div className="relative text-center max-w-2xl mx-auto my-10 ">
        <p className="text-slate-600 text-base md:text-lg ">
          Caranya gampang:
          <br />{" "}
          <span className="font-bold">
            Tinggal chat admin lagi dan tunjukin nota digital yang dikirim ke WA
            kamu.
          </span>
        </p>
      </div>
    </div>
  );
}
