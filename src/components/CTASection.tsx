
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black to-psyc-darkGreen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDEwMG0tOTggMGE5OCw5OCAwIDEsMCAxOTYsMGE5OCw5OCAwIDEsMCAtMTk2LDBaIiBzdHJva2U9IiM0QzhDM0MiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] bg-repeat opacity-20"></div>
      
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-psyc-darkGreen/80 to-psyc-green/60 rounded-xl p-8 md:p-12 shadow-2xl border border-psyc-green/30 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Join Us in Revolutionizing Wildlife Management
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Whether you're a conservation professional, technology partner, or wildlife enthusiast, 
              PSYC's innovative approach to wildlife control can transform your operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3 text-psyc-orange">For Conservation Organizations</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-psyc-green mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Improve safety for your wildlife management teams</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-psyc-green mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Reduce animal stress during operations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-psyc-green mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Collect valuable health and behavior data</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3 text-psyc-orange">For Technology Partners</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-psyc-green mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Join our ecosystem of conservation technology</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-psyc-green mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Integrate your solutions with our platform</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-psyc-green mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Collaborate on next-generation conservation tech</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button size="lg" className="w-full sm:w-auto bg-psyc-orange hover:bg-psyc-orange/90 text-white text-lg px-8 py-6">
              Request a Demo
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 bg-white/5 hover:bg-white/10 text-white text-lg px-8 py-6">
              Learn More About Our Technology
            </Button>
          </div>
        </div>
        
        <div className="mt-12 text-center text-white/60 text-sm">
          <p>PSYC technology is available for qualified conservation organizations and wildlife management agencies.</p>
        </div>
      </div>
      
      {/* Glowing orb decorations */}
      <div className="absolute bottom-20 left-[20%] w-40 h-40 rounded-full bg-gradient-radial from-psyc-orange/10 to-transparent opacity-40 blur-2xl"></div>
      <div className="absolute top-20 right-[15%] w-60 h-60 rounded-full bg-gradient-radial from-psyc-green/10 to-transparent opacity-30 blur-2xl"></div>
    </section>
  );
};

export default CTASection;
