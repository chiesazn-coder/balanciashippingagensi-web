import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UnderwaterHero from "@/components/UnderwaterHero";
import UnderwaterDescription from "@/components/UnderwaterDescription";
import ServiceLocationsSection from "@/components/ServiceLocationsSection";
import WhatIsUnderwater from "@/components/WhatIsUnderwater";
import BenefitsUnderwaterHullCleaning from "@/components/BenefitsUnderwaterHullCleaning";
import UnderwaterProcess from "@/components/UnderwaterProcess";

export default function UnderwaterCleaningPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <UnderwaterHero />
      <UnderwaterDescription/>
      <ServiceLocationsSection/>
      <WhatIsUnderwater/>
      <BenefitsUnderwaterHullCleaning/>
      <UnderwaterProcess/>


      <Footer />
    </main>
  );
}