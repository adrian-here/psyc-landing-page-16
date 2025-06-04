
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

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
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/deda9b5b-0e4e-44a9-9c37-904e85806e7c.png" 
                alt="PSYC Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-white/90 hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('problem-solution')} className="text-white/90 hover:text-white transition-colors">
              Solutions
            </button>
            <button onClick={() => scrollToSection('features')} className="text-white/90 hover:text-white transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('demo')} className="text-white/90 hover:text-white transition-colors">
              Drone Demo
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-white/90 hover:text-white transition-colors">
              Testimonials
            </button>
            <Link to="/blogs" className="text-white/90 hover:text-white transition-colors">
              Blogs
            </Link>
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
            <button
              onClick={() => scrollToSection('about')}
              className="block py-2 text-white hover:text-psyc-gold w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('problem-solution')}
              className="block py-2 text-white hover:text-psyc-gold w-full text-left"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block py-2 text-white hover:text-psyc-gold w-full text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="block py-2 text-white hover:text-psyc-gold w-full text-left"
            >
              Drone Demo
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block py-2 text-white hover:text-psyc-gold w-full text-left"
            >
              Testimonials
            </button>
            <Link
              to="/blogs"
              className="block py-2 text-white hover:text-psyc-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>
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
