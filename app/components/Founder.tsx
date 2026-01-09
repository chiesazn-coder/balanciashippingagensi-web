import Image from "next/image";

export default function Founder() {
  return (
    <section className="w-full bg-[#F1F9FF] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* SISI KIRI: Deskripsi Profil */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 text-[#1A3B7A]">
          <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed text-justify">
            <p>
              Balancia Ship Agency is a distinguished marine agency located in Indonesia, 
              established by Mr. Muhammad Candra Rambe as CEO. He has cultivated a 
              prosperous career in the maritime sector for several years. In 2018, he 
              founded Balancia Ship Agency company, joining forces with our 
              esteemed marine advisor, Capt. Budi Pramono.
            </p>
            
            <p>
              Capt. Pramono significantly contributes to our organization with an impressive 
              tenure exceeding 30 years in maritime industries, port agencies, and offshore 
              support. His expert insights, comprehensive analyses, and strategic 
              recommendations have been instrumental in refining our processes 
              and enhancing performance. Together, we strive to position ourselves as the 
              foremost shipping agency in Indonesia.
            </p>
          </div>
        </div>

        {/* SISI KANAN: Foto Founder dengan Efek Fade */}
        <div className="w-full md:w-1/2 relative flex flex-col items-center">
          <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-md">
            {/* Foto Utama */}
            <Image
              src="/founder-photo.png" // Ganti dengan path foto Pak Candra Rambe
              alt="Mr. Muhammad Candra Rambe - Founder of Balancia"
              fill
              className="object-contain z-10"
              priority
            />
            
            {/* Efek Gradient Fade di bagian bawah agar menyatu dengan BG */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#F1F9FF] via-transparent to-transparent opacity-100" />
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#F1F9FF] via-transparent to-transparent opacity-20" />
          </div>

          {/* Nama & Jabatan (Di bawah foto) */}
          <div className="mt-4 text-center z-30">
            <h3 className="text-[#1A3B7A] text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight">
              Mr. Muhammad <br /> Candra Rambe
            </h3>
            <p className="text-[#1A3B7A] text-xl font-bold uppercase mt-1">
              (Founder)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}