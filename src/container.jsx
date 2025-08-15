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
    <section id='About Us' className="bg-[#d0e1ee] py-12 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[90vh] ">
      <div className="max-w-lg space-y-6 text-center md:text-left md:ml-10">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3 justify-center md:justify-start">
          <div className="w-8 h-8 rounded-full border-2 border-[#015b98]"></div>
          <div>
            <h2 className="text-2xl font-semibold text-[#015b98]">Capacity Building</h2>
            <h2 className="text-xl text-gray-600 -mt-1"> Program </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-lg">
          is a community-driven health revolution to help you reach the
          peak of your physical, mental, and spiritual well-being
        </p>

        {/* Explore Button */}
        <button className="bg-[#015b98] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#033861]">
          Explore Workshops
        </button>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
          <div className="bg-white shadow-md px-6 py-4 rounded-xl text-center">
            <h3 className="text-xl font-bold text-[#0674be]">1 Billion+</h3>
            <p className="text-sm text-gray-600">Total Views</p>
          </div>
          <div className="bg-white shadow-md px-6 py-4 rounded-xl text-center">
            <h3 className="text-xl font-bold text-[#0674be]">8 Million+</h3>
            <p className="text-sm text-gray-600">Total Followers</p>
          </div>
          <div className="bg-white shadow-md px-6 py-4 rounded-xl text-center">
            <h3 className="text-xl font-bold text-[#0674be]">500k+</h3>
            <p className="text-sm text-gray-600">Workshop Graduates</p>
          </div>
        </div>
      </div>

      {/* Right Section (Video) */}
      <div className="mt-10 md:mt-0 md:mr-5 relative">
        <video
          ref={videoRef}
          src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your actual video URL
          autoPlay
          loop
          muted
          className="rounded-3xl w-[320px] md:w-[700px] shadow-lg"
        ></video>
        <button
          onClick={togglePlay}
          className="absolute bottom-4 right-4 bg-white border border-[#015b98] text-[#015b98] px-4 py-2 rounded-full shadow hover:bg-gray-100"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </section>
  );
};

export default Container;
