import PlainHorizontalNavigations from "../../../components/ui/PlainHorizontalNavigation";
import React from "react";
import { LucideCaptionsOff } from "lucide-react";


const Featured: React.FC = () => {
    const navs = [
        { title:"For you", url:'/', current:false },
        { title:"Featured", url:'?feed=featured', current:true }
    ]

    return (
        <div className="w-full">
            <PlainHorizontalNavigations className="md:mx-0 mx-[4%]" navs={navs}/>
            <div className="mt-4 h-fit w-full py-[30px] text-center px-9 flex flex-col justify-center items-center gap-[15px]">
                <LucideCaptionsOff className="text-gray-300" strokeWidth={0.5} size={120}/>
                <span>
                    No featured stories
                </span>
                <span className="text-[13px] text-gray-500 md:w-[60%] w-[90%]">
                    Featured stories from the publications you follow will appear here.
                </span>
            </div>
        </div>
    );
};

export default Featured;