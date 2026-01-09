"use client";

import React from 'react';
import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden">
      {/* Background Image Maps - Gambar statis peta sesuai referensi */}
      <Image
        src="/contact-map-bg.png" // Pastikan gambar peta diletakkan di public/images/
        alt="Balancia Office Location Map"
        fill
        className="object-cover object-center opacity-80"
        priority
      />

      {/* Top White Gradient Overlay - Efek fade putih di bagian atas */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent h-64 z-10" />

      {/* Konten Judul Utama */}
      <div className="relative z-20 flex h-full flex-col items-center justify-start pt-32 md:pt-44 px-4 text-center">
        <h1 className="text-4xl md:text-7xl font-black tracking-tight text-[#1A3B7A] uppercase leading-tight">
          LET’S GET IN TOUCH
        </h1>
        
        {/* Garis aksen oranye khas Balancia */}
        <div className="mt-6 h-1.5 w-24 bg-[#E86B39] rounded-full shadow-sm" />
      </div>

      {/* Bottom Navy Section - Area biru navy di bagian bawah gambar sesuai referensi */}
      <div className="absolute bottom-0 w-full h-16 md:h-24 bg-[#0B1D3F] z-20" />
    </section>
  );
}