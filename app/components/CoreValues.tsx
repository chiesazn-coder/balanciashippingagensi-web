import Image from "next/image";

const values = ["FLEXIBLE", "ACTIONS", "SOLUTIONS", "TRUSTED"];

export default function CoreValues() {
  return (
    <section className="w-full bg-[#0B1D3F]">
      {/* Container utama dengan tinggi tetap yang lebih pendek (misal: 600px) */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] overflow-hidden">
        
        {/* SISI KIRI: Gambar (50% lebar) */}
        <div className="relative w-full lg:w-1/2 h-[300px] lg:h-full">
          <Image
            src="/port-view.png"
            alt="Maritime Operations"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* SISI KANAN: Content (50% lebar) */}
        <div className="w-full lg:w-1/2 flex flex-col bg-[#F4F9FF]">
          
          {/* Judul: Padding dikurangi agar tidak terlalu memakan ruang */}
          <div className="flex items-center justify-center py-8 lg:py-12">
            <h2 className="text-[#1A3B7A] text-lg md:text-xl font-bold tracking-[0.2em] uppercase">
              Our Core Values Are
            </h2>
          </div>

          {/* List Values: Menggunakan flex-1 agar membagi rata sisa ruang */}
          <div className="flex flex-col flex-1 w-full">
            {values.map((val, index) => (
              <div key={index} className="flex flex-col flex-1 group">
                {/* Kotak Biru: Menggunakan flex-1 agar tingginya otomatis rata */}
                <div className="flex-1 bg-[#1A3B7A] flex justify-center items-center transition-colors duration-300 hover:bg-[#122a5a]">
                  <h3 className="text-white text-3xl md:text-5xl lg:text-5xl font-black tracking-[0.4em] uppercase leading-none">
                    {val}
                  </h3>
                </div>
                
                {/* Spacer Putih: Diperkecil menjadi h-2 atau h-3 */}
                <div className="h-3 bg-[#F4F9FF] w-full" />
              </div>
            ))}
          </div>

          {/* Sisa area bawah sedikit saja */}
          <div className="h-8 bg-[#F4F9FF] w-full" />
        </div>

      </div>
    </section>
  );
}