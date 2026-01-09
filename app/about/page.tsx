import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import WhoWeAre from "@/components/WhoWeAre";
import MissionValues from "@/components/MissionValues";
import Founder from "@/components/Founder";
import MarineAdvisor from "@/components/MarineAdvisor";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <WhoWeAre/>
      <MissionValues />
      <Founder/>
      <MarineAdvisor/>
      <Footer />
    </main>
  );
}