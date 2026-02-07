import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechnologySection from "@/components/TechnologySection";
import FlagshipSection from "@/components/FlagshipSection";
import IndustriesSection from "@/components/IndustriesSection";
import AboutSection from "@/components/AboutSection";
import WhyDronarkSection from "@/components/WhyDronarkSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import FounderSection from "@/components/FounderSection";
import FounderMessageSection from "@/components/FounderMessageSection";
import FutureSection from "@/components/FutureSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen overflow-x-hidden"
    >
      <Navbar />
      <HeroSection />
      <FounderSection />
      <FounderMessageSection />
      <TechnologySection />
      <FlagshipSection />
      <IndustriesSection />
      <AboutSection />
      <WhyDronarkSection />
      <SuccessStoriesSection />
      <FutureSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
