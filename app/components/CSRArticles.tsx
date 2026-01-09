"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const articles = [
  {
    id: 1,
    category: "CSR",
    title: "Balancia Ship Agency's Remarkable CSR Initiative: Foster Marine Life and Conservation in Yogyakarta",
    image: "/csr-hero.png", 
    readingTime: "3 minutes",
    slug: "foster-marine-life-yogyakarta"
  },
  {
    id: 2,
    category: "CSR",
    title: "Clean Ocean Project: Supporting Local Communities in Batam Ports Area",
    image: "/mangrove.png", 
    readingTime: "5 minutes",
    slug: "clean-ocean-project"
  }
];

export default function CSRArticles() {
  return (
    // 1. Kurangi padding section (py-24 -> py-12)
    <section className="w-full bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 2. Kurangi margin bawah judul (mb-16 -> mb-8) */}
        <div className="text-center mb-8">
          <h2 className="text-[#1A3B7A] text-3xl md:text-4xl font-black uppercase tracking-tight">
            CSR Activities
          </h2>
          <div className="mt-2 h-1 w-16 bg-[#E86B39] mx-auto rounded-full" />
        </div>

        {/* 3. Perkecil Max Width container agar card lebih proporsional */}
        <div className="max-w-3xl mx-auto relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            navigation={{
              nextEl: ".csr-next",
              prevEl: ".csr-prev",
            }}
            pagination={{
              clickable: true,
              el: ".csr-pagination",
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
              },
            }}
            className="pb-8"
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id}>
                {/* 4. Kurangi padding card (p-5 -> p-3) */}
                <div className="border-2 border-[#1A3B7A] rounded-[2rem] overflow-hidden bg-white flex flex-col p-3 shadow-lg mx-auto border-opacity-80">
                  
                  {/* 5. Ubah aspect ratio gambar agar lebih tipis (16/9 -> 21/9) */}
                  <div className="relative aspect-[21/9] w-full rounded-[1.5rem] overflow-hidden border border-gray-50">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* 6. Perkecil padding dan ukuran teks konten */}
                  <div className="p-5 flex flex-col gap-2">
                    <span className="text-[#E86B39] font-black text-sm uppercase tracking-tight">
                      {article.category}
                    </span>
                    
                    <h3 className="text-[#1A3B7A] text-xl md:text-2xl font-black leading-tight line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-400 text-xs font-semibold">
                      Reading time: {article.readingTime}
                    </p>

                    <Link href={`/news/${article.slug}`}>
                      <button className="mt-2 bg-[#E86B39] text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-[#d55a2d] transition-all w-fit shadow-md">
                        Read more
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 7. Perkecil navigasi di bawah (mt-10 -> mt-4) */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button className="csr-prev w-10 h-10 rounded-full bg-[#E86B39]/10 flex items-center justify-center text-[#E86B39] hover:bg-[#E86B39] hover:text-white transition-all">
              <ChevronLeft size={20} strokeWidth={3} />
            </button>
            
            <div className="csr-pagination flex items-center gap-2" />

            <button className="csr-next w-10 h-10 rounded-full bg-[#E86B39] flex items-center justify-center text-white hover:bg-[#d55a2d] transition-all">
              <ChevronRight size={20} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .csr-pagination .swiper-pagination-bullet {
          width: 32px !important;
          height: 32px !important;
          background: #f1f5f9 !important;
          color: #E86B39 !important;
          opacity: 1 !important;
          display: flex !important;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          border-radius: 50%;
          cursor: pointer;
          font-size: 14px;
        }
        .csr-pagination .swiper-pagination-bullet-active {
          background: #E86B39 !important;
          color: white !important;
        }
      `}</style>
    </section>
  );
}