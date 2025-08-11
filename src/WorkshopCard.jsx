import React from "react";

const WorkshopCard = ({ image, title, description, date, duration, language, price, joined, isSignature }) => {
  return (
    <div id="Workshop" className="flex items-center bg-gray-50 rounded-xl shadow p-4 mb-6">
      <div className="w-1/3">
        <img src={image} alt={title} className="rounded-xl object-cover" />
      </div>
      <div className="w-2/3 px-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          {isSignature && (
            <span className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
              ⭐ Signature Workshop
            </span>
          )}
        </div>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex gap-6 mt-3 text-sm text-gray-700">
          <span>📅 {date}</span>
          <span>⏳ {duration}</span>
          <span>🌐 {language}</span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700">
            Register Now ₹{price}
          </button>
          <span className="text-sm text-red-500">{joined} have already joined</span>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
