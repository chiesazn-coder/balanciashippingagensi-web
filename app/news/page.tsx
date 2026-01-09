import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsHero from "@/components/NewsHero";
import LatestNews from "@/components/LatestNews";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section dengan Search Bar sesuai gambar */}
      <NewsHero />

      <LatestNews/>

      <Footer />
    </main>
  );
}