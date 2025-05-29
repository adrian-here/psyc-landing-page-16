
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeDBackground from '@/components/ThreeDBackground';
import VideoCard from '@/components/VideoCard';

const Blogs = () => {
  const extractVideoId = (url: string): string => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&\n?#]+)/);
    return match ? match[1] : '';
  };

  const problemVideos = {
    india: {
      karnataka: [
        { url: 'https://youtu.be/t5E7Kii98uo', title: 'Human-Elephant Conflicts in Karnataka - Case 1' },
        { url: 'https://youtu.be/QEpckTci8eg', title: 'Human-Elephant Conflicts in Karnataka - Case 2' },
        { url: 'https://youtu.be/0BWcYxKE_FQ', title: 'Human-Elephant Conflicts in Karnataka - Case 3' }
      ],
      kerala: [
        { url: 'https://youtu.be/Nu330qWqDvY', title: 'Human-Elephant Conflicts in Kerala - Case 1' },
        { url: 'https://youtu.be/fSqDGqeInoc', title: 'Human-Elephant Conflicts in Kerala - Case 2' },
        { url: 'https://youtu.be/D8QRcrdNoQk', title: 'Human-Elephant Conflicts in Kerala - Case 3' }
      ],
      assam: [
        { url: 'https://youtu.be/2vKKqoolyJ8', title: 'Human-Elephant Conflicts in Assam - Case 1' },
        { url: 'https://youtu.be/ILKhR5GDn8U', title: 'Human-Elephant Conflicts in Assam - Case 2' },
        { url: 'https://youtu.be/ILKhR5GDn8U', title: 'Human-Elephant Conflicts in Assam - Case 3' }
      ],
      maharashtra: [
        { url: 'https://youtu.be/fJh4gFke84M', title: 'Human-Elephant Conflicts in Maharashtra - Case 1' },
        { url: 'https://youtu.be/FJC0rLl1eek', title: 'Human-Elephant Conflicts in Maharashtra - Case 2' },
        { url: 'https://youtu.be/bKRjEp0DCWo', title: 'Human-Elephant Conflicts in Maharashtra - Case 3' }
      ],
      madhyaPradesh: [
        { url: 'https://youtu.be/CgCgnp2epq0', title: 'Human-Elephant Conflicts in Madhya Pradesh - Case 1' },
        { url: 'https://youtu.be/6cHJrfqzczc', title: 'Human-Elephant Conflicts in Madhya Pradesh - Case 2' },
        { url: '', title: 'Human-Elephant Conflicts in Madhya Pradesh - Case 3', available: false }
      ],
      odisha: [
        { url: 'https://youtu.be/zzqYRdo_SNY', title: 'Human-Elephant Conflicts in Odisha - Case 1' },
        { url: '', title: 'Human-Elephant Conflicts in Odisha - Case 2', available: false },
        { url: '', title: 'Human-Elephant Conflicts in Odisha - Case 3', available: false }
      ]
    },
    china: [
      { url: 'https://youtu.be/HE69a4j1deo', title: 'Human-Elephant Conflicts in China' },
      { url: '', title: 'Human-Elephant Conflicts in China - Case 2', available: false },
      { url: '', title: 'Human-Elephant Conflicts in China - Case 3', available: false }
    ]
  };

  const africaVideos = [
    { url: 'https://youtu.be/6GmTSgxhnq0', title: 'Human-Elephant Conflicts in Africa' },
    { url: 'https://youtu.be/O4iKbZ5o88A', title: 'Human-Elephant Conflicts in Zimbabwe' }
  ];

  const solutionsVideos = [
    { url: 'https://youtu.be/Wm0KnZDzM_g', title: 'Elephant-Wildlife Conflicts Management in India' },
    { url: 'https://youtu.be/KVgMLFPC_dA', title: 'Wildlife Conflict Solutions - India' },
    { url: 'https://youtu.be/LFisjTl-Qnc', title: 'Elephant-Wildlife Conflicts in Africa - Solutions' },
    { url: 'https://youtu.be/okYUGy0NmGY', title: 'African Wildlife Management Approaches' }
  ];

  const conferencesVideos = [
    { url: 'https://youtu.be/p9fLq5jQFZY', title: 'Human-Elephant Conference - India' },
    { url: 'https://youtu.be/C6I5Q8qhHFo', title: 'Wildlife Conservation Conference' },
    { url: 'https://www.youtube.com/live/lvy_WBIYucg', title: 'Live Conference on Human-Elephant Conflicts' }
  ];

  return (
    <div className="min-h-screen bg-psyc-darkest text-white relative overflow-hidden">
      <ThreeDBackground />
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Human-Elephant Conflict Documentation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive documentation of human-elephant conflicts worldwide and the evolving solutions to address this critical conservation challenge.
            </p>
          </div>
        </section>

        {/* Problem Section - India */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Problem: India</h2>
            
            {/* Karnataka */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Karnataka</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {problemVideos.india.karnataka.map((video, index) => (
                  <VideoCard
                    key={index}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Karnataka"
                    isAvailable={video.available !== false}
                  />
                ))}
              </div>
            </div>

            {/* Kerala */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Kerala</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {problemVideos.india.kerala.map((video, index) => (
                  <VideoCard
                    key={index}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Kerala"
                    isAvailable={video.available !== false}
                  />
                ))}
              </div>
            </div>

            {/* Assam */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Assam</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {problemVideos.india.assam.map((video, index) => (
                  <VideoCard
                    key={index}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Assam"
                    isAvailable={video.available !== false}
                  />
                ))}
              </div>
            </div>

            {/* Maharashtra */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Maharashtra</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {problemVideos.india.maharashtra.map((video, index) => (
                  <VideoCard
                    key={index}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Maharashtra"
                    isAvailable={video.available !== false}
                  />
                ))}
              </div>
            </div>

            {/* Madhya Pradesh */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Madhya Pradesh</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {problemVideos.india.madhyaPradesh.map((video, index) => (
                  <VideoCard
                    key={index}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Madhya Pradesh"
                    isAvailable={video.available !== false}
                  />
                ))}
              </div>
            </div>

            {/* Odisha */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Odisha</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {problemVideos.india.odisha.map((video, index) => (
                  <VideoCard
                    key={index}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Odisha"
                    isAvailable={video.available !== false}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section - China & Africa */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Problem: International</h2>
            
            {/* China */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">China</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {problemVideos.china.map((video, index) => (
                  <VideoCard
                    key={index}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="China"
                    isAvailable={video.available !== false}
                  />
                ))}
              </div>
            </div>

            {/* Africa */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Africa</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {africaVideos.map((video, index) => (
                  <VideoCard
                    key={index}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Africa"
                    isAvailable={video.available !== false}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Current Solutions & Innovations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutionsVideos.map((video, index) => (
                <VideoCard
                  key={index}
                  videoId={extractVideoId(video.url)}
                  title={video.title}
                  region="Solutions"
                  isAvailable={video.available !== false}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Conferences Section */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Industry Conferences & Discussions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conferencesVideos.map((video, index) => (
                <VideoCard
                  key={index}
                  videoId={extractVideoId(video.url)}
                  title={video.title}
                  region="Conference"
                  isAvailable={video.available !== false}
                />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Blogs;
