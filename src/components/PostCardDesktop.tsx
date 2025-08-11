import React from "react";
import ProfileTag from "./ui/ProfileTag";
import colors from "../utils/colors";
import { BookmarkPlus, Ellipsis, MessageCircle, MinusCircleIcon, ThumbsUp } from "lucide-react";

const PostCardDesktop:React.FC = () => {
    return (
        <div className={`md:flex hidden border-b border-gray-200 flex-row w-full md:px-0 px-5 text-[${colors.primary}] hover:cursor-pointer justify-between items-center h-[300px] md:h-[250px]`}>
            <div className="w-[68%] flex flex-col h-full  justify-center">
                <ProfileTag className={"mb-5"}/>
                <span className={`font-extrabold leading-tight text-[16px] md:text-[18px]`}>
                    SpaceX delivers four astronauts to the International Space Station
                </span>
                <span className={`font-ptsans-regular text-gray-500 mt-2 leading-tight text-[15px]`}>
                    U.S., Russian and Japanese astronauts pulled up
                </span>
                <div className="flex flex-row text-[12px] items-center justify-between text-gray-500 mt-5">
                    <div className="flex flex-row gap-3 items-center">
                        <span>Aug 8, 2025</span>
                        <div className="flex flex-row gap-1">
                            <ThumbsUp strokeWidth={1}  className="fill-gray-500" size={'15px'}/>
                            <span>356</span>
                        </div>
                        <div className="flex flex-row gap-1">
                            <MessageCircle strokeWidth={1}  className="fill-gray-500" size={'15px'}/>
                            <span>95</span>
                        </div>
                    </div>
                    <div className="hidden flex-row md:flex items-center gap-4">
                        <button className="cursor-pointer">
                            <MinusCircleIcon strokeWidth={1}  className="text-gray-500 transition-all duration-300 ease-in-out hover:text-gray-900" size={'22px'}/>
                        </button>
                        <button className="cursor-pointer">
                            <BookmarkPlus strokeWidth={1}  className="text-gray-500 transition-all duration-300 ease-in-out hover:text-gray-900" size={'22px'}/>
                        </button>
                        <button className="cursor-pointer">
                            <Ellipsis strokeWidth={2}  className="text-gray-500 transition-all duration-300 ease-in-out hover:text-gray-900" size={'22px'}/>
                        </button>
                    </div>
                </div>
            </div>
            <img className="w-[26%] md:h-[110px] h-[60px]" src={"/falcon9.webp"}/>
        </div>
    )
}

export default PostCardDesktop;