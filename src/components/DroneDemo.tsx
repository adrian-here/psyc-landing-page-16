
import React, { useRef, useEffect, useState } from 'react';
import { RotateCcw, Pause, Play } from 'lucide-react';

const DroneDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isAutoMode, setIsAutoMode] = useState(true);
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Monitor when the section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsVisible(isIntersecting);
        
        if (isIntersecting && !animationStarted) {
          setAnimationStarted(true);
          setCurrentStep(0);
        }
      },
      {
        threshold: 0.2,
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
  }, [animationStarted]);

  // Handle the time-based animation
  useEffect(() => {
    if (!isVisible || !animationStarted || isPaused || !isAutoMode) return;

    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
    }

    animationTimerRef.current = setTimeout(() => {
      if (currentStep < 4) {
        setCurrentStep(prev => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentStep(0);
        }, 2000);
      }
    }, 4500);
    
    return () => {
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }
    };
  }, [isVisible, animationStarted, currentStep, isPaused, isAutoMode]);

  // Handle step click
  const handleStepClick = (stepIndex: number) => {
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
    }
    
    setCurrentStep(stepIndex);
    setIsAutoMode(false);
  };

  // Reset animation
  const handleResetClick = () => {
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
    }
    setCurrentStep(0);
    setIsPaused(false);
    setIsAutoMode(true);
    setAnimationStarted(true);
  };

  // Toggle pause/play
  const handlePlayPauseClick = () => {
    setIsPaused(prev => !prev);
    if (isPaused) {
      setIsAutoMode(true);
    }
  };

  const steps = [
    {
      title: "Reconnaissance Drone Deployment",
      description: "The primary reconnaissance drone takes off and begins scanning the area for elephant targets using thermal imaging and AI detection.",
      scoutDronePosition: { top: '70%', left: '20%' },
      scoutDronePath: 'M20,70 Q40,50 60,35',
      tranqDronePosition: { top: '85%', left: '10%' },
      elephantPosition: { top: '45%', left: '75%' },
      visualizationInfo: "Scout drone scanning for elephant heat signatures. Thermal imaging active. AI pattern recognition engaged.",
      stats: { scoutBattery: '98%', tranqBattery: '100%', altitude: '15m', targets: '0' }
    },
    {
      title: "Target Identification & Analysis",
      description: "The scout drone identifies the target elephant and begins detailed analysis including size estimation, health assessment, and behavioral patterns.",
      scoutDronePosition: { top: '35%', left: '55%' },
      scoutDronePath: 'M60,35 Q70,40 75,45',
      tranqDronePosition: { top: '85%', left: '10%' },
      elephantPosition: { top: '45%', left: '75%' },
      visualizationInfo: "Target identified: Adult elephant. Weight: ~4.2 tons. Health: Good. Stress level: Moderate. Calculating optimal approach vector.",
      stats: { scoutBattery: '94%', tranqBattery: '100%', altitude: '18m', targets: '1' }
    },
    {
      title: "Data Transfer & Tranquilizer Drone Approach",
      description: "Scout drone transmits all collected data to the tranquilizer drone, which begins its precise approach based on the reconnaissance intelligence.",
      scoutDronePosition: { top: '30%', left: '50%' },
      tranqDronePosition: { top: '60%', left: '40%' },
      tranqDronePath: 'M10,85 Q30,75 40,60',
      elephantPosition: { top: '45%', left: '75%' },
      visualizationInfo: "Data link established. Tranquilizer drone receiving target parameters. Dosage calculated: 15ml. Approach vector optimized.",
      stats: { scoutBattery: '91%', tranqBattery: '96%', altitude: '20m', targets: '1' }
    },
    {
      title: "Precision Tranquilization",
      description: "The tranquilizer drone deploys the precisely calibrated dart while the scout drone maintains overwatch and monitoring.",
      scoutDronePosition: { top: '30%', left: '50%' },
      tranqDronePosition: { top: '40%', left: '60%' },
      dartPath: 'M60,40 L75,45',
      elephantPosition: { top: '45%', left: '75%' },
      visualizationInfo: "Dart deployed successfully. Impact confirmed. Monitoring elephant vitals. Tranquilizer taking effect.",
      stats: { scoutBattery: '88%', tranqBattery: '92%', altitude: '22m', targets: '1' }
    },
    {
      title: "Dual Monitoring & Health Assessment",
      description: "Both drones work in tandem to monitor the elephant's vital signs and ensure safe tranquilization while transmitting data to the ground team.",
      scoutDronePosition: { top: '25%', left: '60%' },
      tranqDronePosition: { top: '35%', left: '65%' },
      elephantPosition: { top: '50%', left: '75%', state: 'tranquilized' },
      visualizationInfo: "Elephant safely tranquilized. Dual monitoring active. Heart rate: 38 BPM. Respiration: Stable. Ground team notified.",
      stats: { scoutBattery: '82%', tranqBattery: '87%', altitude: '15m', targets: '1' }
    }
  ];

  return (
    <section id="demo" ref={containerRef} className="py-16 md:py-32 relative bg-[#121420] overflow-hidden">
      {/* Enhanced tech background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDExMSwgMCwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-30"></div>
      
      {/* Enhanced glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-psyc-orange/8 blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-amber-500/6 blur-3xl animate-glow-pulse animation-delay-2000"></div>
      
      <div className="section-container min-h-[700px] md:min-h-[800px]">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gradient">Dual-Drone System Demo</h2>
          <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto px-4">
            Experience our advanced two-drone system where reconnaissance and tranquilization drones work in perfect coordination
          </p>
          
          {/* Enhanced progress bar */}
          <div className="max-w-md mx-auto mt-6 md:mt-8 bg-black/30 h-2 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
            <div 
              className="h-full bg-gradient-to-r from-psyc-orange to-amber-400 transition-all duration-1000 ease-out"
              style={{ width: `${(currentStep + 1) * 20}%` }}
            ></div>
          </div>
          
          {/* Enhanced demo controls */}
          <div className="flex items-center justify-center space-x-3 md:space-x-4 mt-4 px-4">
            <button 
              onClick={handleResetClick} 
              className="flex items-center space-x-1 text-white/70 hover:text-psyc-orange transition-all duration-300 bg-black/30 px-3 py-2 rounded-md hover:bg-black/50 backdrop-blur-sm border border-white/10 hover:border-psyc-orange/30"
              aria-label="Restart demonstration"
            >
              <RotateCcw size={16} />
              <span className="hidden sm:inline">Restart</span>
            </button>
            
            <button 
              onClick={handlePlayPauseClick} 
              className="flex items-center space-x-1 text-white/70 hover:text-psyc-orange transition-all duration-300 bg-black/30 px-3 py-2 rounded-md hover:bg-black/50 backdrop-blur-sm border border-white/10 hover:border-psyc-orange/30"
              aria-label={isPaused ? "Resume demonstration" : "Pause demonstration"}
            >
              {isPaused ? (
                <>
                  <Play size={16} />
                  <span className="hidden sm:inline">Resume</span>
                </>
              ) : (
                <>
                  <Pause size={16} />
                  <span className="hidden sm:inline">Pause</span>
                </>
              )}
            </button>
            
            <div className="text-xs text-white/50 font-mono hidden md:block">
              {isAutoMode ? 'Auto Mode' : 'Manual Mode'}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Enhanced Steps */}
          <div className="space-y-4 md:space-y-6 glass-card p-4 md:p-8 rounded-xl">
            {steps.map((step, index) => (
              <div 
                key={index}
                onClick={() => handleStepClick(index)}
                className={`transition-all duration-700 p-4 md:p-6 rounded-lg relative overflow-hidden cursor-pointer ${
                  currentStep === index 
                    ? 'bg-black/50 border border-psyc-orange/50 shadow-lg shadow-psyc-orange/20 scale-[1.02]' 
                    : currentStep > index 
                      ? 'bg-black/30 border border-white/10 opacity-70 hover:opacity-90 hover:border-psyc-orange/30' 
                      : 'bg-black/30 border border-white/5 opacity-50 hover:opacity-70 hover:border-white/20'
                }`}
              >
                <div className="flex items-center mb-3">
                  <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center mr-3 transition-all duration-500 text-sm ${
                    currentStep >= index ? 'bg-psyc-orange text-white' : 'bg-white/10 text-white/60'
                  }`}>
                    {currentStep > index ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <h3 className={`font-bold text-sm md:text-base transition-colors duration-500 ${
                    currentStep === index ? 'text-white' : 'text-white/70'
                  }`}>
                    {step.title}
                  </h3>
                </div>
                
                <p className={`ml-9 md:ml-11 text-sm md:text-base transition-all duration-500 ${
                  currentStep === index ? 'text-white/90' : 'text-white/50'
                }`}>
                  {step.description}
                </p>
                
                {currentStep === index && (
                  <div className="ml-9 md:ml-11 mt-4 bg-black/40 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-white/10 animate-fade-in cyber-border">
                    <div className="text-xs md:text-sm font-mono text-psyc-orange mb-2">SYSTEM OUTPUT:</div>
                    <p className="text-white/90 text-xs md:text-sm">{step.visualizationInfo}</p>
                    <div className="mt-3 grid grid-cols-4 gap-1 md:gap-2 text-xs text-white/80 font-mono">
                      <div className="flex flex-col">
                        <span className="text-green-400">SCOUT</span>
                        <span>{step.stats.scoutBattery}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-blue-400">TRANQ</span>
                        <span>{step.stats.tranqBattery}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-psyc-orange">ALT</span>
                        <span>{step.stats.altitude}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-amber-400">TARGETS</span>
                        <span>{step.stats.targets}</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {currentStep === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Enhanced Visualization with better mobile responsiveness */}
          <div className="relative h-[400px] md:h-[500px] bg-black/40 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 shadow-xl cyber-border">
            <div className="absolute inset-0 p-2 md:p-4">
              {/* Enhanced terrain background */}
              <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-green-800/40"></div>
              
              {/* Responsive grid lines */}
              <div className="absolute inset-0" style={{ 
                backgroundImage: 'radial-gradient(circle, rgba(255, 111, 0, 0.15) 1px, transparent 1px)', 
                backgroundSize: window.innerWidth < 768 ? '20px 20px' : '30px 30px'
              }}></div>
              
              {/* Enhanced scanning effect */}
              {!isPaused && currentStep >= 0 && currentStep < 2 && (
                <div className="scan-line"></div>
              )}
              
              {/* Responsive trees and foliage */}
              <div className="absolute bottom-0 left-0 w-full h-16 md:h-20 bg-gradient-to-t from-green-900/60 to-transparent"></div>
              
              {/* Responsive Acacia trees */}
              <div className="absolute bottom-3 md:bottom-5 left-[20%] w-8 md:w-12 h-12 md:h-16">
                <svg viewBox="0 0 50 60" className="w-full h-full">
                  <path d="M25,50 L25,20" stroke="#8B4513" strokeWidth="2" fill="none"/>
                  <ellipse cx="25" cy="15" rx="15" ry="8" fill="#228B22" opacity="0.7"/>
                </svg>
              </div>
              <div className="absolute bottom-3 md:bottom-5 right-[15%] w-6 md:w-10 h-10 md:h-14">
                <svg viewBox="0 0 50 60" className="w-full h-full">
                  <path d="M25,50 L25,20" stroke="#8B4513" strokeWidth="2" fill="none"/>
                  <ellipse cx="25" cy="15" rx="12" ry="6" fill="#228B22" opacity="0.7"/>
                </svg>
              </div>
              
              {/* Enhanced Scout Drone (Green) with better positioning */}
              <div 
                className={`absolute w-6 md:w-8 h-6 md:h-8 transition-all duration-1500 ease-out ${currentStep <= 1 && !isPaused ? 'animate-pulse' : ''}`}
                style={{ 
                  top: steps[currentStep].scoutDronePosition.top, 
                  left: steps[currentStep].scoutDronePosition.left,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="relative">
                  <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#22C55E" strokeWidth="1.5">
                    <path d="M12 12.5L7.5 15.5M12 12.5L16.5 15.5M12 12.5V19M7.5 15.5L4.5 13.5M7.5 15.5V19L12 22M16.5 15.5L19.5 13.5M16.5 15.5V19L12 22" />
                  </svg>
                  
                  {currentStep <= 1 && (
                    <div className={`absolute -inset-3 md:-inset-4 rounded-full bg-green-500/20 ${!isPaused ? 'animate-pulse-glow' : ''}`}></div>
                  )}
                  
                  {currentStep === 2 && (
                    <div className="absolute -top-6 md:-top-8 -right-6 md:-right-8 text-xs text-green-400 font-mono animate-pulse">
                      DATA TX
                    </div>
                  )}
                </div>
              </div>
              
              {/* Enhanced Tranquilizer Drone (Blue) with better positioning */}
              <div 
                className={`absolute w-8 md:w-10 h-8 md:h-10 transition-all duration-1500 ease-out ${currentStep >= 2 && currentStep <= 3 && !isPaused ? 'animate-pulse' : ''}`}
                style={{ 
                  top: steps[currentStep].tranqDronePosition.top, 
                  left: steps[currentStep].tranqDronePosition.left,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="relative">
                  <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#3B82F6" strokeWidth="1.5">
                    <path d="M12 12.5L7.5 15.5M12 12.5L16.5 15.5M12 12.5V19M7.5 15.5L4.5 13.5M7.5 15.5V19L12 22M16.5 15.5L19.5 13.5M16.5 15.5V19L12 22" />
                    <circle cx="12" cy="8" r="3" stroke="#3B82F6" strokeWidth="1"/>
                  </svg>
                  
                  {currentStep >= 2 && (
                    <div className={`absolute -inset-4 md:-inset-6 rounded-full bg-blue-500/20 ${!isPaused ? 'animate-pulse-glow' : ''}`}></div>
                  )}
                </div>
              </div>
              
              {/* Enhanced scout drone path with better alignment */}
              {currentStep >= 0 && currentStep < 3 && steps[currentStep].scoutDronePath && (
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path 
                    d={steps[currentStep].scoutDronePath} 
                    stroke="#22C55E" 
                    strokeWidth="1.5" 
                    strokeDasharray="6 3"
                    fill="none"
                    className={`drone-path-smooth ${!isPaused ? '' : 'animation-paused'}`}
                    opacity="0.8"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              )}
              
              {/* Enhanced tranquilizer drone path with better alignment */}
              {currentStep >= 2 && currentStep < 4 && steps[currentStep].tranqDronePath && (
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path 
                    d={steps[currentStep].tranqDronePath} 
                    stroke="#3B82F6" 
                    strokeWidth="1.5" 
                    strokeDasharray="4 2"
                    fill="none"
                    className={`drone-path-smooth ${!isPaused ? '' : 'animation-paused'}`}
                    opacity="0.9"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              )}
              
              {/* Enhanced dart trajectory with perfect alignment */}
              {currentStep === 3 && (
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path 
                    d={steps[currentStep].dartPath} 
                    stroke="#FFB74D" 
                    strokeWidth="2" 
                    strokeDasharray="5 2"
                    fill="none"
                    className={`dart-trajectory ${!isPaused ? '' : 'animation-paused'}`}
                    opacity="1"
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle cx="75" cy="45" r="2" fill="#FFB74D" className={!isPaused ? 'animate-pulse-glow' : ''} />
                </svg>
              )}
              
              {/* Enhanced Elephant with better mobile positioning */}
              <div 
                className="absolute transition-all duration-1500 ease-out"
                style={{ 
                  top: steps[currentStep].elephantPosition.top, 
                  left: steps[currentStep].elephantPosition.left,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className={`w-24 md:w-32 h-18 md:h-24 relative ${currentStep === 4 ? 'opacity-70' : 'opacity-100'}`}>
                  {/* Responsive Elephant SVG */}
                  <svg viewBox="0 0 120 90" width="100%" height="100%">
                    <ellipse cx="60" cy="50" rx="30" ry="20" fill="#8B7355"/>
                    <ellipse cx="45" cy="35" rx="18" ry="15" fill="#8B7355"/>
                    <path d="M35,40 Q25,50 28,65 Q30,70 35,68 Q32,55 40,45" fill="#8B7355"/>
                    <ellipse cx="35" cy="30" rx="12" ry="18" fill="#A0926B"/>
                    <ellipse cx="55" cy="30" rx="10" ry="15" fill="#A0926B"/>
                    <circle cx="40" cy="30" r="2" fill="#000"/>
                    <circle cx="50" cy="30" r="2" fill="#000"/>
                    <rect x="40" y="65" width="6" height="15" fill="#8B7355"/>
                    <rect x="50" y="65" width="6" height="15" fill="#8B7355"/>
                    <rect x="65" y="65" width="6" height="15" fill="#8B7355"/>
                    <rect x="75" y="65" width="6" height="15" fill="#8B7355"/>
                    <path d="M85,50 Q95,52 90,60" stroke="#8B7355" strokeWidth="3" fill="none"/>
                  </svg>
                  
                  {/* Enhanced targeting overlay */}
                  {currentStep >= 1 && currentStep < 3 && (
                    <div className="absolute inset-0 pointer-events-none">
                      <svg viewBox="0 0 120 90" width="100%" height="100%">
                        <circle cx="60" cy="45" r="35" stroke="#FF6F00" strokeWidth="1" fill="none" strokeDasharray="5 3" className={!isPaused ? 'animate-rotate-slow' : ''} />
                        <circle cx="60" cy="45" r="25" stroke="#22C55E" strokeWidth="1" fill="none" strokeDasharray="3 2" className={!isPaused ? 'animate-rotate-slow' : ''} style={{ animationDirection: 'reverse' }} />
                        <circle cx="55" cy="40" r="8" stroke="#FF6F00" strokeWidth="2" fill="none" className={!isPaused ? 'animate-pulse-glow' : ''} />
                        <path d="M55,32 L55,27 M63,40 L68,40" stroke="#FF6F00" strokeWidth="1" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Enhanced weight estimation overlay */}
                  {currentStep === 1 && (
                    <div className="absolute -top-10 md:-top-12 -left-12 md:-left-16 bg-black/70 backdrop-blur-md rounded-lg p-2 border border-white/10 text-xs font-mono text-green-400 animate-fade-in">
                      <div>ANALYSIS:</div>
                      <div>Weight: 4.2T</div>
                      <div className="hidden md:block">Age: Adult</div>
                      <div className="hidden md:block">Health: Good</div>
                    </div>
                  )}
                  
                  {/* Enhanced dart impact */}
                  {currentStep === 3 && (
                    <div className="absolute top-1/3 right-1/4 w-4 md:w-6 h-4 md:h-6">
                      <svg viewBox="0 0 24 24" width="100%" height="100%">
                        <circle cx="12" cy="12" r="8" fill="#FF6F00" opacity="0.7" className={!isPaused ? 'animate-pulse' : ''} />
                        <circle cx="12" cy="12" r="4" fill="#FFB74D" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Enhanced successful tranquilization */}
                  {currentStep === 4 && (
                    <div className="absolute inset-0 pointer-events-none">
                      <svg viewBox="0 0 120 90" width="100%" height="100%">
                        <circle cx="60" cy="45" r="35" stroke="#22C55E" strokeWidth="1" fill="none" />
                        <path d="M45,45 L55,55 L75,35" stroke="#22C55E" strokeWidth="3" fill="none" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Enhanced dual health monitoring */}
                  {currentStep === 4 && (
                    <div className="absolute -top-12 md:-top-16 -right-16 md:-right-24 bg-black/70 backdrop-blur-md rounded-lg p-2 md:p-3 border border-white/10 text-xs font-mono text-green-400 animate-fade-in cyber-border">
                      <div className="text-psyc-orange">MONITOR:</div>
                      <div className="grid grid-cols-2 gap-x-2 md:gap-x-4 gap-y-1 mt-1">
                        <div>♥ 38</div>
                        <div>O₂ 96%</div>
                        <div className="hidden md:block">TEMP 36.2°C</div>
                        <div>STABLE</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Enhanced data link visualization */}
              {currentStep === 2 && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line 
                    x1="50" y1="30" 
                    x2="40" y2="60" 
                    stroke="#00D4FF" 
                    strokeWidth="1.5" 
                    strokeDasharray="3 3"
                    className={!isPaused ? 'animate-pulse' : ''}
                    opacity="0.9"
                    vectorEffect="non-scaling-stroke"
                  />
                  <text x="45" y="45" fill="#00D4FF" fontSize="6" textAnchor="middle" className="font-mono">
                    LINK
                  </text>
                </svg>
              )}
              
              {/* Enhanced interface overlays */}
              <div className="absolute top-1 md:top-2 left-1 md:left-2 right-1 md:right-2 flex justify-between text-xs font-mono text-psyc-orange border-b border-psyc-orange/20 pb-1">
                <div className="flex items-center space-x-2 md:space-x-4">
                  <div className="flex items-center">
                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 ${!isPaused ? 'animate-pulse' : ''} mr-1`}></div> 
                    <span className="hidden sm:inline">SCOUT-D1</span>
                    <span className="sm:hidden">S-D1</span>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 ${!isPaused ? 'animate-pulse' : ''} mr-1`}></div> 
                    <span className="hidden sm:inline">TRANQ-D2</span>
                    <span className="sm:hidden">T-D2</span>
                  </div>
                </div>
                <div className={`text-xs ${!isPaused ? 'animate-pulse' : ''}`}>
                  {isPaused ? '⏸ PAUSED' : '● LIVE'}
                </div>
              </div>
              
              {/* Enhanced coordinates */}
              <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 bg-black/60 px-1 md:px-2 py-1 rounded text-xs text-white/70 font-mono">
                <span className="hidden md:inline">SERENGETI: 2°31'12"S 34°49'55"E</span>
                <span className="md:hidden">SERENGETI</span>
              </div>
              
              {/* Enhanced mission status */}
              <div className="absolute top-1 md:top-2 right-2 md:right-3 flex flex-col items-end space-y-1">
                <div className="px-1 md:px-2 py-1 bg-black/60 rounded text-xs font-mono flex items-center">
                  <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${isPaused ? 'bg-yellow-500' : 'bg-green-500'} mr-1 ${!isPaused ? 'animate-pulse' : ''}`}></span>
                  <span className="text-white/80 text-xs">
                    {isPaused ? "PAUSED" : 
                     currentStep === 4 ? "SUCCESS" : 
                     "ACTIVE"}
                  </span>
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
