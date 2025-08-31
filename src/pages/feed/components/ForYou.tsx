import PostCardDesktop from "../../../components/PostCardDesktop";
import PostCardMobile from "../../../components/PostCardMobile";
import React from "react";

interface ForYouProps {
    toFeatured: () => void;
}

const ForYou: React.FC<ForYouProps> = ({ toFeatured }) => {
    return (
        <div className="w-full">
            <div className="w-full flex flex-row mb-[20px] gap-10 border-b-[0.1px] mt-[15px] border-b-gray-200">
                <button className="text-[14px] pb-4 text-gray-900 border-b-[0.1px] cursor-pointer border-b-gray-900">
                    For you
                </button>
                <button onClick={toFeatured} className="text-[14px] pb-4 border-b-[0.1px] text-gray-400 cursor-pointer hover:text-gray-900 border-b-transparent">
                    Featured
                </button>
            </div>
            { [0, 0, 0, 0, 0, 0, 0, 0 ].map( () => {
                return (
                <>
                    <PostCardDesktop/>
                    <PostCardMobile/>
                </>
                )
            })}
        </div>
    );
};

export default ForYou;