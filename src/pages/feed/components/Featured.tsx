import PostCardDesktop from "../../../components/PostCardDesktop";
import PostCardMobile from "../../../components/PostCardMobile";
import React from "react";

interface FeaturedProps {
    toForYou: () => void;
}

const Featured: React.FC<FeaturedProps> = ({ toForYou }) => {
    return (
        <div className="w-full">
            <div className="w-full flex flex-row mb-[20px] gap-10 border-b-[0.1px] mt-[15px] border-b-gray-200">
                <button className="text-[14px] pb-4 border-b-[0.1px] text-gray-400 cursor-pointer hover:text-gray-900 border-b-transparent" onClick={toForYou}>
                    For you
                </button>
                <button className="text-[14px] pb-4 text-gray-900 border-b-[0.1px] cursor-pointer border-b-gray-900 ">
                    Featured
                </button>
            </div>
            <div className="mt-4 h-fit w-full py-[30px] text-center px-9 flex flex-col justify-center items-center gap-[20px]">
                <span>
                    No featured stories
                </span>
                <span className="text-[13px] text-gray-500 w-[60%]">
                    Featured stories from the publications you follow will appear here.
                </span>
            </div>
        </div>
    );
};

export default Featured;