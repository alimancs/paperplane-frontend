import React, { useEffect } from "react";
import CategoryCarousel from "./components/CategoryCarousel";
import PostCardDesktop from "../../components/PostCardDesktop";
import PostCardMobile from "../../components/PostCardMobile";
import ForYou from "./components/ForYou";
import Featured from "./components/Featured";
import { useLocation, useParams } from "react-router-dom";

const Feed: React.FC = () => {
  const { search } = useLocation();
  const [ section, setSection ] = React.useState("FOR_YOU");

  const handleSectionChange = (newSection: string) => {
    setSection(newSection);
  };

  useEffect(()=> {
    const query = new URLSearchParams(search);
    const feed = query.get("feed");

    if (feed) {
      if (feed === "featured") {
        handleSectionChange("FEATURED");
      }
    } else {
      handleSectionChange("FOR_YOU");
    }
  }, [ search ]);

  return (
    <div className="flex-[0.69] md:px-[10%] pt-[20px] pb-5 min-h-[90vh] overflow-hidden">
      { section === "FOR_YOU" && <ForYou /> }
      { section === "FEATURED" && <Featured /> }
    </div>
  );
};

export default Feed;