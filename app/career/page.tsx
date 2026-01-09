import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareerHero from "@/components/CareerHero";
import CareerVacancies from "@/components/CareerVacancies";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section sesuai gambar referensi */}
      <CareerHero />

      <CareerVacancies/>

      <Footer />
    </main>
  );
}