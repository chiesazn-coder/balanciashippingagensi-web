"use client";

import Image from "next/image";

export default function SustainabilityHero() {
  return (
    <section className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
      {/* Background Image - Gambar tim Balancia di ruang pertemuan sesuai referensi */}
      <Image
        src="/sustainability-hero.png" // Pastikan gambar diletakkan di folder public/images/
        alt="Balancia Sustainability Team"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Top White Gradient Overlay - Memberikan efek fade putih di bagian atas agar menyatu dengan Navbar */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-transparent h-72 z-10" />

      {/* Konten Judul */}
      <div className="relative z-20 flex h-full flex-col items-center justify-start pt-32 md:pt-44 px-4 text-center">
        <h1 className="text-4xl md:text-7xl font-black tracking-tight text-[#1A3B7A] uppercase leading-tight">
          Sustainability
        </h1>
        
        {/* Garis Aksen Oranye tipis di bawah judul (opsional, untuk konsistensi brand) */}
        <div className="mt-6 h-1.5 w-24 bg-[#E86B39] rounded-full shadow-sm" />
      </div>
      
      {/* Bottom Navy Divider - Area biru navy di bagian bawah gambar sesuai referensi */}
      <div className="absolute bottom-0 w-full h-12 md:h-20 bg-[#0B1D3F] z-20" />
    </section>
  );
}