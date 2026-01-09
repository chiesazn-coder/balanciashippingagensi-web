import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HusbandryHero from "@/components/HusbandryHero";
import HusbandryDescription from "@/components/HusbandryDescription";
import WhatIsHusbandry from "@/components/WhatIsHusbandry";
import WhyChooseHusbandry from "@/components/WhyChooseHusbandry";
import HusbandryPartnership from "@/components/HusbandryPartnership";
import HusbandryProcess from "@/components/HusbandryProcess";

export default function HusbandryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar tetap di atas (sticky) */}
      <Navbar />

      {/* Komponen Hero */}
      <HusbandryHero />
      <HusbandryDescription/>
      <WhatIsHusbandry/>
      <WhyChooseHusbandry/>
      <HusbandryPartnership/>
      <HusbandryProcess/>

      <Footer />
    </main>
  );
}