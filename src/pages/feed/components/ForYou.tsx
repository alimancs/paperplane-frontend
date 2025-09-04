import PlainHorizontalNavigations from "../../../components/ui/PlainHorizontalNavigation";
import PostCardDesktop from "../../../components/PostCardDesktop";
import PostCardMobile from "../../../components/PostCardMobile";
import React from "react";

interface ForYouProps {
    toFeatured: () => void;
}

const ForYou: React.FC<ForYouProps> = ({ toFeatured }) => {
    const navs = [
        { title:"For you", url:'/', current:true },
        { title:"Featured", url:'/?feed=featured', current:false }
    ]

    return (
        <div className="w-full">
            <PlainHorizontalNavigations navs={navs}/>
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