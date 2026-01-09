import Image from "next/image";
import Link from "next/link"; // Import Link dari next/link

const services = [
  { label: "PORT AGENCY SERVICES", href: "/services/port-agency" },
  { label: "CREW CHANGE", href: "/services/crew-change" },
  { label: "HUSBANDRY SERVICE", href: "/services/husbandry" },
  { label: "CASH TO MASTER", href: "/services/cash-to-master" },
  { label: "UNDERWATER CLEANING", href: "/services/underwater-cleaning" },
  { label: "DRY DOCKING", href: "/services/dry-docking" },
];

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Container Gambar Utama */}
      <div className="relative h-[500px] md:h-[650px] w-full overflow-hidden">
        <Image
          src="/hero-ship.png"
          alt="Indonesia Premier Crew Change Specialist"
          fill
          className="object-cover object-center"
          priority
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent" />

        <div className="relative z-10 flex h-full flex-col items-center justify-start pt-20 px-4 text-center">
          <h1 className="max-w-4xl text-3xl md:text-6xl font-black tracking-tight text-[#1A2E50] uppercase">
            Indonesia&apos;s Premier Crew <br /> Change Specialist
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg font-medium text-[#1A2E50]/80">
            Experience flexibility like the sea&apos;s ebb and flow, all at a price that charts fair waters.
          </p>
        </div>
      </div>

      {/* 6 Tombol Service (Grid Layout) */}
      <div className="relative z-20 -mt-24 md:-mt-32 pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              /* Gunakan komponen Link untuk navigasi internal Next.js */
              <Link
                key={index}
                href={service.href}
                className="flex items-center justify-center bg-[#1A3B7A] px-6 py-8 text-center text-white shadow-xl transition-all duration-300 hover:bg-[#152e5f] hover:-translate-y-1"
              >
                <span className="text-sm md:text-base font-bold tracking-wider leading-tight">
                  {service.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-[-100px] top-[40%] w-full bg-[#0B1D3F] -z-10" />
    </section>
  );
}