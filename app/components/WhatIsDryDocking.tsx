import React from 'react';

const WhatIsDryDocking = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[650px] overflow-hidden">
      
      {/* SISI KIRI: Konten Teks dengan Background Navy Blue */}
      <div className="w-full lg:w-1/2 bg-[#0B1D3F] flex items-center justify-center p-8 md:p-16 lg:p-24">
        <div className="max-w-xl text-white">
          {/* Judul dengan Aksen Warna Oranye */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-10 leading-tight">
            WHAT IS <span className="text-[#E86B39]">DRY <br /> DOCKING</span>?
          </h2>
          
          {/* Deskripsi Teks Rata Kiri-Kanan (Justify) */}
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-justify opacity-90 font-medium">
            <p>
              Dry docking is a vital maintenance procedure for ships that involves taking 
              the vessel out of the water for inspection, repair, and overhaul. During dry docking, 
              the ship is positioned in a dry dock, which is a large basin or dock that can be flooded 
              and drained to allow ships to be floated in and out.
            </p>
            
            <p>
              This process allows ship managers and engineers to access the hull and other 
              underwater parts of the ship, which are normally submerged when the vessel is in the water. 
              Dry docking is typically carried out every few years or as per the regulatory 
              requirements to ensure the ship&apos;s safety, structural integrity, and 
              operational efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* SISI KANAN: Gambar Visual Kapal di Galangan (Night View) */}
      <div className="w-full lg:w-1/2 relative min-h-[450px]">
        <img 
          src="/dry-dock-process.png" // Ganti dengan path gambar kapal GUNES K Anda
          alt="Ship in dry dock facility"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay halus untuk memberikan kedalaman visual */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

    </section>
  );
};

export default WhatIsDryDocking;