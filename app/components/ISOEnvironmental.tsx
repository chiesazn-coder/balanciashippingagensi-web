"use client";

import React from 'react';
import Image from 'next/image';

export default function ISOEnvironmental() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 font-sans border-t border-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* SISI KIRI: Logo Sertifikat & Nomor Lisensi (ISO 14001) */}
        <div className="w-full md:w-1/3 flex flex-col items-start space-y-4">
          <div className="relative w-full aspect-square max-w-[320px]">
            <Image
              src="/iso-14001-tuv-nord.png" // Pastikan gambar logo ISO 14001 ada di public/images/
              alt="TUV NORD ISO 14001:2015 Certification"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-[#1A3B7A] font-bold text-sm md:text-base ml-4">
            <p>Certified Company</p>
            <p>No. 08 04 E 23000337</p>
          </div>
        </div>

        {/* SISI KANAN: Penjelasan Standar ISO 14001 */}
        <div className="w-full md:w-2/3 text-[#1A3B7A]">
          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            <p className="font-medium">
              ISO 14001:2015 specifies the requirements for an environmental management system 
              that an organization can use to enhance its environmental performance.
            </p>

            <p>
              ISO 14001:2015 is intended for use by an organization seeking to manage its 
              environmental responsibilities in a systematic manner that contributes to the 
              environmental pillar of sustainability.
            </p>
          </div>
        </div>

      </div>

      {/* Garis Aksen Oranye di bawah sesuai gambar referensi */}
      <div className="max-w-4xl mx-auto mt-20">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E86B39]/50 to-transparent" />
      </div>
    </section>
  );
}