import React from "react";
import colors from "../../utils/colors";
import StaffPickCard from "../../components/StaffPickCard";
import FollowCard from "../../components/FollowCard";

const SideFeed: React.FC = () => {
  
  const recommendedTopics = [
    "Writing",
    "Relationships",
    "Money",
    "Politics",
    "Health",
    "Science"
  ]
  return (
    <div className="hidden md:flex flex-col flex-[0.31] px-[10%] pt-9 pb-3 h-full border-l border-[#dad9eb] overflow-hidden">
      <div className="flex flex-col gap-4">
        <span className={`font-semibold text-[15px] mb-2 text-[${colors.primary}]`}>Staff picks</span>
        <StaffPickCard/>
        <StaffPickCard/>
        <StaffPickCard/>
        <button className="text-[13.5px] text-left font-ptsans-regular text-gray-500 hover:underline cursor-pointer">See the full list</button>
      </div>

      <div className="flex flex-col gap-4 mt-5">
        <span className={`font-semibold text-[15px] mb-2 text-[${colors.primary}]`}>Recommended topics</span>
        <div className="flex flex-row flex-wrap gap-2">
          { recommendedTopics.map( ( topic) => {
            return (
              <button className="bg-gray-100 cursor-pointer text-gray-800 px-3 text-[13px] py-2 rounded-[25px]">
                <span>{topic}</span>
              </button>
            )
          })}
        </div>
        <button className="text-[13.5px] text-left font-ptsans-regular text-gray-500 hover:underline cursor-pointer">See more topics</button>
      </div>

      <div className="flex flex-col gap-4 mt-5">
        <span className={`font-semibold text-[15px] mb-2 text-[${colors.primary}]`}>Who to follow</span>
        <FollowCard/>
        <FollowCard/>
        <FollowCard/>
        <button className="text-[13.5px] text-left font-ptsans-regular text-gray-500 hover:underline cursor-pointer">See more suggestions</button>
      </div>
    </div>
  );
};


export default SideFeed;