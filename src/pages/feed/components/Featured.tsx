import PlainHorizontalNavigations from "../../../components/ui/PlainHorizontalNavigation";
import PostCardDesktop from "../../../components/PostCardDesktop";
import PostCardMobile from "../../../components/PostCardMobile";
import React from "react";

interface FeaturedProps {
    toForYou: () => void;
}

const Featured: React.FC<FeaturedProps> = ({ toForYou }) => {
    const navs = [
        { title:"For you", url:'/', current:false },
        { title:"Featured", url:'/?feed=featured', current:true }
    ]

    return (
        <div className="w-full">
            <PlainHorizontalNavigations navs={navs}/>
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