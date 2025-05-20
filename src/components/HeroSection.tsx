
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      if (logoRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = Math.max(1 - scrollPosition / 500, 0.2);
        logoRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchVideo = () => {
    scrollToSection('demo');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video (placeholder for now) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Animated logo */}
      <div 
        ref={logoRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-pulse-glow pointer-events-none"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-psyc-green/20 backdrop-blur-sm flex items-center justify-center border border-psyc-green/30">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-psyc-green/30 flex items-center justify-center border border-psyc-green/50">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-psyc-green flex items-center justify-center shadow-lg shadow-psyc-green/30">
              <span className="text-white font-bold text-3xl md:text-5xl">PSYC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 md:px-6 pt-24 pb-20 md:pb-32 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white animate-fade-in">
          PSYC – Innovating Wildlife Control with <span className="text-gradient">Precision and Safety</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mt-6 mb-10 animate-fade-in">
          Revolutionizing elephant tranquilization through cutting-edge drone technology
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8 md:mt-12 animate-fade-in">
          <Button 
            className="btn-primary w-full sm:w-auto"
            onClick={() => scrollToSection('features')}
          >
            Discover Our Approach
          </Button>
          <Button 
            variant="outline" 
            className="btn-secondary w-full sm:w-auto flex items-center justify-center space-x-2"
            onClick={handleWatchVideo}
          >
            <Play size={18} className="mr-2" />
            <span>Watch the Drone in Action</span>
          </Button>
        </div>
        
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection('problem-solution')}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
      
      {/* Floating drone silhouette */}
      <div className="absolute top-1/3 right-[10%] animate-float hidden md:block">
        <div className="w-16 h-16 opacity-30">
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12.5L7.5 15.5M12 12.5L16.5 15.5M12 12.5V19M7.5 15.5L4.5 13.5M7.5 15.5V19L12 22M16.5 15.5L19.5 13.5M16.5 15.5V19L12 22M4.5 13.5L2 12L4.5 10.5M4.5 13.5L7.5 11.5M19.5 13.5L22 12L19.5 10.5M19.5 13.5L16.5 11.5M4.5 10.5L7.5 8.5L12 5L16.5 8.5L19.5 10.5M7.5 8.5V11.5M16.5 8.5V11.5M12 5V8" strokeWidth="1"/>
          </svg>
        </div>
      </div>
      
      <div className="absolute bottom-1/4 left-[15%] animate-float animation-delay-1000 hidden md:block">
        <div className="w-12 h-12 opacity-20">
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12.5L7.5 15.5M12 12.5L16.5 15.5M12 12.5V19M7.5 15.5L4.5 13.5M7.5 15.5V19L12 22M16.5 15.5L19.5 13.5M16.5 15.5V19L12 22M4.5 13.5L2 12L4.5 10.5M4.5 13.5L7.5 11.5M19.5 13.5L22 12L19.5 10.5M19.5 13.5L16.5 11.5M4.5 10.5L7.5 8.5L12 5L16.5 8.5L19.5 10.5M7.5 8.5V11.5M16.5 8.5V11.5M12 5V8" strokeWidth="1"/>
          </svg>
        </div>
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-glow-gradient opacity-20 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-glow-gradient opacity-10 rounded-full"></div>
    </section>
  );
};

export default HeroSection;
