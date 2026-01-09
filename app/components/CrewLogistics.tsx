import React from 'react';

const CrewLogistics = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[600px]">
      
      {/* SISI KIRI: Gambar Aktivitas Crew Change */}
      <div className="w-full lg:w-1/2 relative min-h-[400px]">
        <img 
          src="/crew-transfer.png" // Ganti dengan path gambar transfer crew Anda
          alt="Crew being transferred by basket"
          className="w-full h-full object-cover object-center"
        />
        {/* Logo Overlay di bagian bawah gambar (opsional sesuai gambar referensi) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 opacity-80">
           <img src="/images/balancia-shipping-logo.png" alt="Balancia Shipping" className="w-full h-auto" />
        </div>
      </div>

      {/* SISI KANAN: Konten Deskripsi */}
      <div className="w-full lg:w-1/2 bg-[#0B1D3F] flex items-center justify-center p-8 md:p-16 lg:p-24">
        <div className="max-w-xl text-white space-y-8">
          <p className="text-lg md:text-xl leading-relaxed text-justify opacity-90">
            BALANCIA, responsible for the ship&apos;s crew, must be well-prepared. 
            This preparation includes ensuring all necessary administrative 
            documents (Visa) are in order for the crew&apos;s entry into Indonesia, 
            organizing travel arrangements like air tickets, coordinating lodging 
            if required, and providing assistance during emergencies, such as 
            unexpected illnesses.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-justify opacity-90">
            Therefore, it&apos;s crucial for ship crew providers to collaborate with 
            local shipping agencies in the respective Crew Change locations. 
            This partnership guarantees smooth transitions and efficient processes 
            for all involved parties.
          </p>
        </div>
      </div>

    </section>
  );
};

export default CrewLogistics;