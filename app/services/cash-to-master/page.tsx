import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CashToMasterHero from "@/components/CashToMasterHero";
import CashToMasterDescription from "@/components/CashToMasterDescription";
import ServiceLocationsSection from "@/components/ServiceLocationsSection";
import WhatIsCashToMaster from "@/components/WhatIsCashToMaster";
import BenefitsCashToMaster from "@/components/BenefitsCashToMaster";
import ServiceProcessSection from "@/components/ServiceProcessSection";

export default function CashToMasterPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section sesuai gambar referensi */}
      <CashToMasterHero />

      {/* 3. Description Section (Latar Biru Navy) */}
      <CashToMasterDescription />

      <ServiceLocationsSection/>
      <WhatIsCashToMaster/>
      <BenefitsCashToMaster/>
      <ServiceProcessSection/>

      {/* 4. Footer */}
      <Footer />
    </main>
  );
}