
import React, { useRef, useEffect, useState } from 'react';

const DroneDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const stepsRef = useRef<HTMLDivElement>(null);
  const [playAnimation, setPlayAnimation] = useState(false);

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
        threshold: 0.3,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      if (!containerRef.current || !stepsRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const stepsHeight = stepsRef.current.getBoundingClientRect().height;
      
      const viewportHeight = window.innerHeight;
      const scrollPosition = (viewportHeight - top) / (height + viewportHeight);
      
      // Calculate which step should be active based on scroll position
      const newStep = Math.min(
        3,
        Math.max(0, Math.floor(scrollPosition * 4))
      );
      
      if (newStep !== currentStep) {
        setCurrentStep(newStep);
        setPlayAnimation(true);
        setTimeout(() => setPlayAnimation(false), 1500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, currentStep]);

  const steps = [
    {
      title: "Drone Takeoff & Target Identification",
      description: "The PSYC drone takes off autonomously and uses AI vision to identify and track the target animal.",
      dronePosition: { top: '75%', left: '25%' },
      dronePath: 'M25,100 Q75,20 150,40',
      elephantPosition: { top: '55%', left: '70%' },
      visualizationInfo: "AI scanning for elephant heat signatures and movement patterns",
      stats: { batteryLevel: '98%', altitude: '10m', distance: '120m' }
    },
    {
      title: "Approach & Target Lock",
      description: "The drone approaches the target at a safe distance and uses advanced targeting systems to identify the optimal injection site.",
      dronePosition: { top: '45%', left: '55%' },
      dronePath: 'M150,40 Q200,80 220,100',
      elephantPosition: { top: '55%', left: '70%' },
      visualizationInfo: "Target lock acquired. Calculating optimal injection site based on muscle mass and blood flow patterns.",
      stats: { batteryLevel: '92%', altitude: '15m', distance: '45m' }
    },
    {
      title: "Precision Dart Deployment",
      description: "With the target locked, the drone deploys a precision-guided tranquilizer dart with exact dosage calibration.",
      dronePosition: { top: '45%', left: '58%' },
      dronePath: 'M220,100 L230,105',
      dartPath: 'M230,105 L260,130',
      elephantPosition: { top: '55%', left: '70%' },
      visualizationInfo: "Dart deployed. Tranquilizer dosage: 12ml. Precision confidence: 96%",
      stats: { batteryLevel: '87%', altitude: '18m', distance: '35m' }
    },
    {
      title: "Health Monitoring & Data Collection",
      description: "After successful tranquilization, the drone monitors vital signs and transmits real-time health data to the team.",
      dronePosition: { top: '40%', left: '65%' },
      elephantPosition: { top: '60%', left: '70%', state: 'tranquilized' },
      visualizationInfo: "Monitoring vital signs. Heart rate: 42 BPM. Respiration: Normal. Temperature: 36.8°C",
      stats: { batteryLevel: '75%', altitude: '12m', distance: '30m' }
    }
  ];

  return (
    <section id="demo" ref={containerRef} className="py-20 md:py-32 relative bg-psyc-darkest overflow-hidden">
      {/* Tech background */}
      <div className="absolute inset-0 bg-tech-grid bg-tech-grid opacity-10"></div>
      
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-psyc-orange/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-psyc-green/5 blur-3xl"></div>
      
      <div className="section-container min-h-[800px]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Drone Demo</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Experience how the PSYC system works in the field with our interactive demonstration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Steps */}
          <div ref={stepsRef} className="space-y-6 md:space-y-8 glass-card p-6 md:p-8 rounded-xl">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 p-5 md:p-6 rounded-lg relative overflow-hidden ${
                  currentStep === index 
                    ? 'bg-psyc-green/30 border border-psyc-orange/30 shadow-lg shadow-psyc-orange/20 scale-[1.03]' 
                    : currentStep > index 
                      ? 'bg-black/30 border border-white/10 opacity-70' 
                      : 'bg-black/30 border border-white/5 opacity-50'
                }`}
              >
                <div className="flex items-center mb-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-all duration-500 ${
                    currentStep >= index ? 'bg-psyc-orange text-white' : 'bg-white/10 text-white/60'
                  }`}>
                    {currentStep > index ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <h3 className={`font-bold transition-colors duration-500 ${
                    currentStep === index ? 'text-white' : 'text-white/70'
                  }`}>
                    {step.title}
                  </h3>
                </div>
                
                <p className={`ml-11 transition-all duration-500 ${
                  currentStep === index ? 'text-white/90' : 'text-white/50'
                }`}>
                  {step.description}
                </p>
                
                {currentStep === index && (
                  <div className="ml-11 mt-4 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/10 animate-fade-in">
                    <div className="text-sm font-mono text-psyc-orange mb-2">SYSTEM OUTPUT:</div>
                    <p className="text-white/90 text-sm">{step.visualizationInfo}</p>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-white/80 font-mono">
                      <div className="flex flex-col">
                        <span className="text-psyc-orange">BATTERY</span>
                        <span>{step.stats.batteryLevel}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-psyc-orange">ALTITUDE</span>
                        <span>{step.stats.altitude}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-psyc-orange">DISTANCE</span>
                        <span>{step.stats.distance}</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Motion indicator */}
                {currentStep === index && playAnimation && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Visualization */}
          <div className="relative h-[500px] bg-black/40 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 shadow-xl">
            <div className="absolute inset-0 p-4">
              {/* Terrain background */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-psyc-darkGreen/40"></div>
              
              {/* Grid lines */}
              <div className="absolute inset-0" style={{ 
                backgroundImage: 'radial-gradient(circle, rgba(76, 140, 60, 0.2) 1px, transparent 1px)', 
                backgroundSize: '30px 30px' 
              }}></div>
              
              {/* Scanning effect */}
              {currentStep >= 0 && currentStep < 2 && (
                <div className="scan-line"></div>
              )}
              
              {/* Trees and foliage */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-psyc-darkGreen/40"></div>
              
              {/* Drone */}
              <div 
                className={`absolute w-12 h-12 transition-all duration-1000 ease-in-out ${playAnimation ? 'animate-pulse' : ''}`}
                style={{ 
                  top: steps[currentStep].dronePosition.top, 
                  left: steps[currentStep].dronePosition.left,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="relative">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#FF6F00" strokeWidth="1.5">
                    <path d="M12 12.5L7.5 15.5M12 12.5L16.5 15.5M12 12.5V19M7.5 15.5L4.5 13.5M7.5 15.5V19L12 22M16.5 15.5L19.5 13.5M16.5 15.5V19L12 22M4.5 13.5L2 12L4.5 10.5M4.5 13.5L7.5 11.5M19.5 13.5L22 12L19.5 10.5M19.5 13.5L16.5 11.5M4.5 10.5L7.5 8.5L12 5L16.5 8.5L19.5 10.5M7.5 8.5V11.5M16.5 8.5V11.5M12 5V8" />
                  </svg>
                  
                  {/* Scanning effect */}
                  <div className="absolute -inset-4 rounded-full bg-psyc-orange/20 animate-pulse-glow"></div>
                  
                  {/* Signal waves */}
                  <div className="absolute -inset-8 rounded-full border border-psyc-orange/30 opacity-0 animate-pulse" style={{ animationDelay: '0s' }}></div>
                  <div className="absolute -inset-12 rounded-full border border-psyc-orange/20 opacity-0 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
              
              {/* Drone path */}
              {currentStep >= 0 && currentStep < 3 && (
                <svg className="absolute inset-0 w-full h-full">
                  <path 
                    d={steps[currentStep].dronePath} 
                    stroke="#FF6F00" 
                    strokeWidth="2" 
                    strokeDasharray="5 3"
                    fill="none"
                    className={`${playAnimation ? 'drone-path' : ''}`}
                    opacity="0.7"
                  />
                </svg>
              )}
              
              {/* Dart trajectory */}
              {currentStep === 2 && (
                <svg className="absolute inset-0 w-full h-full">
                  <path 
                    d={steps[currentStep].dartPath} 
                    stroke="#FFB74D" 
                    strokeWidth="2" 
                    strokeDasharray="4 2"
                    fill="none"
                    className={playAnimation ? 'drone-path' : ''}
                    opacity="0.9"
                  />
                  <circle cx="260" cy="130" r="4" fill="#FFB74D" className="animate-pulse-glow" />
                </svg>
              )}
              
              {/* Elephant */}
              <div 
                className={`absolute transition-all duration-1000 ease-in-out`}
                style={{ 
                  top: steps[currentStep].elephantPosition.top, 
                  left: steps[currentStep].elephantPosition.left,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className={`w-24 h-24 relative ${currentStep === 3 ? 'opacity-70' : 'opacity-100'}`}>
                  <svg viewBox="0 0 100 100" width="100" height="100">
                    <path d="M85,50c0,19.33-15.67,35-35,35s-35-15.67-35-35s15.67-35,35-35S85,30.67,85,50z" fill="#8B5A2B" />
                    <ellipse cx="50" cy="60" rx="15" ry="10" fill="#654321" opacity="0.5" />
                    <path d="M30,40c0,0,5-15,20-15s20,15,20,15" fill="none" stroke="#654321" strokeWidth="2" />
                    <circle cx="40" cy="40" r="3" fill="#000" />
                    <circle cx="60" cy="40" r="3" fill="#000" />
                  </svg>
                  
                  {/* Targeting overlay */}
                  {currentStep >= 1 && currentStep < 3 && (
                    <div className="absolute inset-0 pointer-events-none">
                      <svg viewBox="0 0 100 100" width="100" height="100">
                        <circle cx="50" cy="50" r="40" stroke="#FF6F00" strokeWidth="1" fill="none" strokeDasharray="5 3" className="animate-rotate-slow" />
                        <circle cx="50" cy="50" r="30" stroke="#FF6F00" strokeWidth="1" fill="none" strokeDasharray="3 2" className="animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
                        <circle cx="50" cy="50" r="20" stroke="#FF6F00" strokeWidth="1" fill="none" strokeDasharray="2 1" className="animate-rotate-slow" />
                        <circle cx="55" cy="45" r="5" stroke="#FF6F00" strokeWidth="2" fill="none" className="animate-pulse-glow" />
                        <path d="M55,40 L55,35 M60,45 L65,45" stroke="#FF6F00" strokeWidth="1" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Dart impact */}
                  {currentStep === 2 && playAnimation && (
                    <div className="absolute top-1/3 right-1/3 w-8 h-8">
                      <svg viewBox="0 0 24 24" width="32" height="32">
                        <circle cx="12" cy="12" r="12" fill="#FF6F00" opacity="0.7" className="animate-pulse" />
                        <circle cx="12" cy="12" r="6" fill="#FFB74D" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Successful tranquilization */}
                  {currentStep === 3 && (
                    <div className="absolute inset-0 pointer-events-none">
                      <svg viewBox="0 0 100 100" width="100" height="100">
                        <circle cx="50" cy="50" r="40" stroke="#4C8C3C" strokeWidth="1" fill="none" />
                        <path d="M35,50 L45,60 L65,40" stroke="#4C8C3C" strokeWidth="3" fill="none" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Health monitoring */}
                  {currentStep === 3 && (
                    <div className="absolute -top-12 -right-24 bg-black/70 backdrop-blur-md rounded-lg p-3 border border-white/10 text-xs font-mono text-green-400 animate-fade-in">
                      <div>VITALS:</div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
                        <div>♥ 42 BPM</div>
                        <div>O₂ 98%</div>
                        <div>TEMP 36.8°C</div>
                        <div>STATUS OK</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Interface overlays */}
              <div className="absolute top-2 left-2 right-2 flex justify-between text-xs font-mono text-psyc-orange border-b border-psyc-orange/20 pb-1">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-psyc-orange animate-pulse mr-1"></div> 
                  PSYC DRONE #D42-7
                </div>
                <div className="animate-pulse">● LIVE FEED</div>
              </div>
              
              {/* Distance marker */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md text-xs text-white font-mono border border-white/10">
                DISTANCE: {steps[currentStep].stats.distance}
              </div>
              
              {/* Coordinates */}
              <div className="absolute bottom-3 left-3 bg-black/60 px-2 py-1 rounded text-xs text-white/70 font-mono">
                LAT: 2°31'12"S LON: 34°49'55"E
              </div>
              
              {/* Status indicators */}
              <div className="absolute top-2 right-3 flex flex-col items-end space-y-1">
                <div className="px-2 py-1 bg-black/60 rounded text-xs font-mono flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                  <span className="text-white/80">SYSTEM OPTIMAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DroneDemo;
