// image asset
import heroImage from "@/assets/heroImage.webp";

import { ArrowUpRight, MessageCircleMore } from "lucide-react";
import { ButtonPrimary } from "../components/Button";

export default function Hero() {
  return (
    <main className="max-w-7xl mx-auto">
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden  shadow-2xl">
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b opacity-60 via-transparent bg-black"></div>

        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-6 text-3xl font-semibold leading-tight text-white drop-shadow-md md:text-4xl lg:text-5xl">
            AC Rumah Mulai Panas atau Bocor?
            <br />
            Yuk, Bikin Adem Lagi Hari Ini!.
          </h1>

          <p className="mb-8 max-w-2xl text-base font-light text-white/90 drop-shadow md:text-lg">
            Gak usah tahan gerah lama-lama di rumah. Teknisi kami siap datang ke
            tempatmu, cek masalahnya sampai ketemu, dan langsung dibenerin.
            Kerjaannya rapi, jujur, dan ada garansinya!
          </p>

          <ButtonPrimary
            icon={<MessageCircleMore />}
            content={"Tanya Jadwal Teknisi via WhatsApp"}
          />
        </div>
      </section>
    </main>
  );
}
