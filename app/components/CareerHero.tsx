"use client";

import Image from "next/image";

export default function CareerHero() {
  return (
    <section className="relative w-full h-[500px] md:h-[750px] overflow-hidden">
      {/* Background Image - Gambar pelabuhan kontainer dari udara sesuai referensi */}
      <Image
        src="/career-hero.png" // Pastikan gambar diletakkan di public/images/
        alt="Balancia Career Opportunity"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Top White Graduate Overlay - Memberikan efek fade putih di bagian atas agar menyatu dengan Navbar */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-transparent h-72 z-10" />

      {/* Konten Judul Utama */}
      <div className="relative z-20 flex h-full flex-col items-center justify-start pt-32 md:pt-48 px-4 text-center">
        <h1 className="text-4xl md:text-7xl font-black tracking-tight text-[#1A3B7A] uppercase leading-tight">
          START YOUR DREAM JOB NOW
        </h1>
        
        {/* Garis aksen oranye khas Balancia (opsional) */}
        <div className="mt-8 h-2 w-32 bg-[#E86B39] rounded-full shadow-md" />
      </div>

      {/* Bottom Navy Section - Area biru navy di bagian bawah gambar sesuai layout referensi */}
      <div className="absolute bottom-0 w-full h-16 md:h-24 bg-[#0B1D3F] z-20" />
    </section>
  );
}