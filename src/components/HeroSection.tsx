
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchVideo = () => {
    scrollToSection('demo');
  };

  const handleLearnMore = () => {
    scrollToSection('features');
  };

  const handleContactUs = () => {
    // Navigate to contact section or external contact page
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If no contact section, scroll to CTA section
      scrollToSection('cta');
    }
  };

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video (placeholder for now) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-psyc-orange/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 111, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 111, 0, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
          }}
        />

        {/* Animated drone paths */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 111, 0, 0)" />
              <stop offset="50%" stopColor="rgba(255, 111, 0, 0.5)" />
              <stop offset="100%" stopColor="rgba(255, 111, 0, 0)" />
            </linearGradient>
          </defs>
          
          {/* Curved flight paths */}
          <path
            d="M 100 200 Q 300 100 500 200 T 900 200"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <path
            d="M 100 800 Q 300 700 500 800 T 900 800"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: '6s', animationDelay: '2s' }}
          />
          
          {/* Moving dots along paths */}
          <circle r="3" fill="#FF6F00" className="opacity-70">
            <animateMotion dur="8s" repeatCount="indefinite">
              <path d="M 100 200 Q 300 100 500 200 T 900 200" />
            </animateMotion>
          </circle>
          <circle r="2" fill="#FFB74D" className="opacity-60">
            <animateMotion dur="10s" repeatCount="indefinite">
              <path d="M 100 800 Q 300 700 500 800 T 900 800" />
            </animateMotion>
          </circle>
        </svg>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-psyc-orange/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-amber-400/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
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
          <button 
            className="btn-primary w-full sm:w-auto px-8 py-3 bg-psyc-orange hover:bg-psyc-orange/90 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-psyc-orange/40"
            onClick={handleLearnMore}
          >
            Discover Our Approach
          </button>
          <button 
            className="btn-secondary w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3 border border-psyc-orange text-psyc-orange hover:bg-psyc-orange hover:text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-psyc-orange/40"
            onClick={handleWatchVideo}
          >
            <Play size={18} className="mr-2" />
            <span>Watch the Drone in Action</span>
          </button>
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
      
      {/* Enhanced floating drone silhouettes with parallax */}
      <div 
        className="absolute top-1/3 right-[10%] animate-float hidden md:block"
        style={{
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
        }}
      >
        <div className="w-16 h-16 opacity-30 hover:opacity-50 transition-opacity duration-300">
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12.5L7.5 15.5M12 12.5L16.5 15.5M12 12.5V19M7.5 15.5L4.5 13.5M7.5 15.5V19L12 22M16.5 15.5L19.5 13.5M16.5 15.5V19L12 22M4.5 13.5L2 12L4.5 10.5M4.5 13.5L7.5 11.5M19.5 13.5L22 12L19.5 10.5M19.5 13.5L16.5 11.5M4.5 10.5L7.5 8.5L12 5L16.5 8.5L19.5 10.5M7.5 8.5V11.5M16.5 8.5V11.5M12 5V8" strokeWidth="1"/>
          </svg>
        </div>
      </div>
      
      <div 
        className="absolute bottom-1/4 left-[15%] animate-float animation-delay-1000 hidden md:block"
        style={{
          transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * 10}px)`
        }}
      >
        <div className="w-12 h-12 opacity-20 hover:opacity-40 transition-opacity duration-300">
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12.5L7.5 15.5M12 12.5L16.5 15.5M12 12.5V19M7.5 15.5L4.5 13.5M7.5 15.5V19L12 22M16.5 15.5L19.5 13.5M16.5 15.5V19L12 22M4.5 13.5L2 12L4.5 10.5M4.5 13.5L7.5 11.5M19.5 13.5L22 12L19.5 10.5M19.5 13.5L16.5 11.5M4.5 10.5L7.5 8.5L12 5L16.5 8.5L19.5 10.5M7.5 8.5V11.5M16.5 8.5V11.5M12 5V8" strokeWidth="1"/>
          </svg>
        </div>
      </div>

      {/* Additional animated drones */}
      <div 
        className="absolute top-1/2 left-[8%] animate-float hidden lg:block"
        style={{
          animationDelay: '3s',
          animationDuration: '8s',
          transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * -12}px)`
        }}
      >
        <div className="w-10 h-10 opacity-25 hover:opacity-45 transition-opacity duration-300">
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12.5L7.5 15.5M12 12.5L16.5 15.5M12 12.5V19M7.5 15.5L4.5 13.5M7.5 15.5V19L12 22M16.5 15.5L19.5 13.5M16.5 15.5V19L12 22M4.5 13.5L2 12L4.5 10.5M4.5 13.5L7.5 11.5M19.5 13.5L22 12L19.5 10.5M19.5 13.5L16.5 11.5M4.5 10.5L7.5 8.5L12 5L16.5 8.5L19.5 10.5M7.5 8.5V11.5M16.5 8.5V11.5M12 5V8" strokeWidth="1"/>
          </svg>
        </div>
      </div>
      
      {/* Enhanced glow effects with movement */}
      <div 
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-glow-gradient opacity-20 rounded-full animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
          animationDuration: '4s'
        }}
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-glow-gradient opacity-10 rounded-full animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * -3}px, ${mousePosition.y * 3}px)`,
          animationDuration: '6s',
          animationDelay: '2s'
        }}
      />
    </section>
  );
};

export default HeroSection;
