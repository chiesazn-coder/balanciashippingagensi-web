import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import PortAgencyDescription from "@/components/PortAgencyDescription";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesExpertise from "@/components/ServicesExpertise";
import ServiceLocations from "@/components/ServiceLocations";
import UniqueSellingProposition from "@/components/UniqueSellingProposition";

export default function PortAgencyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <ServiceHero 
        title="Port Agency" 
        imageSrc="/port-bg.png" // Ganti dengan gambar pelabuhan/kapal kamu
      />
      <PortAgencyDescription/>
      <WhyChooseUs/>
      <ServicesExpertise/>
      <ServiceLocations/>
      <UniqueSellingProposition/>

      <Footer />
    </main>
  );
}