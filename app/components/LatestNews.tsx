import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const categories = [
  "Company", "CSR", "Knowledge", "News", "Policy", "Uncategorized"
];

const newsData = [
  {
    category: "KNOWLEDGE",
    title: "Beyond Borders: Expanding Horizons Professional Shipping Agencies",
    readingTime: "3 minutes",
    description: "The \"Beyond Borders\" slogan is a perfect representation of the values held by services of professional shipping agencies, the unsung heroes of the international trade system.",
    image: "/images/news-port.jpg", // Ganti dengan path gambar Anda
  },
  {
    category: "NEWS",
    title: "Celebrating Waves of Prosperity: Happy World Maritime Day 2023!",
    readingTime: "3 minutes",
    description: "World Maritime Day, celebrated annually on the last Thursday of Septembe, highlights the importance of the maritime safety, security and the marine environment. In 2023, this celebratory day once again unites...",
    image: "/images/news-ship.jpg", // Ganti dengan path gambar Anda
  }
];

export default function LatestNews() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 font-sans">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* SIDEBAR CATEGORIES */}
        <aside className="w-full lg:w-1/4">
          <h2 className="text-[#1A3B7A] text-2xl font-black uppercase tracking-tight mb-8">
            Categories
          </h2>
          <ul className="space-y-4">
            {categories.map((cat, index) => (
              <li key={index} className="group cursor-pointer flex items-center gap-2 text-[#1A3B7A] hover:text-[#E86B39] transition-colors">
                <ChevronRight className="w-5 h-5 stroke-[3px]" />
                <span className="text-xl font-bold">{cat}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* LATEST NEWS GRID */}
        <main className="w-full lg:w-3/4">
          <h2 className="text-[#1A3B7A] text-4xl font-black uppercase tracking-tight mb-10">
            Latest News
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsData.map((news, index) => (
              <div 
                key={index} 
                className="flex flex-col border-[1.5px] border-[#1A3B7A] rounded-[2.5rem] overflow-hidden bg-white hover:shadow-xl transition-shadow"
              >
                {/* News Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* News Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-[#E86B39] font-black text-lg uppercase tracking-wider mb-2">
                    {news.category}
                  </span>
                  
                  <h3 className="text-[#1A3B7A] text-2xl font-black leading-tight mb-4 min-h-[4rem]">
                    {news.title}
                  </h3>
                  
                  <p className="text-[#1A3B7A] text-sm font-bold mb-4 opacity-70">
                    Reading time: {news.readingTime}
                  </p>
                  
                  <p className="text-[#1A3B7A] text-lg leading-relaxed mb-8 opacity-90 line-clamp-4">
                    {news.description}
                  </p>

                  {/* Read More Button */}
                  <button className="mt-auto bg-[#E86B39] text-white font-black text-lg py-3 px-8 rounded-2xl w-fit hover:bg-[#d15d2f] transition-colors">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

      </div>
    </section>
  );
}