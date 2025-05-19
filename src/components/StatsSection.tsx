
import React, { useState, useEffect, useRef } from 'react';

interface StatProps {
  value: number;
  suffix: string;
  description: string;
  duration?: number;
}

const AnimatedStat: React.FC<StatProps> = ({ value, suffix, description, duration = 2000 }) => {
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
    <div ref={statRef} className="text-center">
      <h3 className="text-3xl md:text-5xl font-bold mb-2 flex items-center justify-center">
        <span>{count}</span>
        <span className="text-psyc-orange ml-1">{suffix}</span>
      </h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-psyc-darkGreen to-black text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Impact & Opportunity</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Our technology is transforming wildlife control with measurable results and creating new possibilities for conservation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <AnimatedStat value={15} suffix="k+" description="Elephants safely monitored using PSYC technology" />
          <AnimatedStat value={94} suffix="%" description="Reduction in human injuries during operations" />
          <AnimatedStat value={100} suffix="%" description="Tranquilization success rate in test operations" />
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Market Opportunity</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-psyc-orange">Growing Conservation Tech Market</h4>
                <p className="text-white/80">
                  The conservation technology market is expected to reach $45 billion by 2028, with drone applications representing one of the fastest-growing segments.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-psyc-orange">Human Safety Priority</h4>
                <p className="text-white/80">
                  Over 200 wildlife professionals are injured annually during traditional tranquilization operations, creating strong demand for safer alternatives.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-psyc-orange">Animal Welfare Standards</h4>
                <p className="text-white/80">
                  Increasingly strict regulations around animal welfare in conservation work create high demand for PSYC's stress-minimizing approach.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-psyc-orange">Data Ecosystem</h4>
                <p className="text-white/80">
                  Beyond tranquilization, PSYC creates valuable data streams for research, conservation planning, and habitat monitoring, creating multiple revenue opportunities.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-5 bg-psyc-green/10 rounded-lg border border-psyc-green/30">
            <h4 className="font-bold mb-2 text-center text-psyc-orange">Our Advantage</h4>
            <p className="text-white/90 text-center max-w-3xl mx-auto">
              PSYC uniquely combines AI-driven precision, complete system integration, and wildlife expertise to deliver a solution that outperforms any competitor in safety, effectiveness, and animal welfare outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
