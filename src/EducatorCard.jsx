import React from "react";

const EducatorCard = ({ image, name, role, bgColor }) => {
  return (
    <div className="flex flex-col items-center text-center w-[150px] mx-3">
      <div
        className="w-[130px] h-[130px] rounded-[20px] flex items-center justify-center mb-3"
        style={{ backgroundColor: bgColor }}
      >
        <img
          src={image}
          alt={name}
          className="w-[100px] h-[100px] object-cover rounded-full border-4 border-white shadow"
        />
      </div>
      <h3 className="font-semibold text-sm">{name}</h3>
      <p className="text-gray-500 text-xs mt-1">{role}</p>
    </div>
  );
};

export default EducatorCard;
