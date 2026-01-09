import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CSRHero from "@/components/CSRHero";
import SearchBar from "@/components/SearchBar";
import CSRArticles from "@/components/CSRArticles";

export default function CSRPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section sesuai referensi gambar */}
      <CSRHero />
      <SearchBar/>
      <CSRArticles/>

      <Footer />
    </main>
  );
}