
import React from 'react';

interface VideoCardProps {
  videoId: string;
  title: string;
  region?: string;
  isAvailable?: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoId, title, region, isAvailable = true }) => {
  if (!isAvailable) {
    return (
      <div className="glass-card p-4 hover-card">
        <div className="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
          <span className="text-gray-400 text-sm">Video Not Available</span>
        </div>
        <h3 className="text-white font-medium text-sm mb-2">{title}</h3>
        {region && (
          <span className="text-psyc-orange text-xs bg-psyc-orange/20 px-2 py-1 rounded">
            {region}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="glass-card p-4 hover-card">
      <div className="w-full h-48 mb-4">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
      <h3 className="text-white font-medium text-sm mb-2">{title}</h3>
      {region && (
        <span className="text-psyc-orange text-xs bg-psyc-orange/20 px-2 py-1 rounded">
          {region}
        </span>
      )}
    </div>
  );
};

export default VideoCard;
