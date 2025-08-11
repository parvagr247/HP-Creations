import React from "react";

const EducatorCard = ({ image, name, role, bgColor }) => {
  return (
    <div id="Meet the Team" className="flex flex-col items-center text-center w-[150px] mx-3">
      <div
        className="w-[130px] h-[130px] rounded-[20px] flex justify-center items-center mb-3"
        style={{ backgroundColor: bgColor }}
      >
        <img
          src={image}
          alt={name}
          className="mb-9"
        />
      </div>
      <h3 className="font-semibold text-sm">{name}</h3>
      <p className="text-gray-500 text-xs mt-1">{role}</p>
    </div>
  );
};

export default EducatorCard;
