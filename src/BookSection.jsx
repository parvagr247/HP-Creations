import React, { useRef } from 'react';
import BookCard from './BookCard';

const books = [
  {
    image: 'https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
    title: 'Quick & Easy Food Book',
    tags: ['Hardcover']
  },
  {
    image: 'https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
    title: 'Combo Pack of 4',
    tags: ['Hardcover']
  },
  {
    image: 'https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
    title: 'Combo Pack of 3',
    tags: ['Hardcover']
  },
  {
    image: 'https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
    title: 'Combo Pack of 2',
    tags: ['Hardcover']
  },
  {
    image: 'https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
    title: 'Satvic Food Book 1',
    tags: ['Hardcover', 'eBook']
  },
  // Add 5 more similar
];

while (books.length < 10) {
  books.push({
    image: 'https://example.com/book-placeholder.jpg',
    title: `Sample Book ${books.length + 1}`,
    tags: ['Hardcover']
  });
}

const BookSection = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="Books" className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-1">Books</h2>
      <p className="text-gray-500 mb-4">From deep philosophy to delicious recipes</p>

      <div className="relative">
        {/* Scroll Buttons */}
        <button
          className="absolute left-0 top-1/3 z-10 bg-white shadow-md p-2 rounded-full"
          onClick={() => scroll('left')}
        >
          ◀
        </button>
        <button
          className="absolute right-0 top-1/3 z-10 bg-white shadow-md p-2 rounded-full"
          onClick={() => scroll('right')}
        >
          ▶
        </button>

        {/* Scrollable Container */}
        <div
          className="flex overflow-x-auto scrollbar-hide space-x-4 py-2 px-2"
          ref={scrollRef}
        >
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="bg-[#a1735b] text-white px-6 py-2 rounded-full hover:bg-[#865b44] transition">
          See All Books
        </button>
      </div>
    </div>
  );
};

export default BookSection;
