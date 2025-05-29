
import React from 'react';
import VideoCard from './VideoCard';

type VideoData = {
  url: string;
  title: string;
  available?: boolean;
};

interface VideoSectionProps {
  title: string;
  videos: VideoData[];
  region: string;
  className?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ title, videos, region, className = "" }) => {
  const extractVideoId = (url: string): string => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&\n?#]+)/);
    return match ? match[1] : '';
  };

  return (
    <div className={`mb-12 ${className}`}>
      <h3 className="text-2xl font-bold mb-6 text-psyc-orange">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            videoId={extractVideoId(video.url)}
            title={video.title}
            region={region}
            isAvailable={video.available !== false}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
