import React from 'react';

const ServiceProcesses = () => {
  const processes = [
    "DOCUMENTS",
    "COORDINATION",
    "ESTIMATION",
    "TICKETING",
    "ACCOMMODATION",
    "DELIVER"
  ];

  return (
    <section className="w-full bg-[#F0F9FF] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Judul Utama */}
        <h2 className="text-[#1A3B7A] text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
          WE ALWAYS FOCUS ON <span className="text-[#E86B39]">EFFECTIVENESS</span> <br className="hidden md:block" />
          AND <span className="text-[#E86B39]">EFFICACY</span>
        </h2>

        {/* Sub-deskripsi */}
        <p className="text-[#1A3B7A] text-lg md:text-xl font-bold max-w-4xl mx-auto leading-relaxed mb-16">
          We&apos;re very adaptive to changes and suggestions. Contact us if you need tailored service. 
          By default, these are our Service Processes.
        </p>

        {/* Grid Proses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {processes.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#1A3B7A] rounded-md py-8 px-4 shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex items-center justify-center transition-transform hover:scale-[1.02] cursor-default"
            >
              <span className="text-white text-2xl md:text-3xl font-black tracking-widest">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceProcesses;