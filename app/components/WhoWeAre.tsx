import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="w-full">
      {/* Header Section: Biru Tua */}
      <div className="bg-[#0B1D3F] py-12 md:py-16 text-center">
        <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-wider">
          Who We Are
        </h2>
      </div>

      {/* Content Section: Grid 2 Kolom */}
      <div className="flex flex-col md:flex-row min-h-[600px]">
        
        {/* KOLOM KIRI: Teks Deskripsi */}
        <div className="w-full md:w-1/2 bg-[#F1F9FF] flex items-center justify-center p-8 md:p-20">
          <div className="max-w-xl flex flex-col gap-8 text-[#1A3B7A]">
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              BALANCIA is an extended arm for Shipowners, Ship Operator, or Charterers across all Indonesian ports.
            </p>
            
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              With a legacy built upon years of hands-on experience and maritime knowledge, 
              We pledge not only to offer service quality but also to infuse every operation 
              with our hallmark traits -- unmatched capabilities, deep-rooted expertise, 
              and an immutable commitment to earning and maintaining our customers&apos; trust and satisfaction.
            </p>

            <p className="text-lg md:text-xl font-medium leading-relaxed">
              Entrust your port operations to BALANCIA, where excellence meets reliability at every juncture. 
              Our seasoned team, equipped with both localized insights and global best practices, 
              endeavours to make every port call a symphony of efficiency and precision.
            </p>
          </div>
        </div>

        {/* KOLOM KANAN: Gambar Aktivitas */}
        <div className="relative w-full md:w-1/2 h-[700px] md:auto">
          <Image
            src="/who-we-are.png" // Ganti dengan path gambar kru di atas kapal
            alt="Balancia Crew Activity"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}