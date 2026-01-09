import React from 'react';

const UnderwaterProcess = () => {
  // Data proses disesuaikan dengan teks pada gambar referensi terbaru
  const processes = [
    "SCHEDULED CLEANING",
    "PROFESSIONAL TEAM",
    "MONITORING",
    "BIOFOULING",
    "ECO-FRIENDLY",
    "DATA-DRIVEN"
  ];

  return (
    <section className="w-full bg-[#F0F9FF] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Judul Utama dengan aksen warna Oranye */}
        <h2 className="text-[#1A3B7A] text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
          WE ALWAYS FOCUS ON <span className="text-[#E86B39]">EFFECTIVENESS</span> <br className="hidden md:block" />
          AND <span className="text-[#E86B39]">EFFICACY</span>
        </h2>

        {/* Deskripsi Sub-header */}
        <p className="text-[#1A3B7A] text-lg md:text-xl font-bold max-w-4xl mx-auto leading-relaxed mb-16 opacity-90">
          We&apos;re very adaptive to changes and suggestions. Contact us if you need tailored service. 
          By default, these are our Service Processes.
        </p>

        {/* Grid Kartu Proses (2 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {processes.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#1A3B7A] rounded-sm py-10 px-6 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] flex items-center justify-center transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.4)] cursor-default"
            >
              <span className="text-white text-xl md:text-2xl font-black tracking-widest text-center">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UnderwaterProcess;