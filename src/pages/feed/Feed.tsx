import React from "react";
import CategoryCarousel from "./components/CategoryCarousel";
import PostCardDesktop from "../../components/PostCardDesktop";
import PostCardMobile from "../../components/PostCardMobile";

const Feed: React.FC = () => {
  return (
    <div className="flex-[0.69] md:px-[10%] pt-[20px] pb-5 min-h-[90vh] overflow-hidden">
      <CategoryCarousel className=""/>
      { [0, 0, 0, 0, 0, 0, 0, 0 ].map( () => {
        return (
          <>
            <PostCardDesktop/>
            <PostCardMobile/>
          </>
        )
      })}
    </div>
  );
};

export default Feed;