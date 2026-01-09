"use client";

import React from 'react';
import Image from 'next/image';

export default function ISOHealthSafety() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 font-sans border-t border-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* SISI KIRI: Logo Sertifikat & Nomor Lisensi (ISO 45001) */}
        <div className="w-full md:w-1/3 flex flex-col items-start space-y-4">
          <div className="relative w-full aspect-square max-w-[320px]">
            <Image
              src="/iso-45001-tuv-nord.png" // Pastikan gambar logo ISO 45001 tersedia di folder public/images/
              alt="TUV NORD ISO 45001:2018 Certification"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-[#1A3B7A] font-bold text-sm md:text-base ml-4">
            <p>Certified Company</p>
            <p>No. 44 126 23000336</p>
          </div>
        </div>

        {/* SISI KANAN: Penjelasan Standar ISO 45001 */}
        <div className="w-full md:w-2/3 text-[#1A3B7A]">
          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            <p className="font-medium">
              ISO 45001:2018 specifies requirements for an occupational health and safety (OH&S) 
              management system, and gives guidance for its use, to enable organizations to provide 
              safe and healthy workplaces.
            </p>

            <p>
              It is intended to help organizations prevent work-related injury and ill health, 
              as well as by proactively improving its OH&S performance. This certification 
              demonstrates BALANCIA Ship Agency&apos;s commitment to the safety of our 
              employees and stakeholders.
            </p>
          </div>
        </div>

      </div>

      {/* Garis Aksen Oranye Penutup */}
      <div className="max-w-4xl mx-auto mt-20">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E86B39]/50 to-transparent" />
      </div>
    </section>
  );
}