import React from "react";
import ProfileTag from "./ui/ProfileTag";
import colors from "../utils/colors";
import { BookmarkPlus, Ellipsis, MessageCircle, MinusCircleIcon, ThumbsUp } from "lucide-react";

const PostCardMobile:React.FC = () => {
    return (
        <div className={`flex md:hidden border-b-[0.5px] border-gray-200 flex-col w-full px-5 text-[${colors.primary}] hover:cursor-pointer justify-center items-start h-[270px]`}>
            <ProfileTag className={"mb-5"}/>
            <div className="w-full flex flex-row h-fit  justify-between">
                <div className="w-[70%] flex flex-col">
                    <span className={`font-extrabold leading-tight text-[16px]`}>
                        SpaceX delivers four astronauts to the International Space Station
                    </span>
                    <span className={`font-ptsans-regular text-gray-500 mt-2 leading-tight text-[15px]`}>
                        U.S., Russian and Japanese astronauts pulled up
                    </span>
                </div>
                <img className="w-[25%] h-[60px]" src={"/falcon9.webp"}/>
            </div>
            <div className="flex flex-row text-[12px] w-full items-center justify-between text-gray-500 mt-5">
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
                <div className="flex-row flex items-center gap-4">
                    <button className="cursor-pointer">
                        <MinusCircleIcon strokeWidth={1}  className="text-gray-500 transition-all duration-300 ease-in-out hover:text-gray-900" size={'22px'}/>
                    </button>
                    <button className="cursor-pointer">
                        <Ellipsis strokeWidth={2}  className="text-gray-500 transition-all duration-300 ease-in-out hover:text-gray-900" size={'22px'}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostCardMobile;