
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

  // Track mouse position for parallax effect with smoother interpolation
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

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {/* Enhanced floating particles with better visibility */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: `radial-gradient(circle, rgba(255, 111, 0, ${0.6 + Math.random() * 0.4}) 0%, rgba(255, 185, 77, ${0.3 + Math.random() * 0.3}) 70%, transparent 100%)`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${12 + Math.random() * 8}s`,
                filter: 'blur(0.5px)',
                boxShadow: '0 0 10px rgba(255, 111, 0, 0.4)'
              }}
            />
          ))}
        </div>

        {/* Glowing connection lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute bg-gradient-to-r from-transparent via-psyc-orange/20 to-transparent animate-glow-pulse"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                width: `${50 + Math.random() * 100}px`,
                height: '1px',
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Enhanced grid pattern with smooth parallax */}
        <div 
          className="absolute inset-0 opacity-15 transition-transform duration-700 ease-out"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 111, 0, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 111, 0, 0.15) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 8}px)`
          }}
        />

        {/* Enhanced animated drone paths */}
        <svg className="absolute inset-0 w-full h-full opacity-80" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 111, 0, 0)" />
              <stop offset="30%" stopColor="rgba(255, 111, 0, 0.4)" />
              <stop offset="70%" stopColor="rgba(255, 111, 0, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 111, 0, 0)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Enhanced curved flight paths */}
          <path
            d="M 100 200 Q 300 100 500 200 T 900 200"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDuration: '6s' }}
          />
          <path
            d="M 100 800 Q 300 700 500 800 T 900 800"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDuration: '8s', animationDelay: '3s' }}
          />
          <path
            d="M 500 100 Q 200 300 400 500 T 800 600"
            stroke="url(#pathGradient)"
            strokeWidth="1.5"
            fill="none"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDuration: '10s', animationDelay: '1s' }}
          />
          
          {/* Enhanced moving dots along paths */}
          <circle r="4" fill="#FF6F00" className="opacity-80" filter="url(#glow)">
            <animateMotion dur="12s" repeatCount="indefinite">
              <path d="M 100 200 Q 300 100 500 200 T 900 200" />
            </animateMotion>
          </circle>
          <circle r="3" fill="#FFB74D" className="opacity-70" filter="url(#glow)">
            <animateMotion dur="15s" repeatCount="indefinite">
              <path d="M 100 800 Q 300 700 500 800 T 900 800" />
            </animateMotion>
          </circle>
          <circle r="2" fill="#FFA726" className="opacity-60" filter="url(#glow)">
            <animateMotion dur="18s" repeatCount="indefinite">
              <path d="M 500 100 Q 200 300 400 500 T 800 600" />
            </animateMotion>
          </circle>
        </svg>

        {/* Enhanced glowing orbs with smooth movement */}
        <div 
          className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-radial from-psyc-orange/30 via-psyc-orange/15 to-transparent rounded-full blur-xl animate-glow-pulse transition-transform duration-1000 ease-out" 
          style={{ 
            animationDuration: '8s',
            transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`
          }} 
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-radial from-amber-400/25 via-amber-400/10 to-transparent rounded-full blur-xl animate-glow-pulse transition-transform duration-1000 ease-out" 
          style={{ 
            animationDuration: '10s', 
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * -3}px, ${mousePosition.y * 3}px)`
          }} 
        />
        <div 
          className="absolute top-1/2 right-1/6 w-24 h-24 bg-gradient-radial from-orange-300/20 via-orange-300/8 to-transparent rounded-full blur-lg animate-glow-pulse transition-transform duration-1000 ease-out" 
          style={{ 
            animationDuration: '12s', 
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * 4}px, ${mousePosition.y * -2}px)`
          }} 
        />
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
      
      {/* Enhanced floating drone silhouettes with smooth parallax */}
      <div 
        className="absolute top-1/3 right-[10%] animate-float-gentle hidden md:block transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 12}px, ${mousePosition.y * 12}px)`
        }}
      >
        <div className="w-20 h-20 opacity-40 hover:opacity-60 transition-all duration-500">
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-lg">
            <path d="M12 12.5L7.5 15.5M12 12.5L16.5 15.5M12 12.5V19M7.5 15.5L4.5 13.5M7.5 15.5V19L12 22M16.5 15.5L19.5 13.5M16.5 15.5V19L12 22M4.5 13.5L2 12L4.5 10.5M4.5 13.5L7.5 11.5M19.5 13.5L22 12L19.5 10.5M19.5 13.5L16.5 11.5M4.5 10.5L7.5 8.5L12 5L16.5 8.5L19.5 10.5M7.5 8.5V11.5M16.5 8.5V11.5M12 5V8" strokeWidth="1"/>
          </svg>
        </div>
      </div>
      
      <div 
        className="absolute bottom-1/4 left-[15%] animate-float-gentle animation-delay-2000 hidden md:block transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * -8}px, ${mousePosition.y * 8}px)`
        }}
      >
        <div className="w-16 h-16 opacity-35 hover:opacity-55 transition-all duration-500">
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-md">
            <path d="M12 12.5L7.5 15.5M12 12.5L16.5 15.5M12 12.5V19M7.5 15.5L4.5 13.5M7.5 15.5V19L12 22M16.5 15.5L19.5 13.5M16.5 15.5V19L12 22M4.5 13.5L2 12L4.5 10.5M4.5 13.5L7.5 11.5M19.5 13.5L22 12L19.5 10.5M19.5 13.5L16.5 11.5M4.5 10.5L7.5 8.5L12 5L16.5 8.5L19.5 10.5M7.5 8.5V11.5M16.5 8.5V11.5M12 5V8" strokeWidth="1"/>
          </svg>
        </div>
      </div>

      {/* Additional enhanced animated drones */}
      <div 
        className="absolute top-1/2 left-[8%] animate-float-gentle hidden lg:block transition-transform duration-1000 ease-out"
        style={{
          animationDelay: '6s',
          animationDuration: '12s',
          transform: `translate(${mousePosition.x * 6}px, ${mousePosition.y * -10}px)`
        }}
      >
        <div className="w-14 h-14 opacity-30 hover:opacity-50 transition-all duration-500">
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-sm">
            <path d="M12 12.5L7.5 15.5M12 12.5L16.5 15.5M12 12.5V19M7.5 15.5L4.5 13.5M7.5 15.5V19L12 22M16.5 15.5L19.5 13.5M16.5 15.5V19L12 22M4.5 13.5L2 12L4.5 10.5M4.5 13.5L7.5 11.5M19.5 13.5L22 12L19.5 10.5M19.5 13.5L16.5 11.5M4.5 10.5L7.5 8.5L12 5L16.5 8.5L19.5 10.5M7.5 8.5V11.5M16.5 8.5V11.5M12 5V8" strokeWidth="1"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
