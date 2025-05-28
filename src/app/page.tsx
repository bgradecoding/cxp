import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import LCAModulesSection from "@/components/landing/LCAModulesSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white dark:from-secondary-950 dark:to-secondary-900">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <LCAModulesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
