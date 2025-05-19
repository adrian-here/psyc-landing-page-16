
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  avatarIndex: number;
}

const TestimonialSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "PSYC's drones have revolutionized the way we handle tranquilization. We can now ensure animal safety while minimizing human risk.",
      author: "Dr. Sarah Lee",
      title: "Wildlife Veterinarian",
      avatarIndex: 1
    },
    {
      id: 2,
      quote: "The precision of PSYC's targeting system is remarkable. We've seen a 95% reduction in stress responses from elephants during capture operations.",
      author: "James Thompson",
      title: "Conservation Program Director",
      avatarIndex: 2
    },
    {
      id: 3,
      quote: "After implementing PSYC's drone system, our team has experienced zero injuries during wildlife control operations. It's a complete game-changer.",
      author: "Elena Rodriguez",
      title: "Park Ranger Team Lead",
      avatarIndex: 3
    },
    {
      id: 4,
      quote: "The real-time health monitoring has allowed us to immediately respond to any issues during tranquilization, dramatically improving animal welfare outcomes.",
      author: "Dr. Michael Chen",
      title: "Wildlife Research Coordinator",
      avatarIndex: 4
    },
    {
      id: 5,
      quote: "Not only is the system safer, but it's also far more efficient. What used to take a full day now can be accomplished in under an hour.",
      author: "Sophia Ndlovu",
      title: "Conservation Technology Specialist",
      avatarIndex: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isPaused, isVisible]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <section 
      id="testimonials"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-psyc-darkGreen/95 to-psyc-darkGreen text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-psyc-orange/5 to-transparent opacity-50"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What Experts Say</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Hear from wildlife professionals who have experienced the benefits of PSYC's technology
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial cards */}
          <div className="relative h-[300px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute w-full transition-all duration-500 ease-in-out bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10",
                  activeIndex === index
                    ? "opacity-100 translate-x-0 scale-100 z-20"
                    : index === (activeIndex + 1) % testimonials.length
                    ? "opacity-0 translate-x-[50px] scale-95 z-10"
                    : index === (activeIndex - 1 + testimonials.length) % testimonials.length
                    ? "opacity-0 -translate-x-[50px] scale-95 z-10"
                    : "opacity-0 scale-90 z-0"
                )}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div 
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-psyc-green/30 flex items-center justify-center border-2 border-psyc-orange/50 shadow-lg shadow-psyc-orange/20 overflow-hidden ${
                        activeIndex === index ? 'animate-pulse-glow' : ''
                      }`}
                    >
                      <div className="text-2xl font-bold text-white">{testimonial.author.charAt(0)}</div>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-lg md:text-xl italic mb-4 text-white/90">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div>
                      <p className="font-bold text-psyc-orange">{testimonial.author}</p>
                      <p className="text-sm text-white/70">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-psyc-orange w-6'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Avatar circles - decorative */}
        <div className="hidden lg:block">
          <div className="absolute top-[30%] left-[15%] w-12 h-12 rounded-full bg-psyc-green/20 backdrop-blur-sm border border-psyc-green/30 opacity-60 animate-float"></div>
          <div className="absolute top-[60%] left-[10%] w-8 h-8 rounded-full bg-psyc-orange/20 backdrop-blur-sm border border-psyc-orange/30 opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-[20%] right-[10%] w-10 h-10 rounded-full bg-psyc-gold/20 backdrop-blur-sm border border-psyc-gold/30 opacity-50 animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-[70%] right-[15%] w-14 h-14 rounded-full bg-psyc-green/20 backdrop-blur-sm border border-psyc-green/30 opacity-60 animate-float" style={{ animationDelay: '0.7s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
