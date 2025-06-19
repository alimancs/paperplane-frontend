
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import colors from '../../../utils/colors';

const categories = [
  'Cryptocurrency',
  'Machine Learning',
  'Self Improvement',
  'Technology',
  'Data Science',
  'Programming',
  'Poetry',
  'Philosophy',
  'Psychology',
];

const CategoryCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {

    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }

  };

  return (
    <div className="flex flex-row gap-2 items-center w-full overflow-hidden border-b pb-3 border-b-[#dad9eb] overflow-x-hidden">
      <div className='bg-transparent pointer-events-none flex justify-between items-center flex-row h-[30px] w-[80%] self-center md:w-[47%] md:ml-[3%] ml-[10%] absolute z-10'>
        <div className={`w-[20%] h-full bg-gradient-to-r from-[#ecf0f1] to-transparent`}/>
        <div className={`w-[20%] h-full bg-gradient-to-l from-[#ecf0f1] to-transparent`}/>
      </div>
      {/* Left Arrow */}
      <button onClick={() => scroll('left')} className="p-2 cursor-pointer text-gray-400 hover:text-black" aria-label="Scroll Left">
        <ChevronLeft strokeWidth={1} />
      </button>

      {/* Scrollable Category List */}
      <div ref={scrollRef} className="flex space-x-6 overflow-x-hidden overflow-y-hidden scroll-smooth no-scrollbar px-8 w-full" >
        {categories.map((category, index) => (
            <div key={index} className="whitespace-nowrap cursor-pointer hover:scale-105 text-gray-600 hover:text-black text-[12px]"  >
              {category}
            </div>
          ))
        }
      </div>

      {/* Right Arrow */}
      <button onClick={() => scroll('right')} className="p-2 cursor-pointer text-gray-400 hover:text-black" aria-label="Scroll Right">
        <ChevronRight strokeWidth={1} />
      </button>
    </div>
  );
};

export default CategoryCarousel;
