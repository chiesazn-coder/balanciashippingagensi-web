import Image from "next/image";

export default function ServiceLocations() {
  return (
    <section className="w-full bg-[#0B1D3F]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Header */}
        <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-wide">
          Service Locations
        </h2>

        <div className="mt-10 max-w-4xl">
          <h3 className="text-white text-lg md:text-xl font-semibold tracking-wide">
            BATAM PORT: The Epicenter of Our Operations
          </h3>

          <p className="mt-6 text-white/90 text-base md:text-lg leading-relaxed">
            Our principal office in Batam underscores our unwavering dedication to the region’s maritime
            landscape. While Batam remains our strategic heartland, our expansive services gracefully
            extend to encompass all ports across Indonesia, including:
          </p>
        </div>

        {/* Map Card */}
        <div className="mt-14 md:mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            {/* Kalau kamu mau padding seperti referensi (map “napas”), pakai wrapper ini */}
            <div className="p-8 md:p-10">
              <div className="relative w-full aspect-[16/9]">
                {/* Ganti src sesuai file map kamu */}
                <Image
                  src="/service-locations-map.png"
                  alt="Balancia service locations map"
                  fill
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Optional: text kecil bawah kartu (kalau ingin seperti gaya corporate) */}
          {/* 
          <p className="mt-6 text-white/80 text-sm md:text-base italic">
            Providing 24/7 coverage and rapid response across all major Indonesian ports and international straits.
          </p> 
          */}
        </div>
      </div>
    </section>
  );
}
