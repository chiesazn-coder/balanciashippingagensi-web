import React from 'react';

const WhatIsCrewChange = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[600px]">
      {/* SISI KIRI: Konten Teks */}
      <div className="w-full lg:w-1/2 bg-[#0B1D3F] flex items-center justify-center p-8 md:p-16 lg:p-24">
        <div className="max-w-xl text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-10 leading-tight">
            WHAT IS <span className="text-[#E86B39]">CREW <br /> CHANGE</span>?
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-8 text-justify">
            Crew Change is an essential procedure in the maritime industry, allowing seafarers 
            to transition on and off ships based on predetermined schedules set by shipping 
            companies. It primarily happens when a seafarer&apos;s contract comes to an end. 
            Within this process, there are two key terms to understand:
          </p>

          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-white mt-3 shrink-0" />
              <p className="text-lg md:text-xl leading-relaxed">
                <span className="font-bold">On Signer:</span> This refers to the crew members 
                joining a ship to begin their contracted duties.
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-white mt-3 shrink-0" />
              <p className="text-lg md:text-xl leading-relaxed">
                <span className="font-bold">Off Signer:</span> This pertains to the crew members 
                completing their contract and disembarking from the ship, making way for the 
                next batch of seafarers.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* SISI KANAN: Gambar Penunjang */}
      <div className="w-full lg:w-1/2 relative min-h-[400px]">
        <img 
          src="/crew-passports.png" 
          alt="Crew handling passports"
          className="w-full h-full object-cover"
        />
        {/* Overlay halus agar transisi tidak terlalu tajam di mobile */}
        <div className="absolute inset-0 bg-black/5" />
      </div>
    </section>
  );
};

export default WhatIsCrewChange;