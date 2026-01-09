"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { 
    label: "About", 
    href: "/about",
    dropdown: [
      { label: "Who We Are", href: "/about" }, 
      { label: "Corporate Social Responsibility", href: "/about/csr" },
    ]
  },
  { 
    label: "Services", 
    href: "/services",
    dropdown: [
      { label: "Port Agency", href: "/services/port-agency" },
      { label: "Crew Change", href: "/services/crew-change" },
      { label: "Husbandry Services", href: "/services/husbandry" },
      { label: "Cash to Master", href: "/services/cash-to-master" },
      { label: "Underwater Cleaning", href: "/services/underwater-cleaning" },
      { label: "Dry Docking", href: "/services/dry-docking" },
    ]
  },
  { label: "News & Updates", href: "/news" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    // PERBAIKAN: Gunakan bg-white solid (bukan transparan) dan z-[9999]
    <header className="w-full bg-white sticky top-0 z-[9999] shadow-md border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-20 md:h-24 items-center justify-between">
          
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/balancia-logo.png"
                alt="Balancia Ship Agency"
                width={180}
                height={50}
                priority
                className="h-auto w-auto"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex h-full items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              const hasDropdown = !!item.dropdown;
              const isCurrentlyOpen = openDropdown === item.label;

              if (hasDropdown) {
                return (
                  <div 
                    key={item.label}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 text-[15px] font-bold transition-colors ${
                        isActive || isCurrentlyOpen ? "text-[#1A2E50]" : "text-slate-600 hover:text-[#1A2E50]"
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform duration-300 ${isCurrentlyOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isCurrentlyOpen && (
                      <div className="absolute top-full left-0 w-72 bg-white shadow-2xl rounded-xl border border-gray-100 py-3 animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.dropdown?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-6 py-3 text-[#1A2E50] text-[14px] font-bold hover:bg-slate-50 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                    
                    {/* Indikator Biru di bawah menu aktif */}
                    <span className={`absolute bottom-0 left-0 h-[4px] bg-[#1A2E50] transition-all duration-300 ${isActive ? "w-full" : "w-0"}`} />
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex h-full items-center text-[15px] font-bold transition-colors ${
                    isActive ? "text-[#1A2E50]" : "text-slate-600 hover:text-[#1A2E50]"
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-[4px] bg-[#1A2E50] transition-all duration-300 ${isActive ? "w-full" : "w-0"}`} />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block w-[40px]"></div>
        </div>
      </div>
    </header>
  );
}