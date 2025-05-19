
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  expandedContent: string;
  className?: string;
  style?: React.CSSProperties; // Added style prop
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  expandedContent,
  className,
  style, // Added style prop
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        'group bg-card-gradient backdrop-blur-sm rounded-xl p-6 border border-psyc-green/20 shadow-lg transition-all duration-500 hover-card cursor-pointer',
        isExpanded ? 'ring-2 ring-psyc-orange/50 scale-[1.02]' : '',
        className
      )}
      style={style} // Added style prop
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start space-x-4">
        <div className="mt-1 p-2 bg-psyc-darkGreen/50 rounded-lg text-psyc-orange group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-psyc-orange transition-colors duration-300">
            {title}
          </h3>
          <p className="text-white/80">{description}</p>
          
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isExpanded ? 'mt-4 max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 bg-white/10 rounded-lg">
              <p className="text-white/90">{expandedContent}</p>
            </div>
          </div>
          
          <button
            className="mt-4 text-sm text-psyc-orange hover:text-psyc-gold transition-colors flex items-center"
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
      
      <div className={`absolute inset-0 rounded-xl bg-shimmer-gradient bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-300`}></div>
    </div>
  );
};

export default FeatureCard;
