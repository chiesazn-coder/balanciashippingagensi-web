import React from 'react';

const HusbandryPartnership = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[600px]">
      
      {/* SISI KIRI: Gambar Aktivitas Pengiriman Logistik (Crane/Net Transfer) */}
      <div className="w-full lg:w-1/2 relative min-h-[400px]">
        <img 
          src="/husbandry-operation.png" // Ganti dengan path gambar aktivitas jaring logistik Anda
          alt="Balancia Husbandry Operations"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay halus untuk kedalaman visual */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* SISI KANAN: Konten Deskripsi */}
      <div className="w-full lg:w-1/2 bg-[#0B1D3F] flex items-center justify-center p-8 md:p-16 lg:p-24">
        <div className="max-w-xl text-white space-y-8">
          <p className="text-lg md:text-xl leading-relaxed text-justify opacity-90">
            With us, it&apos;s not just about fulfilling tasks; it&apos;s about forging meaningful 
            partnerships. Our seasoned team ensures every requirement, from crew 
            welfare to the swift delivery of provisions, is managed with utmost precision.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-justify opacity-90">
            Add to that our vast local network and a commitment to timely, cost-effective 
            solutions, and the choice becomes clear. By entrusting Balancia with your 
            inquiries, you&apos;re not just choosing a service but opting for unmatched 
            maritime excellence.
          </p>
        </div>
      </div>

    </section>
  );
};

export default HusbandryPartnership;