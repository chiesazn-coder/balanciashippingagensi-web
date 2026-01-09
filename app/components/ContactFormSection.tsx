import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

const ContactFormSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        
        {/* SISI KIRI: FORMULIR KONTAK */}
        <div className="w-full lg:w-3/5">
          <p className="text-[#1A3B7A] text-xl font-bold leading-relaxed mb-10 max-w-2xl">
            Feel free to visit our office for a Happiness Cup of Coffee. 
            You can also contact us via phone or WhatsApp for any inquiries you may have.
          </p>

          <form className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-[#1A3B7A] font-bold text-lg">Name <span className="text-[#E86B39]">*</span></label>
              <input type="text" className="w-full border-2 border-[#1A3B7A] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E86B39]/20" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#1A3B7A] font-bold text-lg">Email <span className="text-[#E86B39]">*</span></label>
              <input type="email" className="w-full border-2 border-[#1A3B7A] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E86B39]/20" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#1A3B7A] font-bold text-lg leading-tight">
                WhatsApp Number (with international code, ex: +628123123 for Indonesia) <span className="text-[#E86B39]">*</span>
              </label>
              <input type="tel" className="w-full border-2 border-[#1A3B7A] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E86B39]/20" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#1A3B7A] font-bold text-lg">Company <span className="text-[#E86B39]">*</span></label>
              <input type="text" className="w-full border-2 border-[#1A3B7A] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E86B39]/20" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#1A3B7A] font-bold text-lg">Subject <span className="text-[#E86B39]">*</span></label>
              <input type="text" className="w-full border-2 border-[#1A3B7A] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E86B39]/20" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#1A3B7A] font-bold text-lg">Message <span className="text-[#E86B39]">*</span></label>
              <textarea rows={6} className="w-full border-2 border-[#1A3B7A] rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E86B39]/20" required></textarea>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg w-fit flex items-center gap-4">
               <input type="checkbox" className="w-6 h-6" />
               <span className="text-sm font-medium">I&apos;m not a robot</span>
               <div className="ml-8"><Image src="/images/recaptcha-logo.png" width={40} height={40} alt="recaptcha" /></div>
            </div>

            <button type="submit" className="bg-[#E86B39] text-white font-black text-2xl py-4 px-12 rounded-2xl hover:bg-[#d15d2f] transition-all shadow-lg hover:shadow-[#E86B39]/40">
              Submit
            </button>
          </form>
        </div>

        {/* SISI KANAN: INFO & PROFIL */}
        <div className="w-full lg:w-2/5 flex flex-col gap-8">
          
          {/* 1. Card Sales Manager */}
          <div className="border-2 border-[#1A3B7A] rounded-[2rem] p-6 shadow-lg bg-white group">
            <h3 className="text-[#E86B39] text-sm font-black uppercase tracking-widest mb-4">Sales Manager</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-20 overflow-hidden rounded-full border-2 border-[#1A3B7A]">
                <Image 
                  src="/azizi-profile.png" 
                  alt="Hibatul Azizi" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-[#1A3B7A] text-xl font-black uppercase">HIBATUL AZIZI</h4>
                <div className="flex items-center gap-2 text-[#1A3B7A]/70 text-sm font-bold">
                  <MessageSquare size={14} />
                  <span>Available for inquiries</span>
                </div>
              </div>
            </div>
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3 text-[#1A3B7A]">
                <Phone size={18} className="text-[#E86B39]" />
                <span className="font-bold">+62 811 2929 654</span>
              </div>
              <div className="flex items-center gap-3 text-[#1A3B7A]">
                <Mail size={18} className="text-[#E86B39]" />
                <span className="font-bold">ops@balancia.co.id</span>
              </div>
            </div>
          </div>

          {/* 2. Card Corporate Relationships Manager */}
          <div className="border-2 border-[#1A3B7A] rounded-[2rem] p-6 shadow-lg bg-white group">
            <div className="mb-4">
              <h3 className="text-[#E86B39] text-sm font-black uppercase tracking-widest">Corporate Relationships Manager</h3>
              <p className="text-[#1A3B7A]/60 text-[10px] font-bold italic">For Suppliers and Vendors Collaboration</p>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-20 overflow-hidden rounded-full border-2 border-[#1A3B7A]">
                <Image 
                  src="/prisna-profile.png" 
                  alt="Prisna Rahmawati" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-[#1A3B7A] text-xl font-black uppercase">Mrs. PRISNA RAHMAWATI</h4>
              </div>
            </div>
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3 text-[#1A3B7A]">
                <Phone size={18} className="text-[#E86B39]" />
                <span className="font-bold">+62 811 2627 711</span>
              </div>
              <div className="flex items-center gap-3 text-[#1A3B7A]">
                <Mail size={18} className="text-[#E86B39]" />
                <span className="font-bold">port.agency@balancia.co.id</span>
              </div>
            </div>
          </div>

          {/* 3. Card Alamat Kantor */}
          <div className="border-2 border-[#1A3B7A] rounded-[2rem] p-6 shadow-md bg-gray-50/50">
            <div className="flex gap-4">
              <MapPin className="text-[#E86B39] shrink-0 w-6 h-6" />
              <p className="text-[#1A3B7A] text-sm font-bold leading-relaxed">
                HQ OFFICE: Komplek Ruko Golden City Blok C No. 3A, Bengkong, Batam, Indonesia 29432
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;