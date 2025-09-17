import React from "react";
import CircleShapeImage from "./ui/CircleShapeImage";

const FollowCard:React.FC = () => {
    const profile = {
        fullname:"Elon Musk",
        bio:"A philantropist and official CEO of tesla, space X and X (formerly twitter).",
        pp:"/elon.webp"
    }
    return (
        <div className={`flex flex-row w-full text-gray-900 hover:cursor-pointer justify-between gap-3 items-start`}>
            <CircleShapeImage alt="Profile Picture" size={35} src={profile.pp}/>
            
            <div className="flex flex-row flex-1 justify-between">
                <div className="w-3/5 flex flex-col">
                    <span className={`font-bold leading-tight text-[14px]`}>
                        {profile?.fullname}
                    </span>
                    <span className={`font-ptsans-regular mt-1 text-gray-500 leading-relaxed text-[13px]`}>
                        {profile?.bio.length > 53 ? (profile?.bio.slice(0, 53) + "...") : profile?.bio }
                    </span>
                </div>
                <button className={`text-[14px] px-5 rounded-[30px] hover:opacity-50 cursor-pointer transition-all duration-200 ease-in-out py-1 h-fit border border-gray-900 items-center justify-between text-gray-900`}>
                    Follow
                </button>
            </div>
        </div>
    )
}

export default FollowCard;