
import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface ComparisonItem {
  feature: string;
  psyc: boolean;
  traditional: boolean;
  psycDetail: string;
  traditionalDetail: string;
}

const CompetitiveEdge = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const comparisonData: ComparisonItem[] = [
    {
      feature: "Navigation",
      psyc: true,
      traditional: false,
      psycDetail: "AI-powered autonomous navigation with real-time obstacle avoidance and target tracking capability",
      traditionalDetail: "Manual approach requiring human proximity to potentially dangerous wildlife",
    },
    {
      feature: "Targeting",
      psyc: true,
      traditional: false,
      psycDetail: "Computer vision with 95%+ first-shot accuracy and optimal injection site identification",
      traditionalDetail: "Human visual targeting with ~65% accuracy and variable injection site quality",
    },
    {
      feature: "Monitoring",
      psyc: true,
      traditional: false,
      psycDetail: "Real-time vital signs monitoring, weight estimation, and detailed health data collection",
      traditionalDetail: "Limited monitoring capability until human team can safely approach animal",
    },
    {
      feature: "Safety",
      psyc: true,
      traditional: false,
      psycDetail: "Zero human risk with operators at safe distance, multiple redundancy systems",
      traditionalDetail: "High human risk due to close proximity to wildlife, especially in unpredictable situations",
    },
    {
      feature: "Stress Impact",
      psyc: true,
      traditional: false,
      psycDetail: "Minimal animal stress with single-shot precision and non-invasive approach",
      traditionalDetail: "High animal stress from human presence, vehicle noise, and potential for multiple darting attempts",
    },
    {
      feature: "Data Collection",
      psyc: true,
      traditional: false,
      psycDetail: "Comprehensive digital data capture including operation video, vital signs, and environmental conditions",
      traditionalDetail: "Manual data recording with limited scope, often incomplete due to operational constraints",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-black text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Competitive Edge</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            See how PSYC's innovative approach compares to traditional wildlife control methods
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
          {/* Table header */}
          <div className="grid grid-cols-3 bg-psyc-darkGreen/80 text-white font-bold">
            <div className="p-4 border-r border-white/10">Feature</div>
            <div className="p-4 text-center border-r border-white/10">PSYC Drone Solution</div>
            <div className="p-4 text-center">Traditional Methods</div>
          </div>
          
          {/* Table rows */}
          {comparisonData.map((item, index) => (
            <React.Fragment key={item.feature}>
              <div 
                className={`grid grid-cols-3 border-t border-white/10 cursor-pointer hover:bg-white/5 transition-colors duration-200 ${
                  selectedFeature === item.feature ? 'bg-white/5' : ''
                }`}
                onClick={() => setSelectedFeature(selectedFeature === item.feature ? null : item.feature)}
              >
                <div className="p-4 border-r border-white/10 font-medium">{item.feature}</div>
                <div className="p-4 text-center border-r border-white/10">
                  {item.psyc ? (
                    <CheckCircle className="inline-block text-psyc-green" size={20} />
                  ) : (
                    <XCircle className="inline-block text-red-500" size={20} />
                  )}
                </div>
                <div className="p-4 text-center">
                  {item.traditional ? (
                    <CheckCircle className="inline-block text-psyc-green" size={20} />
                  ) : (
                    <XCircle className="inline-block text-red-500" size={20} />
                  )}
                </div>
              </div>
              
              {/* Expanded details */}
              {selectedFeature === item.feature && (
                <div className="grid grid-cols-3 bg-white/10 border-t border-white/10 animate-fade-in">
                  <div className="p-4 border-r border-white/10 font-medium text-psyc-orange">
                    Details
                  </div>
                  <div className="p-4 border-r border-white/10 text-white/80 text-sm">
                    {item.psycDetail}
                  </div>
                  <div className="p-4 text-white/80 text-sm">
                    {item.traditionalDetail}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/80 italic max-w-2xl mx-auto">
            "The comparison is clear: PSYC's technology represents a quantum leap forward in wildlife tranquilization safety, 
            precision, and animal welfare outcomes."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveEdge;
