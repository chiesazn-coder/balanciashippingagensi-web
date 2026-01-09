import React from 'react';

const WhatIsUnderwater = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[600px] overflow-hidden">
      
      {/* SISI KIRI: Konten Teks dengan Background Navy Blue */}
      <div className="w-full lg:w-1/2 bg-[#0B1D3F] flex items-center justify-center p-8 md:p-16 lg:p-24">
        <div className="max-w-xl text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-10 leading-tight">
            WHAT IS <br />
            <span className="text-[#E86B39]">UNDERWATER <br /> HULL CLEANING</span>?
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed opacity-90 text-justify font-medium">
            Underwater cleaning is a critical maintenance procedure for ships that involves 
            removing marine growth, such as barnacles, algae, and other organisms, from 
            the ship&apos;s hull. Over time, these organisms can accumulate on the hull, 
            causing drag and reducing the ship&apos;s speed and fuel efficiency. Hull 
            cleaning is essential to maintain optimal hydrodynamic performance, reduce 
            fuel consumption, and enhance overall vessel efficiency.
          </p>
        </div>
      </div>

      {/* SISI KANAN: Gambar Aktivitas Penyelaman */}
      <div className="w-full lg:w-1/2 relative min-h-[400px]">
        <img 
          src="/underwater-cleaning-hero.png" // Pastikan gambar ini ada di public/images/
          alt="Diver performing hull cleaning"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay halus untuk kedalaman visual */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

    </section>
  );
};

export default WhatIsUnderwater;