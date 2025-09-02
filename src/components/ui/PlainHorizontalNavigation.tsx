import React from "react";
import { useNavigate } from "react-router-dom";

type navigation = {
    title:string;
    url:string;
    current:boolean;
}

interface props {
    className?:string;
    navs:navigation[];
}

const PlainHorizontalNavigations:React.FC<props> = ( { className, navs }) => {
    const navigate = useNavigate();

    return (
        <div className={`${className} w-full flex flex-row mb-2 gap-10 border-b-[0.1px] mt-[35px] border-b-gray-200`}>
            { navs.map( ( { title, url, current }, index ) => {
                if (current) {
                    return (
                        <button key={index} onClick={() => navigate(url)} className="text-[14px] pb-4 border-b-[0.1px] text-gray-900 cursor-pointer border-b-gray-900">
                            {title}
                        </button>
                    )
                } else {
                    return (
                        <button key={index} onClick={() => navigate(url)} className="text-[14px] pb-4 border-b-[0.1px] text-gray-400 cursor-pointer hover:text-gray-900 border-b-transparent">
                            {title}
                        </button>
                    )
                }
            }) }
        </div>
    )
}

export default PlainHorizontalNavigations;