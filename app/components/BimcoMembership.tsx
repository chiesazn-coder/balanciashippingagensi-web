"use client";

import React from 'react';
import Image from 'next/image';

export default function BimcoMembership() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 font-sans border-t border-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* SISI KIRI: Logo BIMCO Member */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="relative w-full aspect-[4/3] max-w-[350px]">
            <Image
              src="/bimco-member-logo.png" // Pastikan file gambar ada di public/images/
              alt="BIMCO Member Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* SISI KANAN: Penjelasan Misi & Keanggotaan BIMCO */}
        <div className="w-full md:w-2/3 text-[#1A3B7A]">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="text-justify font-medium">
              BIMCO&apos;s mission is to be at the forefront of global developments in shipping, 
              providing expert knowledge and practical advice to safeguard and add value 
              to our members&apos; businesses.
            </p>

            <p className="text-justify">
              They have almost 120 years&apos; experience supporting shipping businesses. 
              They have summarised their different membership categories and information 
              on BIMCO member benefits. And Balancia Shipping is member of BIMCO.
            </p>
          </div>
        </div>

      </div>

      {/* Garis Aksen Oranye Penutup Section */}
      <div className="max-w-4xl mx-auto mt-20">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E86B39]/50 to-transparent" />
      </div>
    </section>
  );
}