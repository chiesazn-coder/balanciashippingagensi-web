import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SustainabilityHero from "@/components/SustainabilityHero";
import ISOCertification from "@/components/ISOCertification";
import ISOEnvironmental from "@/components/ISOEnvironmental";
import ISOHealthSafety from "@/components/ISOHealthSafety";
import BimcoMembership from "@/components/BimcoMembership";

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <SustainabilityHero />

      {/* Section Deskripsi (Latar Biru Navy) - Melanjutkan area biru dari bawah Hero */}
      <section className="w-full bg-[#0B1D3F] pb-24 pt-4 px-6 md:px-12"></section>

      <ISOCertification/>
      <ISOEnvironmental/>
      <ISOHealthSafety/>
      <BimcoMembership/>

      {/* Footer */}
      <Footer />
    </main>
  );
}