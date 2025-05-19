
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  expandedContent: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  expandedContent,
  className,
  style,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: ((e.clientX - rect.left) / rect.width) - 0.5,
      y: ((e.clientY - rect.top) / rect.height) - 0.5
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'group bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg transition-all duration-500 hover-card-3d cursor-pointer relative overflow-hidden',
        isExpanded ? 'ring-2 ring-psyc-orange' : '',
        className
      )}
      style={{
        ...style,
        transform: `perspective(1000px) rotateX(${coords.y * 8}deg) rotateY(${coords.x * 8}deg) scale(${isExpanded ? 1.03 : 1})`
      }}
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setCoords({ x: 0, y: 0 })}
    >
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDExMSwgMCwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjQgMiIvPjwvc3ZnPg==')] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex items-start space-x-4">
        <div className="mt-1 p-3 bg-black/50 rounded-lg text-psyc-orange group-hover:text-white transition-colors duration-300 relative overflow-hidden">
          {icon}
          {/* Glow effect on icon */}
          <div className="absolute inset-0 bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/20 to-psyc-orange/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
        <div className="feature-card-content flex-1">
          <h3 className="text-xl font-bold mb-2 group-hover:text-psyc-orange transition-colors duration-300">
            {title}
          </h3>
          <p className="text-white/80">{description}</p>
          
          <div
            className={`overflow-hidden transition-all duration-700 ${
              isExpanded ? 'mt-4 max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 bg-black/50 rounded-lg border border-psyc-orange/30 cyber-border">
              <p className="text-white/90">{expandedContent}</p>
            </div>
          </div>
          
          <button
            className="mt-4 text-sm text-psyc-orange hover:text-amber-400 transition-colors flex items-center"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? 'Show less' : 'Read more'}
            <svg
              className={`ml-1 w-4 h-4 transition-transform transform ${
                isExpanded ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-psyc-orange/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-psyc-orange/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-psyc-orange/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-psyc-orange/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Glow effect */}
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/20 to-psyc-orange/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 z-[-1]"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default FeatureCard;
