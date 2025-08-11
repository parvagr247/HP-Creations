import React from "react";
import EducatorCard from "./EducatorCard";

const educators = [
  {
    name: "Subah Saraf",
    role: "Co-founder",
    image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
    bgColor: "#d5ede8"
  },
  {
    name: "Harshvardhan Saraf",
    role: "Co-founder",
    image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
    bgColor: "#b2d37e"
  },
  {
    name: "Harshvardhan Saraf",
    role: "Co-founder",
    image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
    bgColor: "#b2d37e"
  },
  {
    name: "Radhika Gupta",
    role: "Co-Leader of Yoga Wing",
    image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
    bgColor: "#c6957e"
  },
  {
    name: "Akshay Jain",
    role: "Co-Leader of Yoga Wing",
    image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
    bgColor: "#c8a557"
  },
  {
    name: "Rajat Jadon",
    role: "Host of 5AM Challenge\nCo-Leader of the Youth Wing",
    image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
    bgColor: "#a3dadb"
  }
];

const EducatorsSection = () => {
  return (
    <section className="py-10 px-4 text-center">
      <h2 className="text-2xl font-bold">Meet your Seniors</h2>
      <p className="text-gray-500 mb-8">The force behind the CBP program</p>
      <div className="flex justify-center flex-wrap gap-y-4">
        {educators.map((edu, index) => (
          <EducatorCard key={index} {...edu} />
        ))}
      </div>

      <div className="mt-10">
        <button className="bg-[#a1735b] text-white px-8 py-2 rounded-full hover:bg-[#865b44] transition">
          View Entire Team
        </button>
      </div>
    </section>
  );
};

export default EducatorsSection;
