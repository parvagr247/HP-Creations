import React from 'react';

const BookCard = ({ image, title, tags }) => {
  return (
    <div id="Books " className="min-w-[180px] flex-shrink-0 mx-2 text-center">
      <img src={image} alt={title} className="rounded-xl w-full h-[240px] object-cover mb-2" />
      <h3 className="font-semibold text-sm">{title}</h3>
      <div className="flex justify-center gap-2 mt-1 flex-wrap">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs border rounded-full px-2 py-1 text-gray-600">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
