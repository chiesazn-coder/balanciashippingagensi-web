import { Info } from "lucide-react";

export default function ServicesExpertise() {
  return (
    <section className="w-full bg-[#0B1D3F] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Judul Utama */}
        <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tight mb-16 text-center md:text-left">
          Our Services and Expertise
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          
          {/* SISI KIRI: Video Card (YouTube Style) */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              {/* Thumbnail/Video Container */}
              <div className="relative aspect-video group cursor-pointer">
                <img 
                  src="/video-thumbnail.png" // Ganti dengan thumbnail video Anda
                  alt="Balancia Shipping Video"
                  className="w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-[#0B1D3F] border-b-[10px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>

              {/* Video Info Strip */}
              <div className="p-4 flex items-center justify-between border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-800 line-clamp-1">
                    Balancia Shipping - BP Tangguh Expansion Project...
                  </span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <img src="/youtube-icon.png" alt="YT" className="w-4 h-4" />
                    <span className="text-xs text-gray-500 font-medium tracking-wide">YouTube</span>
                  </div>
                </div>
                <Info size={18} className="text-gray-400 cursor-help" />
              </div>
            </div>
          </div>

          {/* SISI KANAN: Teks Deskripsi */}
          <div className="w-full lg:w-1/2 text-white space-y-8">
            <p className="text-lg md:text-xl leading-relaxed text-justify opacity-90">
              In our operations, we don&apos;t just aim for efficiency; we also prioritize quality. 
              By strictly adhering to international quality standards, we guarantee that every 
              operation is executed with the highest degree of professionalism. Furthermore, 
              we are deeply committed to complying with all relevant local laws and regulations, 
              ensuring that our clients have complete peace of mind when working with us.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-justify opacity-90">
              Safety and well-being are at the core of our values. With a steadfast 
              &apos;zero-incident&apos; approach, we prioritize the health and safety of 
              everyone we work with — from our dedicated employees to our valued clients, 
              business associates, and subcontractors. This commitment reflects our 
              dedication to creating a work environment that is not only secure but 
              also conducive to productivity and collaboration.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}