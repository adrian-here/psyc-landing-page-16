
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProblemSolutionSection = () => {
  const [activeTab, setActiveTab] = useState('problem');
  const [autoSwitchEnabled, setAutoSwitchEnabled] = useState(true);

  useEffect(() => {
    if (!autoSwitchEnabled) return;
    
    const interval = setInterval(() => {
      setActiveTab(prev => prev === 'problem' ? 'solution' : 'problem');
    }, 8000);
    
    return () => clearInterval(interval);
  }, [autoSwitchEnabled]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setAutoSwitchEnabled(false);
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-[#151f2e] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,111,0,0.15),transparent_70%)] opacity-30"></div>
      
      <div className="section-container relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">Elephant Tranquilization</span>
          <span className="block text-xl md:text-2xl mt-2 text-white/80">Revolutionizing Wildlife Management</span>
        </h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-black/30 p-1 rounded-lg cyber-border">
            <button
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 text-lg ${
                activeTab === 'problem'
                  ? 'bg-psyc-orange text-white shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => handleTabChange('problem')}
            >
              The Problem
            </button>
            <button
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 text-lg ${
                activeTab === 'solution'
                  ? 'bg-psyc-orange text-white shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => handleTabChange('solution')}
            >
              Our Solution
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <AnimatePresence mode="wait">
            {activeTab === 'problem' ? (
              <motion.div
                key="problem"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-6 md:p-8 h-full"
              >
                <h3 className="text-2xl font-bold mb-4 text-psyc-orange">Current Challenges</h3>
                <div className="space-y-4 text-white/90">
                  <p>
                    Traditional methods of elephant tranquilization for conservation, relocation, and medical 
                    treatment pose significant dangers to both wildlife officials and the animals themselves.
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Ground-based approaches require dangerous close proximity to unpredictable animals</li>
                    <li>Manual darting has low first-attempt success rates (under 70%)</li>
                    <li>Failed attempts cause unnecessary animal stress and escalation risks</li>
                    <li>Traditional methods require large teams in potential danger zones</li>
                    <li>Limited ability to select optimal injection sites reduces effectiveness</li>
                  </ul>
                  
                  <p className="text-white/80 italic">
                    "The most dangerous moment in conservation work is when you're trying to tranquilize a 
                    multi-ton animal that can easily see your approach."
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="solution"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-6 md:p-8 h-full"
              >
                <h3 className="text-2xl font-bold mb-4 text-psyc-orange">The PSYC Approach</h3>
                <div className="space-y-5 text-white/90">
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="bg-black/40 p-4 rounded-lg w-full md:w-1/3 feature-glow">
                      <h4 className="text-xl font-bold mb-1 text-center md:text-left text-white">SAFE</h4>
                      <p className="text-sm text-white/80 text-center md:text-left">Remote operation keeps humans at a safe distance from potentially dangerous wildlife</p>
                    </div>
                    
                    <div className="bg-black/40 p-4 rounded-lg w-full md:w-1/3 feature-glow">
                      <h4 className="text-xl font-bold mb-1 text-center md:text-left text-white">PRECISE</h4>
                      <p className="text-sm text-white/80 text-center md:text-left">AI-guided targeting identifies optimal injection sites with 95%+ accuracy</p>
                    </div>
                    
                    <div className="bg-black/40 p-4 rounded-lg w-full md:w-1/3 feature-glow">
                      <h4 className="text-xl font-bold mb-1 text-center md:text-left text-white">EFFICIENT</h4>
                      <p className="text-sm text-white/80 text-center md:text-left">Single-operator system reduces team size while improving success rates</p>
                    </div>
                  </div>
                  
                  <p>
                    PSYC's drone-based tranquilization system revolutionizes wildlife management by combining 
                    cutting-edge drone technology with precision darting capabilities guided by artificial intelligence.
                  </p>
                  
                  <p>
                    Our solution keeps conservation teams at a safe distance while the autonomous drone system 
                    approaches, identifies optimal injection sites, and delivers tranquilizer darts with unprecedented 
                    accuracy.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="relative">
            <img
              src={activeTab === 'problem' ? "/images/traditional-method.jpg" : "/images/psyc-drone-solution.jpg"}
              alt={activeTab === 'problem' ? "Traditional elephant tranquilization" : "PSYC drone solution"}
              className="rounded-xl shadow-2xl w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Auto-switch indicator */}
            {autoSwitchEnabled && (
              <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded-full flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-psyc-orange animate-pulse"></div>
                <span className="text-xs text-white/80">Auto-switching</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
