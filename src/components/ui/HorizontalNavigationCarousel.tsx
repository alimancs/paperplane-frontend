
import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type navigation = {
    title:string;
    current:boolean;
    url:string;
}

interface conponents {
  className?:string;
  navs:navigation[];
}

const HorizontalNavigationCarousel: React.FC<conponents> = ( { className, navs }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [ hideLeftScroll, setHideLeftScroll ] = useState(true);
  const [ hideRightScroll, setHideRightScroll ] = useState(false);
  const navigate = useNavigate();

  const scroll = (direction: 'left' | 'right') => {

    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 3 : scrollLeft + clientWidth / 3;

      const atLeft = Math.round(scrollLeft) <= 0;
      const atRight = Math.round(scrollLeft + clientWidth) >= scrollWidth;

      setHideRightScroll(atRight);
      setHideLeftScroll(atLeft)

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }

  };


  return (
<div className={`${className} relative w-full flex items-center`}>
  {/* Left button */}
  <button
    onClick={() => scroll('left')}
    className={`absolute left-0 flex flex-row justify-start items-center bg-gradient-to-r from-white via-white to-transparent z-20 py-2 w-[50px] mb-3 transition ${
      hideLeftScroll ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}
  >
    <ChevronLeft strokeWidth={1} size={20} />
  </button>

  {/* Scrollable nav */}
  <div
    ref={scrollRef}
    className="flex space-x-6 overflow-x-hidden w-full border-b border-gray-200 scroll-smooth"
  >
    {navs.map(( { title, url, current }, index) => (
      <div
        key={index}
        onClick={()=>{ navigate(url)}}
        className={`whitespace-nowrap cursor-pointer flex items-center px-2 pb-4 text-[15px] ${
          current
            ? 'border-b border-black text-gray-900'
            : 'text-gray-500 hover:text-gray-900'
        }`}
      >
        {title}
      </div>
    ))}
  </div>

  {/* Right button */}
  <button
    onClick={() => scroll('right')}
    className={`absolute right-0 flex flex-row justify-end items-center bg-gradient-to-l from-white via-white to-transparent z-20 py-2 w-[50px] mb-3 transition ${
      hideRightScroll ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}
  >
    <ChevronRight strokeWidth={1} size={22} />
  </button>
</div>

  );
};

export default HorizontalNavigationCarousel;
