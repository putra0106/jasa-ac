import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <main className="max-w-7xl mx-auto">
      <section
        className="relative flex min-h-[600px] h-[80vh] w-full flex-col items-center overflow-hidden rounded-3xl pt-24 pb-8 shadow-2xl"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1622279457486-69d735108dbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-black/30"></div>

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
          <h1 className="mb-6 text-4xl font-semibold leading-tight text-white drop-shadow-md md:text-5xl lg:text-6xl">
            Unleash Your Inner Champion Today.
            <br />
            All In One Place.
          </h1>

          <p className="mb-8 max-w-2xl text-base font-light text-white/90 drop-shadow md:text-lg">
            Join the ultimate tennis experience — where passion meets
            performance,
            <br className="hidden sm:block" />
            and every swing brings you closer to victory.
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-[#0f172a]/90 px-8 py-3.5 text-sm font-medium text-white shadow-lg backdrop-blur transition-all hover:scale-105 hover:border-white/30 hover:bg-black">
            Start your own journey
          </a>
        </div>

        <div className="relative z-10 mt-auto flex w-full flex-col items-end justify-between px-6 md:flex-row md:px-10">
          <div className="mb-4 flex items-center gap-3 md:mb-0">
            <p className="max-w-[150px] text-xs font-medium leading-tight text-white/80 md:text-sm">
              Train with real professionals
              <br />
              get the real results.
            </p>

            <div className="glass-pill avatar-group flex items-center rounded-full p-1 shadow-lg">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://i.pravatar.cc/150?img=11"
                alt="Professional 1"
              />
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://i.pravatar.cc/150?img=12"
                alt="Professional 2"
              />
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://i.pravatar.cc/150?img=33"
                alt="Professional 3"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {["Instagram", "Facebook", "TikTok"].map((social) => (
              <a
                key={social}
                href="#"
                className="group flex items-center text-xs font-medium text-white/80 transition-colors hover:text-white md:text-sm">
                {social}
                <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
