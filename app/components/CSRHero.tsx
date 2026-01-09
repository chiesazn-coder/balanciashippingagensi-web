import Image from "next/image";

export default function CSRHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative h-[500px] md:h-[650px] w-full">
        {/* Background Image: Foto pelepasan penyu dalam batok kelapa */}
        <Image
          src="/csr-hero-2.png" // Pastikan gambar ini ada di folder public
          alt="Corporate Social Responsibility Balancia"
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* Overlay Fade Putih di bagian atas agar menyatu dengan Navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/10 to-transparent h-48" />

        {/* Konten Teks Hero */}
        <div className="relative z-10 flex h-full flex-col items-center justify-start pt-24 px-4 text-center">
          <h1 className="max-w-6xl text-4xl md:text-7xl font-black tracking-tight text-[#1A3B7A] uppercase leading-none drop-shadow-sm">
            Corporate Social <br className="hidden md:block" /> Responsibility
          </h1>
          
          <div className="mt-8 flex flex-col items-center">
            <div className="h-1.5 w-24 bg-[#E86B39] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}