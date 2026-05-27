'use client';

import Navbar from '@/components/Navbar';
import MobileCTA from '@/components/MobileCTA';
import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import BenefitsSection from '@/components/sections/BenefitsSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import AboutSection from '@/components/sections/AboutSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import ApplicationForm from '@/components/sections/ApplicationForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <BenefitsSection />
      <HowItWorksSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <ApplicationForm />
      <Footer />
      <MobileCTA />
    </main>
  );
}
