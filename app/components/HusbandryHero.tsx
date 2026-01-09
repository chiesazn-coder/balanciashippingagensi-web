"use client";

import Image from "next/image";

export default function HusbandryHero() {
  return (
    <section className="relative w-full h-[450px] md:h-[600px] overflow-hidden">
      {/* Background Image - Gambar stok logistik/persediaan sesuai referensi */}
      <Image
        src="/husbandry-pic.png" // Pastikan gambar diletakkan di folder public
        alt="Husbandry Service Supplies"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Efek Fade Putih di bagian atas (Top White Gradient) sesuai gambar referensi */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent h-64 z-10" />

      {/* Konten Judul */}
      <div className="relative z-20 flex h-full flex-col items-center justify-start pt-28 md:pt-40 px-4 text-center">
        <h1 className="text-4xl md:text-7xl font-black tracking-tight text-[#1A3B7A] uppercase leading-tight">
          Husbandry Service
        </h1>
        
        {/* Garis Aksen Oranye */}
        <div className="mt-6 h-1.5 w-24 bg-[#E86B39] rounded-full shadow-sm" />
      </div>
    </section>
  );
}