import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Container utama dengan tinggi yang disesuaikan */}
      <div className="relative h-[500px] md:h-[700px] w-full">
        {/* Background Image: Foto tim dengan kontainer di belakangnya */}
        <Image
          src="/about-team.png" // Ganti dengan foto tim yang kamu unggah
          alt="About Balancia Ship Agency Team"
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* Overlay Putih Halus di bagian atas untuk menyatu dengan Navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-transparent h-40" />

        {/* Konten Teks (Center Aligned) */}
        <div className="relative z-10 flex h-full flex-col items-center justify-start pt-20 px-4 text-center">
          <h1 className="max-w-5xl text-4xl md:text-7xl font-black tracking-tight text-[#1A3B7A] uppercase leading-none">
            About Balancia <br /> Ship Agency
          </h1>
          
          <div className="mt-8 flex flex-col items-center">
            {/* Tagline Visi */}
            <p className="text-lg md:text-2xl font-bold text-[#1A3B7A] tracking-[0.2em] uppercase">
              Harmony. Enable. Kaizen.
            </p>
            {/* Garis dekoratif bawah tagline (opsional agar lebih manis) */}
            <div className="mt-2 h-1 w-20 bg-[#E86B39]" />
          </div>
        </div>
      </div>
    </section>
  );
}