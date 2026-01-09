import Image from "next/image";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0B1D3F] text-white overflow-hidden">
      
      {/* 1. WAVE EFFECT: Gelombang di bagian atas footer */}
      <div className="absolute top-0 left-0 w-full leading-[0] transform rotate-180">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-[60px] md:h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 75C840 90 960 120 1080 125C1200 130 1320 110 1380 100L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white" /* Gelombang berwarna putih agar kontras dengan background biru footer */
          />
        </svg>
      </div>

      {/* 2. MAIN CONTENT: Grid Layout */}
      <div className="max-w-7xl mx-auto pt-32 pb-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Kolom 1: Logo */}
          <div className="flex flex-col">
            <Link href="/">
              <Image
                src="/balancia-logo-white.png" // Pastikan kamu punya logo versi putih
                alt="Balancia Ship Agency"
                width={280}
                height={100}
                className="h-auto w-auto"
              />
            </Link>
          </div>

          {/* Kolom 2: Kontak & Alamat */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-start">
              <MapPin className="text-[#E86B39] shrink-0" size={24} />
              <p className="text-sm leading-relaxed">
                HQ OFFICE: Komplek Ruko <br />
                Golden City Blok C No. 3A, <br />
                Bengkong, Batam, <br />
                Indonesia 29432
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-[#E86B39]" size={20} />
              <p className="text-sm">+627784883769</p>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-[#E86B39]" size={20} />
              <div>
                <p className="text-sm">+628112929654</p>
                <p className="text-xs opacity-60">(WhatsApp)</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-[#E86B39]" size={20} />
              <p className="text-sm">care@balancia.co.id</p>
            </div>
          </div>

          {/* Kolom 3: Links & Social Media */}
          <div className="flex flex-col gap-8">
            <nav className="flex flex-col gap-4">
              {['Contact us', 'Blog', 'Shipping'].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  className="flex items-center gap-2 hover:text-[#E86B39] transition-all group"
                >
                  <ChevronRight size={18} className="text-[#E86B39] group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm font-medium">{item}</span>
                </Link>
              ))}
            </nav>

            {/* Social Icons sesuai gambar referensi */}
            <div className="flex gap-4">
              <SocialIcon Icon={Facebook} color="#3B5998" />
              <SocialIcon Icon={Instagram} color="#C13584" />
              <SocialIcon Icon={Linkedin} color="#0077B5" />
              <SocialIcon Icon={Youtube} color="#CD201F" />
            </div>
          </div>

          {/* Kolom 4: Newsletter */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-black uppercase tracking-tight leading-tight">
              Subscribe to Our <br /> Newsletter
            </h3>
            <form className="flex w-full bg-white rounded-xl overflow-hidden p-1.5 shadow-inner">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-grow py-2 px-4 text-gray-700 outline-none text-sm"
              />
              <button
                type="submit"
                className="bg-[#E86B39] text-white px-5 py-2 font-bold text-sm rounded-lg hover:bg-[#d55a2d] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

        </div>

        {/* 3. COPYRIGHT */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">
            © 2026 Balancia Ship Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Komponen Kecil untuk Social Icon yang sudah diperbaiki tipenya
function SocialIcon({ Icon, color }: { Icon: LucideIcon, color: string }) {
  return (
    <Link 
      href="#" 
      style={{ backgroundColor: color }} 
      className="w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
    >
      <Icon 
        size={20} 
        // Logika warna fill: Instagram biasanya outline, lainnya fill solid
        fill={Icon.displayName === 'Instagram' ? "none" : "white"} 
        stroke="white" 
      />
    </Link>
  );
}