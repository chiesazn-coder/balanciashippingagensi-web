"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "Who We Are", href: "/about" },
      { label: "Corporate Social Responsibility", href: "/about/csr" },
    ],
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
    ],
  },
  { label: "News & Updates", href: "/news" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  // Desktop dropdown
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Mobile
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  // Close all menus (dipanggil via event, bukan useEffect)
  const closeAllMenus = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
    setOpenDropdown(null);
  };

  return (
    <header className="w-full bg-white sticky top-0 z-[9999] shadow-md border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-20 md:h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeAllMenus}>
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

          {/* DESKTOP NAV (tetap) */}
          <nav className="hidden lg:flex h-full items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + "/");
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
                        isActive || isCurrentlyOpen
                          ? "text-[#1A2E50]"
                          : "text-slate-600 hover:text-[#1A2E50]"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isCurrentlyOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu (desktop) */}
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

                    {/* indikator aktif */}
                    <span
                      className={`absolute bottom-0 left-0 h-[4px] bg-[#1A2E50] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex h-full items-center text-[15px] font-bold transition-colors ${
                    isActive
                      ? "text-[#1A2E50]"
                      : "text-slate-600 hover:text-[#1A2E50]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[4px] bg-[#1A2E50] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block w-[40px]"></div>

          {/* MOBILE HAMBURGER */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-[#1A2E50] hover:bg-slate-50 transition"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      <div
        className={`lg:hidden border-t border-gray-100 bg-white overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-4">
          <div className="flex flex-col">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + "/");
              const hasDropdown = !!item.dropdown;
              const isOpen = mobileDropdown === item.label;

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAllMenus}
                    className={`py-3 text-[15px] font-bold transition-colors ${
                      isActive ? "text-[#1A2E50]" : "text-slate-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="py-2">
                  <button
                    onClick={() =>
                      setMobileDropdown((cur) =>
                        cur === item.label ? null : item.label
                      )
                    }
                    className={`w-full flex items-center justify-between py-2 text-[15px] font-bold transition-colors ${
                      isActive || isOpen ? "text-[#1A2E50]" : "text-slate-600"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-[520px] mt-2" : "max-h-0"
                    }`}
                  >
                    <div className="rounded-xl border border-gray-100 bg-white">
                      {item.dropdown?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={closeAllMenus}
                          className="block px-4 py-3 text-[14px] font-bold text-[#1A2E50] hover:bg-slate-50 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
