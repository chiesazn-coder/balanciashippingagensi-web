import React from 'react';

const WhatIsCashToMaster = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[600px] overflow-hidden">
      
      {/* SISI KIRI: Konten Teks dengan Background Navy Blue */}
      <div className="w-full lg:w-1/2 bg-[#0B1D3F] flex items-center justify-center p-8 md:p-16 lg:p-24">
        <div className="max-w-xl text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-10 leading-tight">
            WHAT IS <span className="text-[#E86B39]">CASH <br /> TO MASTER</span>?
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed opacity-90 text-justify font-medium">
            Cash to Master (CTM) is a crucial financial service provided to ships while they are in 
            port. It involves delivering funds directly to the ship&apos;s master or captain to cover 
            various petty cash expenses during the vessel&apos;s stay in the port. The amount of 
            cash transferred depends on the ship&apos;s needs and the duration of the port stay. 
            CTM services are typically availed to facilitate payments for provisions, minor 
            repairs, crew welfare, port fees, and other miscellaneous expenses.
          </p>
        </div>
      </div>

      {/* SISI KANAN: Gambar Penunjang (Foto bersama di dalam kabin kapal) */}
      <div className="w-full lg:w-1/2 relative min-h-[400px]">
        <img 
          src="/ctm-meeting.png" // Ganti dengan path gambar Anda sesuai referensi
          alt="Balancia CTM Service - Meeting with Captain"
          className="w-full h-full object-cover"
        />
        {/* Overlay halus untuk konsistensi visual */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

    </section>
  );
};

export default WhatIsCashToMaster;