import PlainHorizontalNavigations from "../../../components/ui/PlainHorizontalNavigation";
import PostCardDesktop from "../../../components/PostCardDesktop";
import PostCardMobile from "../../../components/PostCardMobile";
import React from "react";


const ForYou: React.FC = () => {
    const navs = [
        { title:"For you", url:'/', current:true },
        { title:"Featured", url:'/?feed=featured', current:false }
    ]

    return (
        <div className="w-full">
            <PlainHorizontalNavigations className="md:mx-0 mx-[4%]"  navs={navs}/>
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