import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Check, Send, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    interest: 'conservation' // default value
  });
  
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Create email content
    const emailSubject = `PSYC Contact Form - ${formData.interest}`;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization}
Interest: ${formData.interest}

Message:
${formData.message}
    `;
    
    // Create mailto link
    const mailtoLink = `mailto:adrianronan7305@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Simulate processing time
    setTimeout(() => {
      // Open default email client
      window.location.href = mailtoLink;
      
      setFormState('success');
      toast({
        title: "Email client opened",
        description: "Your default email client should open with the pre-filled message.",
      });
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          organization: '',
          message: '',
          interest: 'conservation'
        });
        setFormState('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-20 md:py-32 bg-[#0F131A] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDEwMG0tOTggMGE5OCw5OCAwIDEsMCAxOTYsMGE5OCw5OCAwIDEsMCAtMTk2LDBaIiBzdHJva2U9IiNGRjZGMDAiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] bg-repeat opacity-20"></div>
      
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0F131A] to-transparent"></div>
      
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-black/80 to-black/60 rounded-xl p-8 md:p-12 shadow-2xl border border-psyc-orange/30 backdrop-blur-sm cyber-border"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
              <span className="text-gradient">Join Us in Revolutionizing Wildlife Management</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-psyc-orange to-transparent"></div>
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Whether you're a conservation professional, technology partner, or wildlife enthusiast, 
              PSYC's innovative approach can transform your operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-psyc-orange">Contact Us</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-white mb-1 text-sm">Your Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded-md focus:border-psyc-orange/50 focus:ring-1 focus:ring-psyc-orange/50 text-white"
                        placeholder="John Doe"
                        disabled={formState === 'submitting' || formState === 'success'}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white mb-1 text-sm">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded-md focus:border-psyc-orange/50 focus:ring-1 focus:ring-psyc-orange/50 text-white"
                        placeholder="you@example.com"
                        disabled={formState === 'submitting' || formState === 'success'}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-white mb-1 text-sm">Organization</label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded-md focus:border-psyc-orange/50 focus:ring-1 focus:ring-psyc-orange/50 text-white"
                      placeholder="Company or Organization"
                      disabled={formState === 'submitting' || formState === 'success'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block text-white mb-1 text-sm">Primary Interest</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded-md focus:border-psyc-orange/50 focus:ring-1 focus:ring-psyc-orange/50 text-white"
                      disabled={formState === 'submitting' || formState === 'success'}
                    >
                      <option value="conservation">Conservation Operations</option>
                      <option value="technology">Technology Partnership</option>
                      <option value="investment">Investment Opportunities</option>
                      <option value="research">Research Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-1 text-sm">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded-md focus:border-psyc-orange/50 focus:ring-1 focus:ring-psyc-orange/50 text-white resize-none"
                      placeholder="Tell us how we can help you..."
                      disabled={formState === 'submitting' || formState === 'success'}
                    ></textarea>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full py-6 bg-psyc-orange hover:bg-amber-500 text-white flex items-center justify-center space-x-2"
                  disabled={formState === 'submitting' || formState === 'success'}
                >
                  {formState === 'idle' && (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                  {formState === 'submitting' && (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Opening Email Client...</span>
                    </>
                  )}
                  {formState === 'success' && (
                    <>
                      <Check size={18} />
                      <span>Email Client Opened!</span>
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-psyc-orange mb-4">Partner With Us</h3>
                <div className="space-y-5">
                  <div className="bg-black/30 p-5 border border-white/10 rounded-lg hover:border-psyc-orange/30 transition-all duration-300 hover:shadow-md cyber-border">
                    <h4 className="text-xl font-bold mb-2 text-white">For Conservation Organizations</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-psyc-orange mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Improve safety for your wildlife management teams</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-psyc-orange mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Reduce animal stress during operations</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-psyc-orange mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Collect valuable health and behavior data</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/30 p-5 border border-white/10 rounded-lg hover:border-psyc-orange/30 transition-all duration-300 hover:shadow-md cyber-border">
                    <h4 className="text-xl font-bold mb-2 text-white">For Technology Partners</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-psyc-orange mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Join our ecosystem of conservation technology</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-psyc-orange mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Integrate your solutions with our platform</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-psyc-orange mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Collaborate on next-generation conservation tech</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-psyc-orange/10 to-transparent p-5 rounded-lg border border-psyc-orange/30">
                <h4 className="text-xl font-bold mb-3 text-psyc-orange">Schedule a Demo</h4>
                <p className="text-white/80 mb-4">
                  See the PSYC system in action with a personalized demo tailored to your specific needs and conservation challenges.
                </p>
                <Button className="w-full bg-psyc-orange hover:bg-amber-500 text-white">
                  Request a Demo
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-10 text-center text-white/60 text-sm">
          <p>PSYC technology is available for qualified conservation organizations and wildlife management agencies.</p>
        </div>
      </div>
      
      {/* Glowing orb decorations */}
      <div className="absolute bottom-20 left-[20%] w-40 h-40 rounded-full bg-gradient-radial from-psyc-orange/10 to-transparent opacity-40 blur-2xl"></div>
      <div className="absolute top-20 right-[15%] w-60 h-60 rounded-full bg-gradient-radial from-amber-500/10 to-transparent opacity-30 blur-2xl"></div>
    </section>
  );
};

export default CTASection;
