import React, { useRef, useState } from 'react';

const Container = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="bg-[#e7f0ed] py-12 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[90vh]">
      <div className="max-w-lg space-y-6 text-center md:text-left">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3 justify-center md:justify-start">
          <div className="w-8 h-8 rounded-full border-2 border-[#5C8374]"></div>
          <div>
            <h2 className="text-2xl font-semibold text-[#5C8374]">satvic</h2>
            <h2 className="text-xl text-gray-600 -mt-1">movement</h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-lg">
          is a community-driven health revolution to help you reach the
          peak of your physical, mental, and spiritual well-being
        </p>

        {/* Explore Button */}
        <button className="bg-[#5C8374] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4a6a5f]">
          Explore Workshops
        </button>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
          <div className="bg-white shadow-md px-6 py-4 rounded-xl text-center">
            <h3 className="text-xl font-bold text-[#5C8374]">1 Billion+</h3>
            <p className="text-sm text-gray-600">Total Views</p>
          </div>
          <div className="bg-white shadow-md px-6 py-4 rounded-xl text-center">
            <h3 className="text-xl font-bold text-[#5C8374]">8 Million+</h3>
            <p className="text-sm text-gray-600">Total Followers</p>
          </div>
          <div className="bg-white shadow-md px-6 py-4 rounded-xl text-center">
            <h3 className="text-xl font-bold text-[#5C8374]">500k+</h3>
            <p className="text-sm text-gray-600">Workshop Graduates</p>
          </div>
        </div>
      </div>

      {/* Right Section (Video) */}
      <div className="mt-10 md:mt-0 relative">
        <video
          ref={videoRef}
          src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your actual video URL
          autoPlay
          loop
          muted
          className="rounded-3xl w-[320px] md:w-[400px] shadow-lg"
        ></video>
        <button
          onClick={togglePlay}
          className="absolute bottom-4 right-4 bg-white border border-[#5C8374] text-[#5C8374] px-4 py-2 rounded-full shadow hover:bg-gray-100"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default Container;
