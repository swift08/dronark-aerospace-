import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechnologySection from "@/components/TechnologySection";
import FlagshipSection from "@/components/FlagshipSection";
import IndustriesSection from "@/components/IndustriesSection";
import AboutSection from "@/components/AboutSection";
import WhyDronarkSection from "@/components/WhyDronarkSection";
import FounderSection from "@/components/FounderSection";
import FounderMessageSection from "@/components/FounderMessageSection";
import FutureSection from "@/components/FutureSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const SuccessStoriesSection = lazy(() => import("@/components/SuccessStoriesSection"));
const MerchSection = lazy(() => import("@/components/MerchSection"));

function SectionFallback({ minHeight = "40vh" }: { minHeight?: string }) {
  return <div className="w-full" style={{ minHeight }} aria-hidden />;
}

const Index = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen overflow-x-hidden"
    >
      <Navbar />
      <HeroSection />
      <FounderSection />
      <FounderMessageSection />
      <Suspense fallback={<SectionFallback minHeight="50vh" />}>
        <MerchSection />
      </Suspense>
      <TechnologySection />
      <FlagshipSection />
      <IndustriesSection />
      <AboutSection />
      <WhyDronarkSection />
      <Suspense fallback={<SectionFallback minHeight="70vh" />}>
        <SuccessStoriesSection />
      </Suspense>
      <FutureSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
