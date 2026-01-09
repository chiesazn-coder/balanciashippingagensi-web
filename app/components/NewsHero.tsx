"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';

export default function NewsHero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Tambahkan logika pencarian Anda di sini
  };

  return (
    <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden">
      {/* Background Image - Gambar Kapal Orkim Triumph dari udara */}
      <Image
        src="/news-hero.png" // Pastikan gambar diletakkan di public/images/
        alt="Balancia News and Updates"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Top White Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-transparent h-64 z-10" />

      {/* Konten Utama */}
      <div className="relative z-20 flex h-full flex-col items-center justify-start pt-28 md:pt-36 px-4">
        
        {/* Judul Halaman */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#1A3B7A] uppercase leading-tight text-center mb-8">
          News and Updates
        </h1>

        {/* Search Bar Container */}
        <form 
          onSubmit={handleSearch}
          className="w-full max-w-4xl flex items-center bg-white rounded-full border-4 border-[#E86B39] overflow-hidden shadow-2xl"
        >
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow px-8 py-3 md:py-4 text-xl text-gray-700 focus:outline-none bg-transparent"
          />
          
          {/* Tombol Search Oranye */}
          <button 
            type="submit"
            className="bg-[#E86B39] p-3 md:p-4 px-8 md:px-12 text-white hover:bg-[#d15d2f] transition-colors flex items-center justify-center"
          >
            <Search className="w-6 h-6 md:w-8 md:h-8 stroke-[3]" />
          </button>
        </form>

      </div>
    </section>
  );
}