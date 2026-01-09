import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DryDockingHero from "@/components/DryDockingHero";
import ServiceLocationsSection from "@/components/ServiceLocationsSection";
import WhatIsDryDocking from "@/components/WhatIsDryDocking";
import DryDockingBenefitsSection from "@/components/DryDockingBenefitsSection";
import ServiceProcessSection from "@/components/ServiceProcessSection";

export default function DryDockingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <DryDockingHero />

      {/* Section Deskripsi (Latar Biru Navy) */}
      <section className="w-full bg-[#0B1D3F] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-white space-y-10">
          <p className="text-lg md:text-xl leading-relaxed text-justify opacity-95">
            At <span className="font-bold">BALANCIA Ship Agency</span>, we provide specialized 
            <span className="font-bold"> Dry Docking</span> assistance to ensure your 
            vessel&apos;s structural integrity and operational efficiency. We coordinate with 
            the best shipyards in Indonesia to manage complex repairs, hull maintenance, 
            and regulatory inspections seamlessly.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-justify opacity-95 font-black">
            BALANCIA Ship Agency is ready to deliver outstanding results for your dry docking projects.
          </p>
        </div>
      </section>

      <ServiceLocationsSection/>
      <WhatIsDryDocking/>
      <DryDockingBenefitsSection/>
      <ServiceProcessSection/>



      <Footer />
    </main>
  );
}