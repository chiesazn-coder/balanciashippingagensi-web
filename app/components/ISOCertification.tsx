"use client";

import React from 'react';
import Image from 'next/image';

export default function ISOCertification() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* SISI KIRI: Logo Sertifikat & Nomor Lisensi */}
        <div className="w-full md:w-1/3 flex flex-col items-start space-y-4">
          <div className="relative w-full aspect-square max-w-[320px]">
            <Image
              src="/iso-9001-tuv-nord-3.png" // Pastikan gambar ada di public/images/
              alt="TUV NORD ISO 9001:2015 Certification"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-[#1A3B7A] font-bold text-sm md:text-base ml-4">
            <p>Certified Company</p>
            <p>No. 16 00 E 23000338</p>
          </div>
        </div>

        {/* SISI KANAN: Penjelasan Standar ISO */}
        <div className="w-full md:w-2/3 text-[#1A3B7A]">
          <h2 className="text-xl md:text-2xl font-bold leading-relaxed mb-8">
            ISO 9001:2015 specifies requirements for a quality management system when an organization:
          </h2>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            {/* Poin A */}
            <div className="flex gap-4">
              <span className="font-bold shrink-0">a)</span>
              <p>
                needs to demonstrate its ability to consistently provide products and services that meet customer and applicable statutory and regulatory requirements, and
              </p>
            </div>

            {/* Poin B */}
            <div className="flex gap-4">
              <span className="font-bold shrink-0">b)</span>
              <p>
                aims to enhance customer satisfaction through the effective application of the system, including processes for improvement of the system and the assurance of conformity to customer and applicable
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Garis Aksen Oranye di bawah (Bottom Accent Line) sesuai gambar */}
      <div className="max-w-4xl mx-auto mt-20">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E86B39]/50 to-transparent" />
      </div>
    </section>
  );
}