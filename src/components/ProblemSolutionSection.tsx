
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, RocketLaunch, TrendingUp } from 'lucide-react';

const ProblemSolutionSection = () => {
  const [activeTab, setActiveTab] = useState('problem');
  const [autoSwitchEnabled, setAutoSwitchEnabled] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

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

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-[#151f2e] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,111,0,0.15),transparent_70%)] opacity-30"></div>
      <div className="absolute w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-[40%] -left-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-psyc-orange/30 via-psyc-gold/20 to-transparent blur-[80px] animate-pulse-glow"></div>
        <div className="absolute -bottom-[40%] -right-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-l from-psyc-orange/30 via-psyc-gold/20 to-transparent blur-[80px] animate-pulse-glow"></div>
      </div>
      
      <div className="section-container relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <span className="text-gradient">Elephant Tranquilization</span>
          <motion.span 
            className="block text-xl md:text-2xl mt-2 text-white/80"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Revolutionizing Wildlife Management
          </motion.span>
        </motion.h2>
        
        <div className="flex justify-center mb-12">
          <motion.div 
            className="inline-flex bg-black/30 p-1 rounded-lg cyber-border shadow-lg"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 text-lg relative ${
                activeTab === 'problem'
                  ? 'bg-psyc-orange text-white shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => handleTabChange('problem')}
            >
              The Problem
              {activeTab === 'problem' && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
            <button
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 text-lg relative ${
                activeTab === 'solution'
                  ? 'bg-psyc-orange text-white shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => handleTabChange('solution')}
            >
              Our Solution
              {activeTab === 'solution' && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatePresence mode="wait">
            {activeTab === 'problem' ? (
              <motion.div
                key="problem"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-6 md:p-8 hover-card-3d"
              >
                <h3 className="text-2xl font-bold mb-6 text-psyc-orange flex items-center">
                  <span className="mr-2 bg-psyc-orange/20 p-2 rounded-full">
                    <TrendingUp className="text-psyc-orange h-5 w-5" />
                  </span>
                  Current Challenges
                </h3>
                <div className="space-y-5 text-white/90">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg"
                  >
                    Traditional elephant tranquilization methods pose significant risks:
                  </motion.p>
                  
                  <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    <motion.div variants={featureVariants} className="bg-black/40 p-4 rounded-lg feature-glow border border-white/5">
                      <p className="font-medium text-white">Dangerous Proximity</p>
                      <p className="text-sm text-white/70">Requires close contact with unpredictable animals</p>
                    </motion.div>
                    
                    <motion.div variants={featureVariants} className="bg-black/40 p-4 rounded-lg feature-glow border border-white/5">
                      <p className="font-medium text-white">Low Success Rate</p>
                      <p className="text-sm text-white/70">Manual darting success under 70%</p>
                    </motion.div>
                    
                    <motion.div variants={featureVariants} className="bg-black/40 p-4 rounded-lg feature-glow border border-white/5">
                      <p className="font-medium text-white">Animal Stress</p>
                      <p className="text-sm text-white/70">Failed attempts cause unnecessary stress</p>
                    </motion.div>
                    
                    <motion.div variants={featureVariants} className="bg-black/40 p-4 rounded-lg feature-glow border border-white/5">
                      <p className="font-medium text-white">Team Risk</p>
                      <p className="text-sm text-white/70">Large teams required in danger zones</p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="solution"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-6 md:p-8 hover-card-3d"
              >
                <h3 className="text-2xl font-bold mb-6 text-psyc-orange flex items-center">
                  <span className="mr-2 bg-psyc-orange/20 p-2 rounded-full">
                    <RocketLaunch className="text-psyc-orange h-5 w-5" />
                  </span>
                  The PSYC Approach
                </h3>
                <div className="space-y-5 text-white/90">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-psyc-orange/20 to-transparent rounded-lg blur-md"></div>
                    <Card className="bg-black/60 border-white/10 overflow-hidden relative">
                      <div className="absolute top-0 left-0 w-full h-1">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-psyc-orange via-psyc-gold to-psyc-orange"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        />
                      </div>
                      <CardContent className="p-6 grid grid-cols-3 gap-4">
                        <motion.div 
                          className="flex flex-col items-center text-center p-3"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="bg-psyc-orange/20 p-3 rounded-full mb-3">
                            <Sparkles className="h-5 w-5 text-psyc-orange" />
                          </div>
                          <h4 className="font-bold text-white">SAFE</h4>
                          <p className="text-xs text-white/70 mt-1">Remote operation at safe distance</p>
                        </motion.div>
                        
                        <motion.div 
                          className="flex flex-col items-center text-center p-3"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="bg-psyc-orange/20 p-3 rounded-full mb-3">
                            <TrendingUp className="h-5 w-5 text-psyc-orange" />
                          </div>
                          <h4 className="font-bold text-white">PRECISE</h4>
                          <p className="text-xs text-white/70 mt-1">AI-guided targeting with 95%+ accuracy</p>
                        </motion.div>
                        
                        <motion.div 
                          className="flex flex-col items-center text-center p-3"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="bg-psyc-orange/20 p-3 rounded-full mb-3">
                            <RocketLaunch className="h-5 w-5 text-psyc-orange" />
                          </div>
                          <h4 className="font-bold text-white">EFFICIENT</h4>
                          <p className="text-xs text-white/70 mt-1">Single-operator system with high success</p>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.p 
                    className="text-center text-white/80 italic mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    "Our drone-based solution keeps teams safe while improving tranquilization success rates."
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={activeTab === 'problem' ? "/images/traditional-method.jpg" : "/images/psyc-drone-solution.jpg"}
                alt={activeTab === 'problem' ? "Traditional elephant tranquilization" : "PSYC drone solution"}
                className="w-full aspect-[4/3] object-cover"
              />
              <motion.div 
                className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="absolute bottom-0 left-0 w-full p-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-xl font-bold text-white mb-1">
                  {activeTab === 'problem' ? "Traditional Methods" : "Drone Solution"}
                </h4>
                <p className="text-white/80 text-sm">
                  {activeTab === 'problem' 
                    ? "Dangerous ground-based approach requiring close contact" 
                    : "AI-guided remote operation with advanced targeting system"}
                </p>
              </motion.div>
              
              {/* Animated overlay effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-psyc-orange/30 to-transparent"
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 0.3, x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
            </motion.div>
            
            {/* Auto-switch indicator with animation */}
            {autoSwitchEnabled && (
              <motion.div 
                className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded-full flex items-center space-x-2"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-2 h-2 rounded-full bg-psyc-orange"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs text-white/80">Auto-switching</span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
