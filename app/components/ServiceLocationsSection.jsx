import Image from "next/image";

export default function ServiceLocationsSection() {
  return (
    <section className="w-full bg-[#F3FEFA] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Title */}
        <h2 className="text-[#0B2A57] text-4xl md:text-6xl font-black uppercase tracking-tight">
          Service Locations
        </h2>

        {/* Text block */}
        <div className="mt-10 max-w-5xl">
          <h3 className="text-[#0B2A57] text-lg md:text-xl font-bold tracking-wide">
            BATAM PORT: The Epicentre of Our Operations
          </h3>

          <p className="mt-6 text-[#0B2A57]/90 text-base md:text-lg leading-relaxed">
            Our principal office in Batam underscores our unwavering dedication to the region’s maritime
            landscape. While Batam remains our strategic heartland, our expansive services gracefully
            extend to encompass all ports across Indonesia, including:
          </p>
        </div>

        {/* Map Card */}
        <div className="mt-12 md:mt-14">
          <div className="rounded-[28px] bg-white shadow-[0_18px_40px_rgba(11,42,87,0.25)] overflow-hidden">
            {/* padding dalam card */}
            <div className="p-6 md:p-10">
              {/* area map */}
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/service-locations-map.png"
                  alt="Balancia service locations map"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
