import React from "react";
import ProfileTag from "./ui/ProfileTag";
import colors from "../utils/colors";
import { BookmarkPlus, Ellipsis, MessageCircle, MinusCircleIcon, ThumbsUp } from "lucide-react";

const StaffPickCard:React.FC = () => {
    return (
        <div className={`flex flex-col w-full text-[${colors.primary}] hover:cursor-pointer justify-between items-start`}>
            <ProfileTag className={"mb-3"}/>
            <span className={`font-extrabold leading-tight text-[13px]`}>
                From Bumblebee to Optimus Gen-2: An Era of AI Evolution
            </span>
            <span className="text-[12px] items-center justify-between text-gray-500 mt-3">
                Aug 8, 2025
            </span>
        </div>
    )
}

export default StaffPickCard;