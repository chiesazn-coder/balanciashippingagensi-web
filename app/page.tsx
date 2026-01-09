import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoreValues from "./components/CoreValues";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CoreValues />
      <Testimonials />
      <Newsletter />
      <Footer />
      {/* Section lainnya di bawah */}
    </main>
  );
}