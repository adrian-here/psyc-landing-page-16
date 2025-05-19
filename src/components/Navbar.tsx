
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/10 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-psyc-green flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-white font-bold text-xl">PSYC</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-white/90 hover:text-white transition-colors">
              About
            </a>
            <a href="#solutions" className="text-white/90 hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#features" className="text-white/90 hover:text-white transition-colors">
              Features
            </a>
            <a href="#demo" className="text-white/90 hover:text-white transition-colors">
              Drone Demo
            </a>
            <a href="#testimonials" className="text-white/90 hover:text-white transition-colors">
              Testimonials
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-psyc-orange hover:bg-psyc-orange/90 text-white">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-psyc-darkGreen/95 backdrop-blur-md">
          <div className="px-4 py-2 space-y-1">
            <a
              href="#about"
              className="block py-2 text-white hover:text-psyc-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#solutions"
              className="block py-2 text-white hover:text-psyc-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#features"
              className="block py-2 text-white hover:text-psyc-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#demo"
              className="block py-2 text-white hover:text-psyc-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Drone Demo
            </a>
            <a
              href="#testimonials"
              className="block py-2 text-white hover:text-psyc-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <div className="pt-2">
              <Button className="w-full bg-psyc-orange hover:bg-psyc-orange/90 text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
