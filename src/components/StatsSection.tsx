
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface StatProps {
  value: number;
  suffix: string;
  description: string;
  duration?: number;
  color?: string;
}

const AnimatedStat: React.FC<StatProps> = ({ value, suffix, description, duration = 2000, color = 'bg-gradient-to-r from-psyc-orange to-amber-400' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

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

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const incrementTime = duration / end;
    let timer: number;

    const updateCount = () => {
      start += 1;
      setCount(start);
      
      if (start < end) {
        timer = window.setTimeout(updateCount, incrementTime);
      }
    };

    updateCount();

    return () => clearTimeout(timer);
  }, [value, duration, isVisible]);

  return (
    <motion.div 
      ref={statRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="text-center p-6 relative overflow-hidden cyber-border bg-black/30 rounded-xl"
    >
      {/* Background glow effect */}
      <div className={`absolute -inset-1 ${color} opacity-20 blur-xl`}></div>
      
      <h3 className="text-4xl md:text-6xl font-bold mb-3 flex items-center justify-center relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-psyc-orange to-amber-400">{count}</span>
        <span className="text-psyc-orange ml-1">{suffix}</span>
      </h3>
      <p className="text-white/80 relative z-10">{description}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-[#0F131A] text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwTDYwIDAiIHN0cm9rZT0iI0ZGNkYwMCIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjxwYXRoIGQ9Ik0xNSA2MEw2MCAxNSIgc3Ryb2tlPSIjRkY2RjAwIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PHBhdGggZD0iTTMwIDYwTDYwIDMwIiBzdHJva2U9IiNGRjZGMDAiIHN0cm9rZS13aWR0aD0iMC4yNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiLz48cGF0aCBkPSJNNDUgNjBMNjAgNDUiIHN0cm9rZT0iI0ZGNkYwMCIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjxwYXRoIGQ9Ik0wIDQ1TDQ1IDAiIHN0cm9rZT0iI0ZGNkYwMCIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjxwYXRoIGQ9Ik0wIDMwTDMwIDAiIHN0cm9rZT0iI0ZGNkYwMCIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjxwYXRoIGQ9Ik0wIDE1TDE1IDAiIHN0cm9rZT0iI0ZGNkYwMCIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="text-gradient">Impact & Opportunity</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-psyc-orange to-transparent"></div>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Our technology is transforming wildlife control with measurable results and creating new possibilities for conservation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <AnimatedStat value={15} suffix="k+" description="Elephants safely monitored using PSYC technology" color="bg-gradient-to-r from-psyc-orange to-amber-400" />
          <AnimatedStat value={94} suffix="%" description="Reduction in human injuries during operations" color="bg-gradient-to-r from-amber-400 to-amber-600" />
          <AnimatedStat value={100} suffix="%" description="Tranquilization success rate in test operations" color="bg-gradient-to-r from-amber-600 to-psyc-orange" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-psyc-orange/30 cyber-border relative overflow-hidden"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-psyc-orange/5 to-black/0 z-0 animate-pulse opacity-50"></div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center relative z-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-psyc-orange to-amber-400">
              Market Opportunity
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-black/50 p-5 rounded-lg border border-white/10 hover:border-psyc-orange/30 transition-colors duration-300 hover:shadow-lg hover:shadow-psyc-orange/10 group">
                <div className="flex items-start">
                  <div className="bg-psyc-orange/20 p-3 rounded-lg mr-4 group-hover:bg-psyc-orange/30 transition-colors duration-300">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyc-orange">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-psyc-orange group-hover:text-amber-400 transition-colors duration-300">Growing Conservation Tech Market</h4>
                    <p className="text-white/80">
                      The conservation technology market is expected to reach $45 billion by 2028, with drone applications representing one of the fastest-growing segments.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/50 p-5 rounded-lg border border-white/10 hover:border-psyc-orange/30 transition-colors duration-300 hover:shadow-lg hover:shadow-psyc-orange/10 group">
                <div className="flex items-start">
                  <div className="bg-psyc-orange/20 p-3 rounded-lg mr-4 group-hover:bg-psyc-orange/30 transition-colors duration-300">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyc-orange">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-psyc-orange group-hover:text-amber-400 transition-colors duration-300">Human Safety Priority</h4>
                    <p className="text-white/80">
                      Over 200 wildlife professionals are injured annually during traditional tranquilization operations, creating strong demand for safer alternatives.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, amount: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-black/50 p-5 rounded-lg border border-white/10 hover:border-psyc-orange/30 transition-colors duration-300 hover:shadow-lg hover:shadow-psyc-orange/10 group">
                <div className="flex items-start">
                  <div className="bg-psyc-orange/20 p-3 rounded-lg mr-4 group-hover:bg-psyc-orange/30 transition-colors duration-300">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyc-orange">
                      <circle cx="12" cy="10" r="3"></circle>
                      <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-psyc-orange group-hover:text-amber-400 transition-colors duration-300">Animal Welfare Standards</h4>
                    <p className="text-white/80">
                      Increasingly strict regulations around animal welfare in conservation work create high demand for PSYC's stress-minimizing approach.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/50 p-5 rounded-lg border border-white/10 hover:border-psyc-orange/30 transition-colors duration-300 hover:shadow-lg hover:shadow-psyc-orange/10 group">
                <div className="flex items-start">
                  <div className="bg-psyc-orange/20 p-3 rounded-lg mr-4 group-hover:bg-psyc-orange/30 transition-colors duration-300">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyc-orange">
                      <path d="M4.93 19.07A10 10 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10c-2.76 0-5.26-1.12-7.07-2.93"></path>
                      <path d="M11.07 6.93C14.47 3.53 12 4 12 4s.47-2.47-2.93.93"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-psyc-orange group-hover:text-amber-400 transition-colors duration-300">Data Ecosystem</h4>
                    <p className="text-white/80">
                      Beyond tranquilization, PSYC creates valuable data streams for research, conservation planning, and habitat monitoring, creating multiple revenue opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true, amount: 0.8 }}
            className="mt-10 p-6 bg-gradient-to-r from-black/70 to-psyc-orange/10 rounded-lg border border-psyc-orange/30 relative z-10"
          >
            <h4 className="font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-psyc-orange to-amber-400 text-xl">Our Advantage</h4>
            <p className="text-white/90 text-center max-w-3xl mx-auto">
              PSYC uniquely combines AI-driven precision, complete system integration, and wildlife expertise to deliver a solution that outperforms any competitor in safety, effectiveness, and animal welfare outcomes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
