import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactFormSection from "@/components/ContactFormSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section dengan Map Background */}
      <ContactHero />
      <ContactFormSection/>

      <Footer />
    </main>
  );
}