"use client";

import Image from "next/image";

export default function DryDockingHero() {
  return (
    <section className="relative w-full h-[450px] md:h-[600px] overflow-hidden">
      {/* Background Image - Gambar Kapal Maersk di galangan sesuai referensi */}
      <Image
        src="/dry-docking.png" // Pastikan gambar diletakkan di public/images/
        alt="Dry Docking Service"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Top White Gradient Overlay - Efek fade putih di bagian atas */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/30 to-transparent h-64 z-10" />

      {/* Konten Judul */}
      <div className="relative z-20 flex h-full flex-col items-center justify-start pt-28 md:pt-40 px-4 text-center">
        <h1 className="text-4xl md:text-7xl font-black tracking-tight text-[#1A3B7A] uppercase leading-tight">
          Dry Docking
        </h1>
        
        {/* Garis Aksen Oranye khas Balancia */}
        <div className="mt-6 h-1.5 w-24 bg-[#E86B39] rounded-full shadow-sm" />
      </div>
    </section>
  );
}