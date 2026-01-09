"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Compass, DollarSign, UserCheck } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const uspData = [
  {
    icon: <Compass size={40} className="text-[#1A3B7A]" />,
    title: "SMART PLAN",
    description: "We collaborate intimately with You from the initial planning phase, ensuring that your project is steered efficiently and precisely from its inception to the operational stage."
  },
  {
    icon: <DollarSign size={40} className="text-[#1A3B7A]" />,
    title: "SAFE COST",
    description: "We collaborate intimately with You from the initial planning phase, ensuring that your project is steered efficiently and precisely from its inception to the operational stage."
  },
  {
    icon: <UserCheck size={40} className="text-[#1A3B7A]" />,
    title: "CUSTOMIZED USP",
    description: "We collaborate intimately with You from the initial planning phase, ensuring that your project is steered efficiently and precisely from its inception to the operational stage."
  },
  // Tambahkan item tambahan untuk mengetes fitur geser (swipe)
  {
    icon: <Compass size={40} className="text-[#1A3B7A]" />,
    title: "EFFICIENT LOGISTICS",
    description: "Streamlining every step of the maritime process to ensure timely delivery and reduced operational friction for all our global partners."
  }
];

export default function UniqueSellingProposition() {
  return (
    <section className="w-full bg-[#F8FAFC] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Judul Section */}
        <h2 className="text-[#1A3B7A] text-4xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">
          Our Unique Selling Proposition
        </h2>

        {/* Slider Container */}
        <div className="relative px-4">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={false}
            loop={true}
            pagination={{
              clickable: true,
              el: ".usp-pagination",
            }}
            navigation={{
              nextEl: ".usp-next",
              prevEl: ".usp-prev",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-20"
          >
            {uspData.map((usp, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#1A3B7A] text-white rounded-[2.5rem] p-10 h-full flex flex-col items-center text-center shadow-2xl transition-transform duration-300 hover:-translate-y-2">
                  
                  {/* Lingkaran Ikon Putih */}
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-inner">
                    {usp.icon}
                  </div>

                  <h3 className="text-2xl font-black tracking-widest mb-6">
                    {usp.title}
                  </h3>

                  <p className="text-lg leading-relaxed opacity-90 font-medium">
                    {usp.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Indikator Titik (Dots) */}
          <div className="usp-pagination flex justify-center gap-3 mb-10" />

          {/* Tombol Navigasi Panah (Kiri & Kanan) */}
          <div className="flex items-center justify-center gap-6">
            <button className="usp-prev w-14 h-14 rounded-full bg-[#1A3B7A]/20 flex items-center justify-center text-[#1A3B7A] hover:bg-[#1A3B7A] hover:text-white transition-all shadow-md">
              <ChevronLeft size={32} />
            </button>
            <button className="usp-next w-14 h-14 rounded-full bg-[#1A3B7A] flex items-center justify-center text-white hover:bg-[#0B1D3F] transition-all shadow-lg">
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Styles untuk Pagination Dots sesuai gambar */}
      <style jsx global>{`
        .usp-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #CBD5E1 !important;
          opacity: 1 !important;
          transition: all 0.3s ease;
        }
        .usp-pagination .swiper-pagination-bullet-active {
          background: #1A3B7A !important;
          width: 30px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
}