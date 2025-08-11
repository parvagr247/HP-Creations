import React from "react";

const SuccessStoryCard = ({ image, title, date, readTime }) => {
  return (
    <div id="Success Stories" className="min-w-[240px] max-w-[240px] bg-white rounded-xl shadow-md overflow-hidden mx-2 flex-shrink-0">
      <img src={image} alt={title} className="w-full h-[160px] object-cover" />
      <div className="p-4 text-sm">
        <h3 className="font-semibold mb-1 text-gray-800">{title}</h3>
        <p className="text-gray-500 mb-2">{date} | {readTime}</p>
        <button className="text-[#a1735b] font-medium hover:underline">
          Read more →
        </button>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
