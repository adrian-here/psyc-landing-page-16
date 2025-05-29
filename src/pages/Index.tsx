
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import DroneDemo from '@/components/DroneDemo';
import TestimonialSection from '@/components/TestimonialSection';
import StatsSection from '@/components/StatsSection';
import PartnersSection from '@/components/PartnersSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ThreeDBackground from '@/components/ThreeDBackground';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();

  // Handle scroll to section on page load if hash is present
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // remove the # character
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-psyc-darkest text-white relative overflow-hidden">
      <ThreeDBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <div id="problem-solution">
            <ProblemSolutionSection />
          </div>
          <div id="features">
            <FeaturesSection />
          </div>
          <div id="demo">
            <DroneDemo />
          </div>
          <TestimonialSection />
          <StatsSection />
          <div id="partners">
            <PartnersSection />
          </div>
          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Index;
