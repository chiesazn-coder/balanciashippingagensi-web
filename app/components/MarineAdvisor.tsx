import Image from "next/image";

export default function MarineAdvisor() {
  return (
    <section className="relative w-full bg-[#F1F9FF] pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 px-6">
        
        {/* SISI KIRI: Foto Marine Advisor dengan Efek Fade */}
        <div className="w-full md:w-1/2 relative flex flex-col items-center">
          <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-md">
            {/* Foto Utama */}
            <Image
              src="/capt-budi.png" // Ganti dengan path foto Capt. Budi Pramono
              alt="Capt. Budi Pramono - Marine Advisor of Balancia"
              fill
              className="object-contain z-10"
              priority
            />
            
            {/* Efek Gradient Fade bawah agar menyatu dengan BG */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#F1F9FF] via-transparent to-transparent opacity-100" />
          </div>

          {/* Nama & Jabatan */}
          <div className="mt-4 text-center z-30">
            <h3 className="text-[#1A3B7A] text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight">
              Capt. Budi Pramono
            </h3>
            <p className="text-[#1A3B7A] text-xl font-bold uppercase mt-1">
              (Marine Advisor)
            </p>
          </div>
        </div>

        {/* SISI KANAN: Deskripsi Profil */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 text-[#1A3B7A] z-10">
          <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed">
            <p>
              He started his career on board the vessel, commencing a seagoing career 
              and progressing from Junior Deck Officer to Master Marine. Capt. Budi 
              has sailing experience onboard cape and handy-size bulk carriers, 
              general cargo, tanker, and container vessels. Capt. Budi Pramono has 
              over 30 years of experience in Marine Industries, Port agencies, and 
              Offshore support.
            </p>
            
            <p>
              He provides expert opinions, analysis, and recommendations to 
              organizations, helps improve processes and performance, assists with 
              HR strategy, operations support, and more. Capt. Budi Pramono has 
              always played an important role in Balancia Shipping, advising and 
              offering expertise in the planning and design of various rules in our Business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}