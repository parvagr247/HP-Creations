import React from "react";
import WorkshopCard from "./WorkshopCard";

const workshopData = [
  {
    image: "https://example.com/image1.jpg",
    title: "Ultimate Health Challenge",
    description: "Learn 7 revolutionary habits over a span of 21 days to reach your ultimate peak health!",
    date: "4th Aug",
    duration: "21 Days",
    language: "English",
    price: 990,
    joined: 1622,
    isSignature: true,
  },
  {
    image: "https://example.com/image2.jpg",
    title: "Ultimate Health Challenge",
    description: "Learn 7 revolutionary habits over a span of 21 days to reach your ultimate peak health!",
    date: "4th Aug",
    duration: "21 Days",
    language: "English",
    price: 990,
    joined: 1622,
    isSignature: true,
  },
    {
    image: "https://example.com/image1.jpg",
    title: "Ultimate Health Challenge",
    description: "Learn 7 revolutionary habits over a span of 21 days to reach your ultimate peak health!",
    date: "4th Aug",
    duration: "21 Days",
    language: "English",
    price: 990,
    joined: 1622,
    isSignature: true,
  },
    {
    image: "https://example.com/image1.jpg",
    title: "Ultimate Health Challenge",
    description: "Learn 7 revolutionary habits over a span of 21 days to reach your ultimate peak health!",
    date: "4th Aug",
    duration: "21 Days",
    language: "English",
    price: 990,
    joined: 1622,
    isSignature: true,
  }
  // Add 3 more copies (same or modify as needed)
];

const UpcomingWorkshops = () => {
  return (
    <div id="Workshops" className="max-w-5xl mx-auto px-4 py-10 ">
      <h1 className="text-3xl font-bold mb-2 text-center">Upcoming Sessions</h1>
      <p className="text-gray-500 mb-8 text-center">Attend from the comfort of your home</p>
      {workshopData.map((workshop, index) => (
        <WorkshopCard key={index} {...workshop} />
      ))}
    </div>
  );
};

export default UpcomingWorkshops;
