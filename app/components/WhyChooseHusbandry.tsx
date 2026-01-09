import React from 'react';

const WhyChooseHusbandry = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[600px]">
      {/* SISI KIRI: Konten Teks */}
      <div className="w-full lg:w-1/2 bg-[#0B1D3F] flex items-center justify-center p-8 md:p-16 lg:p-24">
        <div className="max-w-xl text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-10 leading-tight">
            WHY BALANCIA’S <br />
            SERVICE IS YOUR <br />
            <span className="text-white">BEST CHOICE</span>
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed opacity-90 text-justify font-medium">
            When it comes to maritime support, Balancia Ship Agency stands unparalleled 
            in offering premium Husbandry services. Our reputation is built on years of 
            dedicated service, underpinned by an intricate understanding of port logistics 
            and seafarer needs.
          </p>
        </div>
      </div>

      {/* SISI KANAN: Gambar Aktivitas di Kapal */}
      <div className="w-full lg:w-1/2 relative min-h-[400px]">
        <img 
          src="/husbandry-delivery.png" // Ganti dengan path gambar petugas dan dus air mineral Anda
          alt="Balancia Husbandry Service on board"
          className="w-full h-full object-cover"
        />
        {/* Overlay halus untuk konsistensi visual */}
        <div className="absolute inset-0 bg-black/5" />
      </div>
    </section>
  );
};

export default WhyChooseHusbandry;