import React, { useState } from 'react';
import { CheckCircle, XCircle, Info } from 'lucide-react';
import { motion } from 'framer-motion';

interface ComparisonItem {
  feature: string;
  psyc: boolean;
  traditional: boolean;
  psycDetail: string;
  traditionalDetail: string;
  icon?: React.ReactNode;
}

const CompetitiveEdge = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const comparisonData: ComparisonItem[] = [
    {
      feature: "Navigation",
      psyc: true,
      traditional: false,
      psycDetail: "AI-powered autonomous navigation with real-time obstacle avoidance and target tracking capability. The system can operate in diverse environments including dense forests, open savannas, and mountainous terrain. Navigation precision of ±1.5m even in windy conditions.",
      traditionalDetail: "Manual approach requiring human proximity to potentially dangerous wildlife. Limited by terrain accessibility and visibility constraints. High risk during challenging weather conditions or in dense vegetation.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
        </svg>
      )
    },
    {
      feature: "Targeting",
      psyc: true,
      traditional: false,
      psycDetail: "Computer vision with 95%+ first-shot accuracy and optimal injection site identification. Machine learning algorithms analyze real-time anatomical data to identify muscle groups and vascular patterns for ideal injection placement, reducing trauma and maximizing drug efficacy.",
      traditionalDetail: "Human visual targeting with ~65% accuracy and variable injection site quality. Subject to human error, stress-induced performance degradation, and limited by distance and angle constraints. Often requires multiple attempts.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      )
    },
    {
      feature: "Monitoring",
      psyc: true,
      traditional: false,
      psycDetail: "Real-time vital signs monitoring, weight estimation, and detailed health data collection. Our system continuously tracks respiratory rate, heart rate, body temperature, and movement patterns. Data is transmitted instantly to a mobile command center and can be accessed remotely by specialists worldwide.",
      traditionalDetail: "Limited monitoring capability until human team can safely approach animal. Reactive rather than proactive health monitoring. Critical time delays between tranquilization and vital sign assessment that can compromise animal safety.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      feature: "Safety",
      psyc: true,
      traditional: false,
      psycDetail: "Zero human risk with operators at safe distance, multiple redundancy systems. Our system maintains a minimum 100m safety buffer between personnel and wildlife. Backup communication channels, emergency protocols, and fail-safe mechanisms ensure operational security even in equipment failure scenarios.",
      traditionalDetail: "High human risk due to close proximity to wildlife, especially in unpredictable situations. Conservation personnel must typically approach within 30-50m of potentially dangerous animals, resulting in multiple injuries and fatalities annually.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      feature: "Stress Impact",
      psyc: true,
      traditional: false,
      psycDetail: "Minimal animal stress with single-shot precision and non-invasive approach. Silent drone operation and first-shot success significantly reduce the physiological stress response. Cortisol measurements in test subjects show an average 78% reduction in stress hormone levels compared to traditional approaches.",
      traditionalDetail: "High animal stress from human presence, vehicle noise, and potential for multiple darting attempts. The prolonged chase and multiple dart attempts common in traditional methods can cause capture myopathy, hyperthermia, and other stress-related complications.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.93 19.07A10 10 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10c-2.76 0-5.26-1.12-7.07-2.93"></path>
          <path d="M7.24 11h9.52"></path>
        </svg>
      )
    },
    {
      feature: "Data Collection",
      psyc: true,
      traditional: false,
      psycDetail: "Comprehensive digital data capture including operation video, vital signs, and environmental conditions. Our system records over 50 different data points per second during operations, creating rich datasets for research, pattern analysis, and long-term studies. All data is securely stored in the cloud with backup redundancy.",
      traditionalDetail: "Manual data recording with limited scope, often incomplete due to operational constraints. Data is typically recorded post-operation, introducing recall bias and missing critical time-sensitive information. Limited standardization makes cross-operation comparison difficult.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6" y2="6"></line>
          <line x1="6" y1="18" x2="6" y2="18"></line>
        </svg>
      )
    },
    {
      feature: "Training Required",
      psyc: true,
      traditional: false,
      psycDetail: "Minimal training with intuitive interface and AI assistance. A new operator can be fully trained in 3-5 days, with the AI system providing real-time guidance and preventing critical errors. Remote expert assistance is available for complex situations.",
      traditionalDetail: "Extensive training and field experience needed, typically 3-5 years to reach proficiency. Requires specialized veterinary knowledge, ballistics training, and wildlife behavior expertise. High barrier to entry limits available personnel for conservation efforts.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      )
    },
    {
      feature: "Cost Efficiency",
      psyc: true,
      traditional: false,
      psycDetail: "Higher initial investment but 65% lower per-operation costs. Our system reduces personnel requirements, eliminates vehicle costs, and significantly increases operation success rates. The subscription model includes regular software updates with new features and capabilities at no additional cost.",
      traditionalDetail: "Lower initial costs but expensive field operations requiring multiple personnel and vehicles. Failed operations result in repeated attempts and additional expenses. Equipment maintenance and replacement costs are high due to field damage.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-[#0F131A] to-black text-white relative overflow-hidden">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-psyc-orange/10 to-amber-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-psyc-orange/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-psyc-orange/8 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDExMSwgMCwgMC4wMykiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-20"></div>
        
        {/* Subtle moving lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-psyc-orange/20 to-transparent animate-pulse"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-pulse animation-delay-1000"></div>
        </div>
      </div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="text-gradient bg-gradient-to-r from-white via-psyc-orange to-amber-300 bg-clip-text text-transparent">
              Competitive Edge
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-psyc-orange to-transparent"></div>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            See how PSYC's innovative approach compares to traditional wildlife control methods
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-psyc-orange/30 shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(15,19,26,0.8) 50%, rgba(0,0,0,0.6) 100%)'
          }}
        >
          {/* Table header */}
          <div className="grid grid-cols-7 bg-gradient-to-r from-black/80 via-slate-800/60 to-black/80 text-white font-bold border-b border-psyc-orange/20">
            <div className="p-4 border-r border-white/10 col-span-3">Feature</div>
            <div className="p-4 text-center border-r border-white/10 col-span-2">PSYC Drone Solution</div>
            <div className="p-4 text-center col-span-2">Traditional Methods</div>
          </div>
          
          {/* Table rows */}
          {comparisonData.map((item, index) => (
            <React.Fragment key={item.feature}>
              <div 
                className={`grid grid-cols-7 border-t border-white/10 cursor-pointer hover:bg-gradient-to-r hover:from-black/60 hover:via-slate-800/40 hover:to-black/60 transition-all duration-300 ${
                  selectedFeature === item.feature ? 'bg-gradient-to-r from-black/60 via-slate-800/40 to-black/60' : ''
                }`}
                onClick={() => setSelectedFeature(selectedFeature === item.feature ? null : item.feature)}
              >
                <div className="p-4 border-r border-white/10 font-medium flex items-center col-span-3">
                  {item.icon && <span className="mr-2 text-psyc-orange">{item.icon}</span>}
                  {item.feature}
                </div>
                <div className="p-4 text-center border-r border-white/10 col-span-2">
                  {item.psyc ? (
                    <div className="flex items-center justify-center">
                      <CheckCircle className="inline-block text-psyc-orange mr-2" size={20} />
                      <span className="font-medium text-white">Superior</span>
                    </div>
                  ) : (
                    <XCircle className="inline-block text-red-500" size={20} />
                  )}
                </div>
                <div className="p-4 text-center col-span-2">
                  {item.traditional ? (
                    <CheckCircle className="inline-block text-psyc-orange" size={20} />
                  ) : (
                    <div className="flex items-center justify-center">
                      <XCircle className="inline-block text-red-500 mr-2" size={20} />
                      <span className="font-medium text-white/70">Limited</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Expanded details */}
              {selectedFeature === item.feature && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-7 bg-gradient-to-r from-slate-800/40 via-black/60 to-slate-800/40 border-t border-white/10"
                >
                  <div className="p-4 border-r border-white/10 font-medium text-psyc-orange flex items-center col-span-3">
                    <Info size={16} className="mr-2" />
                    Detailed Comparison
                  </div>
                  <div className="p-4 border-r border-white/10 text-white/80 text-sm col-span-2">
                    <div className="bg-gradient-to-br from-black/50 to-slate-800/30 rounded-lg p-3 border border-psyc-orange/20">
                      {item.psycDetail}
                    </div>
                  </div>
                  <div className="p-4 text-white/80 text-sm col-span-2">
                    <div className="bg-gradient-to-br from-black/50 to-slate-800/30 rounded-lg p-3 border border-white/10">
                      {item.traditionalDetail}
                    </div>
                  </div>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.8 }}
          className="mt-10 text-center bg-gradient-to-r from-black/60 via-slate-800/40 to-black/60 p-6 rounded-xl border border-psyc-orange/20 backdrop-blur-sm"
        >
          <p className="text-white/90 italic max-w-3xl mx-auto">
            "The comparison is clear: PSYC's technology represents a quantum leap forward in wildlife tranquilization safety, 
            precision, and animal welfare outcomes. Our platform isn't just incrementally better—it's transformative."
          </p>
          <div className="mt-4 text-psyc-orange font-medium">Dr. Eliza Thornton, Wildlife Conservation Expert</div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveEdge;
