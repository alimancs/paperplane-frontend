import React, { useEffect } from "react";
import CategoryCarousel from "./components/CategoryCarousel";
import PostCardDesktop from "../../components/PostCardDesktop";
import PostCardMobile from "../../components/PostCardMobile";
import ForYou from "./components/ForYou";
import Featured from "./components/Featured";
import { useParams } from "react-router-dom";

const Feed: React.FC = () => {
  const params = useParams();
  const [ section, setSection ] = React.useState("FOR_YOU");

  const handleSectionChange = (newSection: string) => {
    setSection(newSection);
  };

  useEffect(()=> {
    const feed = params?.feed;
    console.log(params)
    if (feed) {
      if (feed === "featured") {
        handleSectionChange("FEATURED");
      }
    } else {
      handleSectionChange("FOR_YOU");
    }
  }, [ params ])

  return (
    <div className="flex-[0.69] md:px-[10%] pt-[20px] pb-5 min-h-[90vh] overflow-hidden">
      { section === "FOR_YOU" && <ForYou toFeatured={() => handleSectionChange("FEATURED")} /> }
      { section === "FEATURED" && <Featured toForYou={() => handleSectionChange("FOR_YOU")} /> }
    </div>
  );
};

export default Feed;