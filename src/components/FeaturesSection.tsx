
import React, { useRef, useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
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

  const conservationistFeatures = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
      title: "Autonomous Drone Navigation",
      description: "Self-guided drones with AI-powered decision-making ensure safe, precise operations.",
      expandedContent: "Our autonomous drones use advanced AI algorithms to navigate complex terrains, identify targets, and adapt to changing conditions in real-time. The system optimizes flight paths, maintains stable positioning even in winds up to 25 mph, and incorporates multiple safety protocols to ensure foolproof operation in wildlife habitats."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "Real-Time Monitoring",
      description: "Live video feed, health monitoring, and darting data instantly available during operations.",
      expandedContent: "The real-time monitoring system provides operators with 4K video streaming, thermal imaging for night operations, and vital sign tracking once the tranquilizer is administered. Data is synchronized across all field devices and can be accessed remotely by veterinary experts to provide guidance during sensitive operations."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
      title: "Precision Darting",
      description: "AI-optimized targeting for highly accurate tranquilization with minimal harm.",
      expandedContent: "Our precision darting technology combines computer vision, 3D modeling, and ballistic calculations to achieve 95%+ first-shot accuracy. The system automatically identifies optimal injection sites on the animal, adjusts for wind and distance, and delivers the exact dosage required based on real-time weight estimation. This dramatically reduces animal stress and risk of injury compared to traditional methods."
    }
  ];

  const technologyFeatures = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: "Safety Protocols",
      description: "Built-in safety features protect both animals and operators during drone operations.",
      expandedContent: "Our comprehensive safety system includes redundant communication channels, automated emergency protocols, and fail-safe mechanisms that ensure drone recovery even in the event of power or connection loss. The system incorporates geofencing technology to prevent intrusion into sensitive areas and has built-in collision avoidance to prevent accidental contact with animals or terrain."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="10" r="3"></circle>
          <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"></path>
        </svg>
      ),
      title: "GPS & Radio Collars",
      description: "Real-time GPS tracking and radio collar integration for post-operation animal movement monitoring.",
      expandedContent: "Our system seamlessly integrates with existing GPS and radio collar technologies, allowing continuous tracking of tranquilized animals during recovery and afterward for research purposes. The platform centralizes data from multiple tracking sources and provides customizable alerts for movement patterns that might indicate distress or other issues requiring intervention."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.93 19.07A10 10 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10c-2.76 0-5.26-1.12-7.07-2.93"></path>
          <path d="M7.24 11h9.52"></path>
          <path d="M11.07 6.93C14.47 3.53 12 4 12 4s.47-2.47-2.93.93"></path>
          <path d="M12.93 17.07c-3.4 3.4-.93 2.93-.93 2.93s-.47 2.47 2.93-.93"></path>
        </svg>
      ),
      title: "Health Monitoring & Weight Estimation",
      description: "Advanced sensors to monitor vital signs and provide detailed health analytics.",
      expandedContent: "Using a combination of thermal imaging, computer vision, and proprietary algorithms, our system can estimate an elephant's weight within 5% accuracy, calculate appropriate tranquilizer dosages, and monitor vital signs throughout the operation. The health data collected creates a valuable database for wildlife researchers and veterinarians, contributing to broader conservation efforts and animal welfare initiatives."
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-psyc-green/90 to-psyc-darkGreen/95 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-radial from-psyc-orange/10 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-radial from-psyc-orange/10 to-transparent opacity-30"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Cutting-Edge Features</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Our technology combines precision engineering, artificial intelligence, and wildlife expertise
            to create the most effective and humane wildlife control system available.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-psyc-orange">For Conservationists, Rangers, and Wildlife Officials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conservationistFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                expandedContent={feature.expandedContent}
                className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-psyc-orange">For Technology Enthusiasts & Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                expandedContent={feature.expandedContent}
                className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${(index + 3) * 200}ms`, animationFillMode: 'forwards' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
