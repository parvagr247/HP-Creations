import React, { useRef } from "react";
import SuccessStoryCard from "./SuccessStoryCard";

const stories = [
  {
    image: "https://example.com/story1.jpg",
    title: "Sleeplessness of 8 years, gone in 3 weeks",
    date: "14 Oct, 2021",
    readTime: "6 min read"
  },
  {
    image: "https://example.com/story2.jpg",
    title: "Severe eczema gone, new skin with glow on!",
    date: "14 Oct, 2021",
    readTime: "6 min read"
  },
  {
    image: "https://example.com/story3.jpg",
    title: "How 50 year old Debjani lost 25 kilos in 8 months",
    date: "08 Mar, 2021",
    readTime: "7 min read"
  },
  {
    image: "https://example.com/story4.jpg",
    title: "60-year-old Sangeeta reverses her diabetes...",
    date: "6 Mar, 2021",
    readTime: "6 min read"
  },
  {
    image: "https://example.com/story5.jpg",
    title: "Vedant reversed cholesterol in 5 months",
    date: "6 Mar, 2021",
    readTime: "5 min read"
  },
  // Add more if needed
];

const StoriesSection = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="bg-[#d0e1ee] py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-1">Stories of Success</h2>
        <p className="text-gray-600 mb-6">See how Satvic living has transformed lives</p>

        <div className="relative">
          {/* Scroll buttons */}
          <button
            className="absolute left-0 top-1/3 z-10 bg-white p-2 rounded-full shadow-md"
            onClick={() => scroll("left")}
          >
            ◀
          </button>
          <button
            className="absolute right-0 top-1/3 z-10 bg-white p-2 rounded-full shadow-md"
            onClick={() => scroll("right")}
          >
            ▶
          </button>

          <div
            className="flex overflow-x-auto scrollbar-hide space-x-4 px-2"
            ref={scrollRef}
          >
            {stories.map((story, index) => (
              <SuccessStoryCard key={index} {...story} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <button className="bg-[#a1735b] text-white px-6 py-2 rounded-full hover:bg-[#865b44] transition">
            Read Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
