
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, Linkedin } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  website?: string;
}

interface KeyPerson {
  name: string;
  role: string;
  company: string;
  image: string;
  email?: string;
  linkedin?: string;
}

const PartnersSection = () => {
  const partners: Partner[] = [
    {
      name: "AICDSU",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop&crop=center",
      description: "Leading technology research institute focused on AI and drone innovations",
      website: "https://aicdsu.edu"
    },
    {
      name: "Dayananda Sagar University",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop&crop=center",
      description: "Premier educational institution driving technological advancement and research excellence",
      website: "https://dsu.edu.in"
    }
  ];

  const keyPersons: KeyPerson[] = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Director of Research",
      company: "AICDSU",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      email: "rajesh.kumar@aicdsu.edu",
      linkedin: "https://linkedin.com/in/rajeshkumar"
    },
    {
      name: "Prof. Priya Sharma",
      role: "Dean of Engineering",
      company: "Dayananda Sagar University",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=150&h=150&fit=crop&crop=face",
      email: "priya.sharma@dsu.edu.in",
      linkedin: "https://linkedin.com/in/priyasharma"
    },
    {
      name: "Dr. Arjun Patel",
      role: "Head of Innovation",
      company: "AICDSU",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      email: "arjun.patel@aicdsu.edu",
      linkedin: "https://linkedin.com/in/arjunpatel"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#0F131A] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgc3Ryb2tlPSIjRkY2RjAwIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIGN4PSIzMCIgY3k9IjMwIiByPSIyOSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="text-gradient">Our Partners</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-psyc-orange to-transparent"></div>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Collaborating with leading institutions to revolutionize wildlife conservation technology
          </p>
        </motion.div>

        {/* Partner Organizations */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-psyc-orange/20 cyber-border hover:border-psyc-orange/40 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-24 mb-6 bg-white/10 rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-psyc-orange mb-4">{partner.name}</h3>
                <p className="text-white/80 mb-6">{partner.description}</p>
                {partner.website && (
                  <a 
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-psyc-orange/20 hover:bg-psyc-orange/30 border border-psyc-orange/40 rounded-lg transition-all duration-300 text-psyc-orange hover:text-white"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Key Partner Persons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Key Partner Persons</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {keyPersons.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-psyc-orange/20 cyber-border hover:border-psyc-orange/40 transition-all duration-300 group text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-psyc-orange/40">
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{person.name}</h4>
                <p className="text-psyc-orange font-medium mb-1">{person.role}</p>
                <p className="text-white/70 text-sm mb-4">{person.company}</p>
                
                <div className="flex justify-center space-x-3">
                  {person.email && (
                    <a 
                      href={`mailto:${person.email}`}
                      className="p-2 bg-psyc-orange/20 hover:bg-psyc-orange/30 rounded-lg transition-all duration-300 text-psyc-orange hover:text-white"
                    >
                      <Mail size={16} />
                    </a>
                  )}
                  {person.linkedin && (
                    <a 
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-psyc-orange/20 hover:bg-psyc-orange/30 rounded-lg transition-all duration-300 text-psyc-orange hover:text-white"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
