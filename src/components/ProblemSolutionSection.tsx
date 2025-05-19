
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const ProblemSolutionSection = () => {
  const [activeTab, setActiveTab] = useState<'problem' | 'solution'>('problem');
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
        root: null,
        rootMargin: '0px',
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

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setActiveTab('solution');
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

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

  return (
    <section id="solutions" ref={sectionRef} className="bg-gradient-to-b from-psyc-darkGreen to-psyc-green/90 text-white py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">From Problem to Solution</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Traditional wildlife control methods pose significant risks. 
            See how PSYC's drone technology transforms this process.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-full p-1">
            <button
              onClick={() => setActiveTab('problem')}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'problem'
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Traditional Methods
            </button>
            <button
              onClick={() => setActiveTab('solution')}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'solution'
                  ? 'bg-psyc-green text-white shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              PSYC Drone Solution
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br from-psyc-green/20 to-psyc-green/0 rounded-2xl transform transition-all duration-700 ${
              activeTab === 'problem' ? 'opacity-0' : 'opacity-100'
            }`}></div>
            
            <div className={`rounded-2xl overflow-hidden transition-all duration-700 transform ${
              activeTab === 'problem' ? 'translate-x-0' : 'translate-x-full opacity-0 absolute'
            }`}>
              <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <AlertTriangle className="mr-2" /> Traditional Methods
                </h3>
                <ul className="space-y-4">
                  {problems.map((item) => (
                    <li key={item.id} className="flex items-start space-x-3 opacity-0 animate-fade-in" style={{ animationDelay: `${item.id * 200}ms`, animationFillMode: 'forwards' }}>
                      <div className="mt-1">{item.icon}</div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-black/20 rounded-lg">
                  <p className="italic text-white/80">
                    "Traditional methods put both humans and animals at risk, with high stress levels and potentially dangerous situations."
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`rounded-2xl overflow-hidden transition-all duration-700 transform ${
              activeTab === 'solution' ? 'translate-x-0' : '-translate-x-full opacity-0 absolute'
            }`}>
              <div className="bg-psyc-green/20 backdrop-blur-sm border border-psyc-lightGreen/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <CheckCircle className="mr-2" /> PSYC Drone Solution
                </h3>
                <ul className="space-y-4">
                  {solutions.map((item) => (
                    <li key={item.id} className="flex items-start space-x-3 opacity-0 animate-fade-in" style={{ animationDelay: `${item.id * 200}ms`, animationFillMode: 'forwards' }}>
                      <div className="mt-1">{item.icon}</div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-white/10 rounded-lg">
                  <p className="italic text-white/90">
                    "Our drone-based approach eliminates human risk while significantly reducing animal stress through precise, non-invasive operations."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <div className={`absolute inset-0 transition-all duration-700 transform ${
              activeTab === 'problem' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="absolute inset-0 bg-red-500/20"></div>
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-red-500/30 rounded-full mb-6 flex items-center justify-center">
                  <AlertTriangle size={30} className="text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">High Risk, Low Precision</h3>
                <div className="bg-black/30 backdrop-blur-sm p-5 rounded-xl max-w-md">
                  <ul className="text-left space-y-3 mt-4">
                    <li className="flex items-center">
                      <AlertTriangle size={16} className="text-red-400 mr-2" />
                      <span>Rangers within 10-20m of unpredictable wildlife</span>
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle size={16} className="text-red-400 mr-2" />
                      <span>Manual aiming results in ~65% first-shot accuracy</span>
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle size={16} className="text-red-400 mr-2" />
                      <span>30+ minutes average operation time</span>
                    </li>
                    <li className="flex items-center">
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
              <div className="absolute inset-0 bg-psyc-green/20"></div>
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-psyc-green/30 rounded-full mb-6 flex items-center justify-center">
                  <CheckCircle size={30} className="text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Safe, Precise, Efficient</h3>
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl max-w-md">
                  <ul className="text-left space-y-3 mt-4">
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-psyc-green mr-2" />
                      <span>Operators at 100-300m safe distance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-psyc-green mr-2" />
                      <span>AI targeting achieves 95%+ first-shot accuracy</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-psyc-green mr-2" />
                      <span>Under 10 minutes average operation time</span>
                    </li>
                    <li className="flex items-center">
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
