import React from "react";
import CategoryCarousel from "./components/CategoryCarousel";

const Feed: React.FC = () => {
  return (
    <div className="flex-[0.69] md:px-[10%] pt-[20px] pb-5 min-h-[90vh] overflow-hidden">
      <CategoryCarousel/>
    </div>
  );
};

export default Feed;