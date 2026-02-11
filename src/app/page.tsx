import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <DestinationsSection />
        <AboutSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}