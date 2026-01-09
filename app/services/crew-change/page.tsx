import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrewChangeHero from "@/components/CrewChangeHero"; // Import Komponen Hero baru
import CrewChangeDescription from "@/components/CrewChangeDescription";
import ServiceLocationsSection from "@/components/ServiceLocationsSection";
import WhatIsCrewChange from "@/components/WhatIsCrewChange";
import CrewLogistics from "@/components/CrewLogistics";
import ServiceProcesses from "@/components/ServiceProcesses";

export default function CrewChangePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Memanggil Komponen Hero yang sudah dipisah */}
      <CrewChangeHero 
        title="Crew Change" 
        imageSrc="/crew-hero-one.png" 
      />
      <CrewChangeDescription/>
      <ServiceLocationsSection/>
      <WhatIsCrewChange/>
      <CrewLogistics/>
      <ServiceProcesses/>

      <Footer />
    </main>
  );
}