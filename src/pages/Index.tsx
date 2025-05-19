
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import DroneDemo from '@/components/DroneDemo';
import TestimonialSection from '@/components/TestimonialSection';
import StatsSection from '@/components/StatsSection';
import CompetitiveEdge from '@/components/CompetitiveEdge';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-psyc-darkGreen text-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <DroneDemo />
        <TestimonialSection />
        <StatsSection />
        <CompetitiveEdge />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
