
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const ProblemSolutionSection = () => {
  const [activeTab, setActiveTab] = useState<'problem' | 'solution'>('problem');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);

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
        root: null,
        rootMargin: '0px',
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
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const switchTabs = () => {
        setActiveTab(prev => prev === 'problem' ? 'solution' : 'problem');
        timeoutRef.current = window.setTimeout(switchTabs, 5000);
      };
      
      timeoutRef.current = window.setTimeout(switchTabs, 3000);
      
      return () => {
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [isVisible, activeTab]);

  const problems = [
    { id: 1, text: "High human risk during tranquilization", icon: <AlertTriangle className="text-red-500" size={20} /> },
    { id: 2, text: "Time-consuming traditional methods", icon: <AlertTriangle className="text-red-500" size={20} /> },
    { id: 3, text: "Inaccurate tranquilization", icon: <AlertTriangle className="text-red-500" size={20} /> },
    { id: 4, text: "Significant animal stress", icon: <AlertTriangle className="text-red-500" size={20} /> },
    { id: 5, text: "Dangerous proximity to wildlife", icon: <AlertTriangle className="text-red-500" size={20} /> },
  ];

  const solutions = [
    { id: 1, text: "Zero human risk with remote operations", icon: <CheckCircle className="text-psyc-green" size={20} /> },
    { id: 2, text: "Fast deployment and efficient workflow", icon: <CheckCircle className="text-psyc-green" size={20} /> },
    { id: 3, text: "AI-powered precision targeting", icon: <CheckCircle className="text-psyc-green" size={20} /> },
    { id: 4, text: "Minimal animal stress with non-invasive approach", icon: <CheckCircle className="text-psyc-green" size={20} /> },
    { id: 5, text: "Safe distance operations via drone technology", icon: <CheckCircle className="text-psyc-green" size={20} /> },
  ];

  const handleTabClick = (tab: 'problem' | 'solution') => {
    setActiveTab(tab);
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setActiveTab(prev => prev === 'problem' ? 'solution' : 'problem');
      }, 8000);
    }
  };

  return (
    <section id="solutions" ref={sectionRef} className="bg-gradient-to-b from-psyc-darkest to-psyc-darkGreen/95 text-white py-20 md:py-28 relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-tech-grid bg-tech-grid opacity-20"></div>
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-psyc-orange/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-psyc-green/5 blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">From Problem to Solution</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Traditional wildlife control methods pose significant risks. 
            See how PSYC's drone technology transforms this process.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-black/30 backdrop-blur-lg rounded-full p-1 border border-white/10">
            <button
              onClick={() => handleTabClick('problem')}
              className={`px-6 py-3 rounded-full transition-all duration-500 relative overflow-hidden ${
                activeTab === 'problem'
                  ? 'bg-red-500/80 text-white shadow-lg shadow-red-500/30'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <span className="relative z-10 flex items-center">
                <AlertTriangle size={18} className="mr-2" />
                Traditional Methods
              </span>
              {activeTab === 'problem' && (
                <span className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/30 to-red-600/0 animate-shimmer"></span>
              )}
            </button>
            <button
              onClick={() => handleTabClick('solution')}
              className={`px-6 py-3 rounded-full transition-all duration-500 relative overflow-hidden ${
                activeTab === 'solution'
                  ? 'bg-psyc-green/80 text-white shadow-lg shadow-psyc-green/30'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <span className="relative z-10 flex items-center">
                <CheckCircle size={18} className="mr-2" />
                PSYC Drone Solution
              </span>
              {activeTab === 'solution' && (
                <span className="absolute inset-0 bg-gradient-to-r from-psyc-green/0 via-psyc-green/30 to-psyc-green/0 animate-shimmer"></span>
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br from-psyc-green/20 to-psyc-green/0 rounded-2xl transform transition-all duration-700 ${
              activeTab === 'problem' ? 'opacity-0' : 'opacity-100'
            }`}></div>
            
            <div className={`rounded-2xl overflow-hidden transition-all duration-700 transform ${
              activeTab === 'problem' ? 'translate-x-0 opacity-100 relative z-10' : 'translate-x-full opacity-0 absolute'
            }`}>
              <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-tech-grid bg-tech-grid opacity-10"></div>
                <h3 className="text-2xl font-bold mb-6 flex items-center relative z-10">
                  <AlertTriangle className="mr-2" /> Traditional Methods
                </h3>
                <ul className="space-y-4 relative z-10">
                  {problems.map((item) => (
                    <li key={item.id} className="flex items-start space-x-3 opacity-0 animate-fade-in" style={{ animationDelay: `${item.id * 200}ms`, animationFillMode: 'forwards' }}>
                      <div className="mt-1">{item.icon}</div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-black/30 rounded-lg border border-red-500/10 relative z-10">
                  <p className="italic text-white/90">
                    "Traditional methods put both humans and animals at risk, with high stress levels and potentially dangerous situations."
                  </p>
                </div>
                
                {/* Warning glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-red-500/10 rounded-full blur-xl pulse"></div>
              </div>
            </div>
            
            <div className={`rounded-2xl overflow-hidden transition-all duration-700 transform ${
              activeTab === 'solution' ? 'translate-x-0 opacity-100 relative z-10' : '-translate-x-full opacity-0 absolute'
            }`}>
              <div className="bg-psyc-green/10 backdrop-blur-sm border border-psyc-lightGreen/30 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-tech-grid bg-tech-grid opacity-10"></div>
                <h3 className="text-2xl font-bold mb-6 flex items-center relative z-10">
                  <CheckCircle className="mr-2" /> PSYC Drone Solution
                </h3>
                <ul className="space-y-4 relative z-10">
                  {solutions.map((item) => (
                    <li key={item.id} className="flex items-start space-x-3 opacity-0 animate-fade-in" style={{ animationDelay: `${item.id * 200}ms`, animationFillMode: 'forwards' }}>
                      <div className="mt-1">{item.icon}</div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-black/30 rounded-lg border border-psyc-green/10 relative z-10">
                  <p className="italic text-white/90">
                    "Our drone-based approach eliminates human risk while significantly reducing animal stress through precise, non-invasive operations."
                  </p>
                </div>
                
                {/* Success glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-psyc-green/10 rounded-full blur-xl pulse"></div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <div className={`absolute inset-0 transition-all duration-700 transform ${
              activeTab === 'problem' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="absolute inset-0 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl"></div>
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-red-500/30 rounded-full mb-6 flex items-center justify-center animate-pulse-glow">
                  <AlertTriangle size={30} className="text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">High Risk, Low Precision</h3>
                <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl max-w-md border border-white/10">
                  <ul className="text-left space-y-4 mt-4">
                    <li className="flex items-center opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                      <AlertTriangle size={16} className="text-red-400 mr-2" />
                      <span>Rangers within 10-20m of unpredictable wildlife</span>
                    </li>
                    <li className="flex items-center opacity-0 animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                      <AlertTriangle size={16} className="text-red-400 mr-2" />
                      <span>Manual aiming results in ~65% first-shot accuracy</span>
                    </li>
                    <li className="flex items-center opacity-0 animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                      <AlertTriangle size={16} className="text-red-400 mr-2" />
                      <span>30+ minutes average operation time</span>
                    </li>
                    <li className="flex items-center opacity-0 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
                      <AlertTriangle size={16} className="text-red-400 mr-2" />
                      <span>Over 200 ranger injuries annually worldwide</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className={`absolute inset-0 transition-all duration-700 transform ${
              activeTab === 'solution' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="absolute inset-0 bg-psyc-green/10 backdrop-blur-sm border border-psyc-green/20 rounded-2xl"></div>
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-psyc-green/30 rounded-full mb-6 flex items-center justify-center animate-pulse-glow">
                  <CheckCircle size={30} className="text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Safe, Precise, Efficient</h3>
                <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl max-w-md border border-white/10">
                  <ul className="text-left space-y-4 mt-4">
                    <li className="flex items-center opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                      <CheckCircle size={16} className="text-psyc-green mr-2" />
                      <span>Operators at 100-300m safe distance</span>
                    </li>
                    <li className="flex items-center opacity-0 animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                      <CheckCircle size={16} className="text-psyc-green mr-2" />
                      <span>AI targeting achieves 95%+ first-shot accuracy</span>
                    </li>
                    <li className="flex items-center opacity-0 animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                      <CheckCircle size={16} className="text-psyc-green mr-2" />
                      <span>Under 10 minutes average operation time</span>
                    </li>
                    <li className="flex items-center opacity-0 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
                      <CheckCircle size={16} className="text-psyc-green mr-2" />
                      <span>Zero human injuries since implementation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
