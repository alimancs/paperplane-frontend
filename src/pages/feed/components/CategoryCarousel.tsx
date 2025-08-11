
import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import colors from '../../../utils/colors';

const categories = [
  { cat:'For you', isCurrent:true },
  { cat:'Featured', isCurrent:false },
  { cat:'Cryptocurrency', isCurrent:false },
  { cat:'Machine Learning', isCurrent:false },
  { cat:'Self Improvement', isCurrent:false },
  { cat:'Technology', isCurrent:false },
  { cat:'Data Science', isCurrent:false },
  { cat:'Programming', isCurrent:false },
  { cat:'Poetry', isCurrent:false },
  { cat:'Philosophy', isCurrent:false },
  { cat:'Psychology', isCurrent:false },
];

interface conponents {
  className:string;
}

const CategoryCarousel: React.FC<conponents> = ( { className='' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [ hideLeftScroll, setHideLeftScroll ] = useState(true);
  const [ hideRightScroll, setHideRightScroll ] = useState(false);

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
    <div className={`flex flex-row items-center md:px-0 px-4 mt-[10px] overflow-hidden overflow-x-hidden ${className}`}>

      <div className={`${hideLeftScroll?'justify-end':(hideRightScroll ? 'justify-start':'justify-between' )} bg-transparent pointer-events-none flex items-center flex-row md:ml-[25px] h-[30px] ml-[5.5%] w-[82%] self-center md:w-[47%] absolute z-10`}>
        <div className={`w-[15%] ${hideLeftScroll?'hidden':''} h-full bg-gradient-to-r from-white to-transparent`}/>
        <div className={`w-[15%] ${hideRightScroll?'hidden':''} h-full bg-gradient-to-l from-white to-transparent`}/>
      </div>

      <button onClick={() => scroll('left')} className={`${hideLeftScroll?'opacity-0':'opacity-100'} cursor-pointer text-gray-400 hover:text-black`} aria-label="Scroll Left">
        <ChevronLeft strokeWidth={1} size={'25px'} className='text-gray-500 hover:text-gray-900' />
      </button>

      <div className='flex flex-row justify-center w-[85%]'>
        <div ref={scrollRef} className="flex space-x-6 overflow-x-hidden border-b border-b-gray-200 overflow-y-hidden scroll-smooth h-[55px] no-scrollbar w-[100%]" >
          <div className={`whitespace-nowrap cursor-pointer flex-col flex item-center justify-center hover:scale-105 h-full font-ptsans-regular text-gray-800 hover:text-black text-[14px]`}  >
            <Plus size={'20px'} strokeWidth={1} className='text-gray-500 hover:text-gray-900'/>
          </div>
          {categories.map((category, index) => (
              <div key={index} className={`${category.isCurrent?"border-b border-black":"border-none"} whitespace-nowrap cursor-pointer flex-col flex item-center justify-center hover:scale-105 h-full font-ptsans-regular text-gray-800 hover:text-black text-[14px]`}  >
                {category.cat}
              </div>
            ))
          }
        </div>        
      </div>

      <button onClick={() => scroll('right')} className={`p-2 ${hideRightScroll?'opacity-0':'opacity-100'}  cursor-pointer text-gray-400 hover:text-black`} aria-label="Scroll Right">
        <ChevronRight strokeWidth={1} size={'25px'} className='text-gray-500 hover:text-gray-900' />
      </button>

  </div>
  );
};

export default CategoryCarousel;
