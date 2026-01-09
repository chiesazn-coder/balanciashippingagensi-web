"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  { quote: "Efficiency and expertise.", author: "Capt A. Johnson" },
  { quote: "Gave us a peace of mind.", author: "Capt. Mate L. Rodriguez" },
  { quote: "Proven their mettle.", author: "Chief Engineer D. Wallace" },
  { quote: "Unparalleled expertise.", author: "Capt. R. Fernandez" },
  { quote: "Reliable partner at sea.", author: "Eng. Sarah Lee" },
  { quote: "Top notch services.", author: "Capt. Mike T." },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#0B1D3F] py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-white text-4xl md:text-5xl font-black text-center uppercase tracking-wider mb-16">
          Seafarer Knows Us Better
        </h2>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl h-full flex flex-col min-h-[320px]">
                  {/* Top Area: Quote */}
                  <div className="p-8 flex-grow flex items-center justify-center">
                    <p className="text-[#1A3B7A] text-xl md:text-2xl font-bold text-center italic leading-tight">
                      “{item.quote}”
                    </p>
                  </div>
                  {/* Bottom Area: Author */}
                  <div className="bg-[#1A3B7A] p-6">
                    <p className="text-white font-semibold text-center text-lg">
                      {item.author}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots */}
          <div className="custom-pagination flex justify-center gap-2 mt-12 mb-8" />

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6">
            <button className="prev-btn w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all">
              <ChevronLeft size={24} />
            </button>
            <button className="next-btn w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 shadow-lg transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Style Global untuk Bullets Pagination */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.3;
          width: 10px;
          height: 10px;
          margin: 0 4px !important;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          background: white !important;
          width: 12px;
          height: 12px;
        }
      `}</style>
    </section>
  );
}