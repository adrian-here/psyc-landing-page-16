
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
  }, [animationStarted]);

  // Handle the time-based animation
  useEffect(() => {
    if (!isVisible || !animationStarted || isPaused || !isAutoMode) return;

    // Clear any previous timer
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
    }

    // Start the animation sequence
    animationTimerRef.current = setTimeout(() => {
      if (currentStep < 4) {
        setCurrentStep(prev => prev + 1);
      } else {
        // Reset to beginning after completing all steps
        setTimeout(() => {
          setCurrentStep(0);
        }, 2000);
      }
    }, 4000); // 4 seconds per step
    
    return () => {
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }
    };
  }, [isVisible, animationStarted, currentStep, isPaused, isAutoMode]);

  // Handle step click
  const handleStepClick = (stepIndex: number) => {
    // Clear any existing timers
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
    }
    
    setCurrentStep(stepIndex);
    setIsAutoMode(false); // Disable auto mode when manually selecting
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
      scoutDronePosition: { top: '75%', left: '25%' },
      scoutDronePath: 'M25,100 Q50,60 80,40',
      tranqDronePosition: { top: '85%', left: '15%' }, // Standby position
      elephantPosition: { top: '55%', left: '75%' },
      visualizationInfo: "Scout drone scanning for elephant heat signatures. Thermal imaging active. AI pattern recognition engaged.",
      stats: { scoutBattery: '98%', tranqBattery: '100%', altitude: '15m', targets: '0' }
    },
    {
      title: "Target Identification & Analysis",
      description: "The scout drone identifies the target elephant and begins detailed analysis including size estimation, health assessment, and behavioral patterns.",
      scoutDronePosition: { top: '45%', left: '60%' },
      scoutDronePath: 'M80,40 Q120,50 150,45',
      tranqDronePosition: { top: '85%', left: '15%' },
      elephantPosition: { top: '55%', left: '75%' },
      visualizationInfo: "Target identified: Adult elephant. Weight: ~4.2 tons. Health: Good. Stress level: Moderate. Calculating optimal approach vector.",
      stats: { scoutBattery: '94%', tranqBattery: '100%', altitude: '18m', targets: '1' }
    },
    {
      title: "Data Transfer & Tranquilizer Drone Approach",
      description: "Scout drone transmits all collected data to the tranquilizer drone, which begins its precise approach based on the reconnaissance intelligence.",
      scoutDronePosition: { top: '40%', left: '55%' }, // Monitoring position
      tranqDronePosition: { top: '65%', left: '45%' }, // Approaching
      tranqDronePath: 'M40,85 Q60,75 90,65',
      elephantPosition: { top: '55%', left: '75%' },
      visualizationInfo: "Data link established. Tranquilizer drone receiving target parameters. Dosage calculated: 15ml. Approach vector optimized.",
      stats: { scoutBattery: '91%', tranqBattery: '96%', altitude: '20m', targets: '1' }
    },
    {
      title: "Precision Tranquilization",
      description: "The tranquilizer drone deploys the precisely calibrated dart while the scout drone maintains overwatch and monitoring.",
      scoutDronePosition: { top: '40%', left: '55%' },
      tranqDronePosition: { top: '50%', left: '60%' },
      dartPath: 'M150,50 L185,55',
      elephantPosition: { top: '55%', left: '75%' },
      visualizationInfo: "Dart deployed successfully. Impact confirmed. Monitoring elephant vitals. Tranquilizer taking effect.",
      stats: { scoutBattery: '88%', tranqBattery: '92%', altitude: '22m', targets: '1' }
    },
    {
      title: "Dual Monitoring & Health Assessment",
      description: "Both drones work in tandem to monitor the elephant's vital signs and ensure safe tranquilization while transmitting data to the ground team.",
      scoutDronePosition: { top: '35%', left: '65%' },
      tranqDronePosition: { top: '45%', left: '70%' },
      elephantPosition: { top: '60%', left: '75%', state: 'tranquilized' },
      visualizationInfo: "Elephant safely tranquilized. Dual monitoring active. Heart rate: 38 BPM. Respiration: Stable. Ground team notified.",
      stats: { scoutBattery: '82%', tranqBattery: '87%', altitude: '15m', targets: '1' }
    }
  ];

  return (
    <section id="demo" ref={containerRef} className="py-20 md:py-32 relative bg-[#121420] overflow-hidden">
      {/* Tech background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNjAgdjYwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDExMSwgMCwgMC4wOCkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-20"></div>
      
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-psyc-orange/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl"></div>
      
      <div className="section-container min-h-[800px]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Dual-Drone System Demo</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Experience our advanced two-drone system where reconnaissance and tranquilization drones work in perfect coordination
          </p>
          
          {/* Progress bar */}
          <div className="max-w-md mx-auto mt-8 bg-black/30 h-2 rounded-full overflow-hidden">
            <div 
              className="h-full bg-psyc-orange transition-all duration-700"
              style={{ width: `${(currentStep + 1) * 20}%` }}
            ></div>
          </div>
          
          {/* Demo controls */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            <button 
              onClick={handleResetClick} 
              className="flex items-center space-x-1 text-white/70 hover:text-psyc-orange transition-colors bg-black/30 px-3 py-2 rounded-md hover:bg-black/50"
              aria-label="Restart demonstration"
            >
              <RotateCcw size={16} />
              <span>Restart</span>
            </button>
            
            <button 
              onClick={handlePlayPauseClick} 
              className="flex items-center space-x-1 text-white/70 hover:text-psyc-orange transition-colors bg-black/30 px-3 py-2 rounded-md hover:bg-black/50"
              aria-label={isPaused ? "Resume demonstration" : "Pause demonstration"}
            >
              {isPaused ? (
                <>
                  <Play size={16} />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause size={16} />
                  <span>Pause</span>
                </>
              )}
            </button>
            
            <div className="text-xs text-white/50">
              {isAutoMode ? 'Auto Mode' : 'Manual Mode'}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Steps */}
          <div className="space-y-6 md:space-y-8 glass-card p-6 md:p-8 rounded-xl">
            {steps.map((step, index) => (
              <div 
                key={index}
                onClick={() => handleStepClick(index)}
                className={`transition-all duration-700 p-5 md:p-6 rounded-lg relative overflow-hidden cursor-pointer ${
                  currentStep === index 
                    ? 'bg-black/50 border border-psyc-orange/50 shadow-lg shadow-psyc-orange/20 scale-[1.03]' 
                    : currentStep > index 
                      ? 'bg-black/30 border border-white/10 opacity-70 hover:opacity-90 hover:border-psyc-orange/30' 
                      : 'bg-black/30 border border-white/5 opacity-50 hover:opacity-70 hover:border-white/20'
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
                  <div className="ml-11 mt-4 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/10 animate-fade-in cyber-border">
                    <div className="text-sm font-mono text-psyc-orange mb-2">SYSTEM OUTPUT:</div>
                    <p className="text-white/90 text-sm">{step.visualizationInfo}</p>
                    <div className="mt-3 grid grid-cols-4 gap-2 text-xs text-white/80 font-mono">
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
                
                {/* Motion indicator */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full ${
                  currentStep === index ? 'animate-shimmer' : ''
                }`}></div>
              </div>
            ))}
          </div>
          
          {/* Visualization */}
          <div className="relative h-[500px] bg-black/40 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 shadow-xl cyber-border">
            <div className="absolute inset-0 p-4">
              {/* Terrain background */}
              <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-green-800/40"></div>
              
              {/* Grid lines */}
              <div className="absolute inset-0" style={{ 
                backgroundImage: 'radial-gradient(circle, rgba(255, 111, 0, 0.1) 1px, transparent 1px)', 
                backgroundSize: '30px 30px' 
              }}></div>
              
              {/* Scanning effect */}
              {!isPaused && currentStep >= 0 && currentStep < 2 && (
                <div className="scan-line"></div>
              )}
              
              {/* Trees and foliage - African savanna style */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-green-900/60 to-transparent"></div>
              
              {/* Acacia trees */}
              <div className="absolute bottom-5 left-[20%] w-12 h-16">
                <svg viewBox="0 0 50 60" className="w-full h-full">
                  <path d="M25,50 L25,20" stroke="#8B4513" strokeWidth="2" fill="none"/>
                  <ellipse cx="25" cy="15" rx="15" ry="8" fill="#228B22" opacity="0.7"/>
                </svg>
              </div>
              <div className="absolute bottom-5 right-[15%] w-10 h-14">
                <svg viewBox="0 0 50 60" className="w-full h-full">
                  <path d="M25,50 L25,20" stroke="#8B4513" strokeWidth="2" fill="none"/>
                  <ellipse cx="25" cy="15" rx="12" ry="6" fill="#228B22" opacity="0.7"/>
                </svg>
              </div>
              
              {/* Scout Drone (Green) */}
              <div 
                className={`absolute w-8 h-8 transition-all duration-1000 ease-in-out ${currentStep <= 1 && !isPaused ? 'animate-pulse' : ''}`}
                style={{ 
                  top: steps[currentStep].scoutDronePosition.top, 
                  left: steps[currentStep].scoutDronePosition.left,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="relative">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#22C55E" strokeWidth="1.5">
                    <path d="M12 12.5L7.5 15.5M12 12.5L16.5 15.5M12 12.5V19M7.5 15.5L4.5 13.5M7.5 15.5V19L12 22M16.5 15.5L19.5 13.5M16.5 15.5V19L12 22" />
                  </svg>
                  
                  {/* Scout scanning effect */}
                  {currentStep <= 1 && (
                    <div className={`absolute -inset-4 rounded-full bg-green-500/20 ${!isPaused ? 'animate-pulse-glow' : ''}`}></div>
                  )}
                  
                  {/* Data transmission */}
                  {currentStep === 2 && (
                    <div className="absolute -top-8 -right-8 text-xs text-green-400 font-mono animate-pulse">
                      DATA TX
                    </div>
                  )}
                </div>
              </div>
              
              {/* Tranquilizer Drone (Blue) */}
              <div 
                className={`absolute w-10 h-10 transition-all duration-1000 ease-in-out ${currentStep >= 2 && currentStep <= 3 && !isPaused ? 'animate-pulse' : ''}`}
                style={{ 
                  top: steps[currentStep].tranqDronePosition.top, 
                  left: steps[currentStep].tranqDronePosition.left,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="relative">
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#3B82F6" strokeWidth="1.5">
                    <path d="M12 12.5L7.5 15.5M12 12.5L16.5 15.5M12 12.5V19M7.5 15.5L4.5 13.5M7.5 15.5V19L12 22M16.5 15.5L19.5 13.5M16.5 15.5V19L12 22" />
                    <circle cx="12" cy="8" r="3" stroke="#3B82F6" strokeWidth="1"/>
                  </svg>
                  
                  {/* Tranq drone active effect */}
                  {currentStep >= 2 && (
                    <div className={`absolute -inset-6 rounded-full bg-blue-500/20 ${!isPaused ? 'animate-pulse-glow' : ''}`}></div>
                  )}
                </div>
              </div>
              
              {/* Scout drone path */}
              {currentStep >= 0 && currentStep < 3 && steps[currentStep].scoutDronePath && (
                <svg className="absolute inset-0 w-full h-full">
                  <path 
                    d={steps[currentStep].scoutDronePath} 
                    stroke="#22C55E" 
                    strokeWidth="1.5" 
                    strokeDasharray="4 2"
                    fill="none"
                    className={`drone-path ${!isPaused ? '' : 'animation-paused'}`}
                    opacity="0.6"
                  />
                </svg>
              )}
              
              {/* Tranquilizer drone path */}
              {currentStep >= 2 && currentStep < 4 && steps[currentStep].tranqDronePath && (
                <svg className="absolute inset-0 w-full h-full">
                  <path 
                    d={steps[currentStep].tranqDronePath} 
                    stroke="#3B82F6" 
                    strokeWidth="1.5" 
                    strokeDasharray="3 1"
                    fill="none"
                    className={`drone-path ${!isPaused ? '' : 'animation-paused'}`}
                    opacity="0.7"
                  />
                </svg>
              )}
              
              {/* Dart trajectory */}
              {currentStep === 3 && (
                <svg className="absolute inset-0 w-full h-full">
                  <path 
                    d={steps[currentStep].dartPath} 
                    stroke="#FFB74D" 
                    strokeWidth="2" 
                    strokeDasharray="4 2"
                    fill="none"
                    className={`drone-path ${!isPaused ? '' : 'animation-paused'}`}
                    opacity="0.9"
                  />
                  <circle cx="185" cy="55" r="3" fill="#FFB74D" className={!isPaused ? 'animate-pulse-glow' : ''} />
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
                <div className={`w-32 h-24 relative ${currentStep === 4 ? 'opacity-70' : 'opacity-100'}`}>
                  {/* Elephant SVG */}
                  <svg viewBox="0 0 120 90" width="120" height="90">
                    {/* Body */}
                    <ellipse cx="60" cy="50" rx="30" ry="20" fill="#8B7355"/>
                    {/* Head */}
                    <ellipse cx="45" cy="35" rx="18" ry="15" fill="#8B7355"/>
                    {/* Trunk */}
                    <path d="M35,40 Q25,50 28,65 Q30,70 35,68 Q32,55 40,45" fill="#8B7355"/>
                    {/* Ears */}
                    <ellipse cx="35" cy="30" rx="12" ry="18" fill="#A0926B"/>
                    <ellipse cx="55" cy="30" rx="10" ry="15" fill="#A0926B"/>
                    {/* Eyes */}
                    <circle cx="40" cy="30" r="2" fill="#000"/>
                    <circle cx="50" cy="30" r="2" fill="#000"/>
                    {/* Legs */}
                    <rect x="40" y="65" width="6" height="15" fill="#8B7355"/>
                    <rect x="50" y="65" width="6" height="15" fill="#8B7355"/>
                    <rect x="65" y="65" width="6" height="15" fill="#8B7355"/>
                    <rect x="75" y="65" width="6" height="15" fill="#8B7355"/>
                    {/* Tail */}
                    <path d="M85,50 Q95,52 90,60" stroke="#8B7355" strokeWidth="3" fill="none"/>
                  </svg>
                  
                  {/* Targeting overlay */}
                  {currentStep >= 1 && currentStep < 3 && (
                    <div className="absolute inset-0 pointer-events-none">
                      <svg viewBox="0 0 120 90" width="120" height="90">
                        <circle cx="60" cy="45" r="35" stroke="#FF6F00" strokeWidth="1" fill="none" strokeDasharray="5 3" className={!isPaused ? 'animate-rotate-slow' : ''} />
                        <circle cx="60" cy="45" r="25" stroke="#22C55E" strokeWidth="1" fill="none" strokeDasharray="3 2" className={!isPaused ? 'animate-rotate-slow' : ''} style={{ animationDirection: 'reverse' }} />
                        <circle cx="55" cy="40" r="8" stroke="#FF6F00" strokeWidth="2" fill="none" className={!isPaused ? 'animate-pulse-glow' : ''} />
                        <path d="M55,32 L55,27 M63,40 L68,40" stroke="#FF6F00" strokeWidth="1" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Weight estimation overlay */}
                  {currentStep === 1 && (
                    <div className="absolute -top-12 -left-16 bg-black/70 backdrop-blur-md rounded-lg p-2 border border-white/10 text-xs font-mono text-green-400 animate-fade-in">
                      <div>ANALYSIS:</div>
                      <div>Weight: 4.2T</div>
                      <div>Age: Adult</div>
                      <div>Health: Good</div>
                    </div>
                  )}
                  
                  {/* Dart impact */}
                  {currentStep === 3 && (
                    <div className="absolute top-1/3 right-1/4 w-6 h-6">
                      <svg viewBox="0 0 24 24" width="24" height="24">
                        <circle cx="12" cy="12" r="8" fill="#FF6F00" opacity="0.7" className={!isPaused ? 'animate-pulse' : ''} />
                        <circle cx="12" cy="12" r="4" fill="#FFB74D" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Successful tranquilization */}
                  {currentStep === 4 && (
                    <div className="absolute inset-0 pointer-events-none">
                      <svg viewBox="0 0 120 90" width="120" height="90">
                        <circle cx="60" cy="45" r="35" stroke="#22C55E" strokeWidth="1" fill="none" />
                        <path d="M45,45 L55,55 L75,35" stroke="#22C55E" strokeWidth="3" fill="none" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Dual health monitoring */}
                  {currentStep === 4 && (
                    <div className="absolute -top-16 -right-24 bg-black/70 backdrop-blur-md rounded-lg p-3 border border-white/10 text-xs font-mono text-green-400 animate-fade-in cyber-border">
                      <div className="text-psyc-orange">DUAL MONITOR:</div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
                        <div>♥ 38 BPM</div>
                        <div>O₂ 96%</div>
                        <div>TEMP 36.2°C</div>
                        <div>STABLE</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Data link visualization */}
              {currentStep === 2 && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line 
                    x1="55%" y1="40%" 
                    x2="45%" y2="65%" 
                    stroke="#00D4FF" 
                    strokeWidth="2" 
                    strokeDasharray="2 2"
                    className={!isPaused ? 'animate-pulse' : ''}
                    opacity="0.8"
                  />
                  <text x="50%" y="52%" fill="#00D4FF" fontSize="8" textAnchor="middle" className="font-mono">
                    DATA LINK
                  </text>
                </svg>
              )}
              
              {/* Interface overlays */}
              <div className="absolute top-2 left-2 right-2 flex justify-between text-xs font-mono text-psyc-orange border-b border-psyc-orange/20 pb-1">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full bg-green-500 ${!isPaused ? 'animate-pulse' : ''} mr-1`}></div> 
                    SCOUT-D1
                  </div>
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full bg-blue-500 ${!isPaused ? 'animate-pulse' : ''} mr-1`}></div> 
                    TRANQ-D2
                  </div>
                </div>
                <div className={!isPaused ? 'animate-pulse' : ''}>
                  {isPaused ? '⏸ PAUSED' : '● LIVE FEED'}
                </div>
              </div>
              
              {/* Coordinates */}
              <div className="absolute bottom-3 left-3 bg-black/60 px-2 py-1 rounded text-xs text-white/70 font-mono">
                SERENGETI: 2°31'12"S 34°49'55"E
              </div>
              
              {/* Mission status */}
              <div className="absolute top-2 right-3 flex flex-col items-end space-y-1">
                <div className="px-2 py-1 bg-black/60 rounded text-xs font-mono flex items-center">
                  <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-yellow-500' : 'bg-green-500'} mr-1 ${!isPaused ? 'animate-pulse' : ''}`}></span>
                  <span className="text-white/80">
                    {isPaused ? "MISSION PAUSED" : 
                     currentStep === 4 ? "MISSION SUCCESS" : 
                     "MISSION ACTIVE"}
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
