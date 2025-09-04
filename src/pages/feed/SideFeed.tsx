import React from "react";
import colors from "../../utils/colors";
import StaffPickCard from "../../components/StaffPickCard";
import FollowCard from "../../components/FollowCard";
import { BookmarkPlus } from "lucide-react";

const SideFeed: React.FC = () => {
  
  const recommendedTopics = [
    "Writing",
    "Relationships",
    "Money",
    "Politics",
    "Health",
    "Science"
  ]

  const bottomNavs = [
    { nav:"Help", url:"/help" },
    { nav:"Status", url:"/status" },
    { nav:"About", url:"/about" },
    { nav:"Careers", url:"/careers" },
    { nav:"Press", url:"/press" },
    { nav:"Blog", url:"/blog" },
    { nav:"Privacy", url:"/privacy" },
    { nav:"Rules", url:"/rules" },
    { nav:"Terms", url:"/terms" },
    { nav:"Text to speech", url:"/text-to-speech" },
  ]
  return (
    <div className="hidden md:flex flex-col flex-[0.31] px-[10%] pt-9 pb-3 h-fit border-l border-[#dad9eb] overflow-hidden">
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

      <div className="flex flex-col gap-4 mt-5">
        <span className={`font-semibold text-[15px] text-[${colors.primary}]`}>Reading list</span>
        <div className="font-ptsans-regular text-gray-500 text-[14px] gap-1">
          <span>Click the</span>
          <BookmarkPlus strokeWidth={1} size={'25px'} className="inline" color={colors.primary}/>
          <span>{"on any story to easily add it to your reading list or a custom list that you can share."}</span>
        </div>
        <div>
          { bottomNavs.map(( { nav, url } ) => {
            return (
              <a key={url} href={url} className="text-[11px] mr-2 inline text-left font-ptsans-regular text-gray-500 hover:underline cursor-pointer">
                {nav}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  );
};


export default SideFeed;