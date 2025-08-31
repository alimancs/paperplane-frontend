import { UserCircle, UserCircle2 } from "lucide-react";
import React from "react";
import { Outlet } from "react-router-dom";

const ProfileLayout: React.FC = () => {

    const bottomNavs = [
        { nav:"Help", url:"/help" },
        { nav:"Status", url:"/status" },
        { nav:"About", url:"/about" },
        { nav:"Careers", url:"/careers" },
        { nav:"Press", url:"/press" },
        { nav:"Blog", url:"/blog" },
        { nav:"Privacy", url:"/privacy" },
        { nav:"Rules", url:"/rules" },
        { nav:"Terms", url:"/terms" },
        { nav:"Text to speech", url:"/text-to-speech" },
    ]

    return (
       <div className="flex flex-row font-ptsans-regular w-full h-[90vh]">
            <div className="w-full md:w-2/3 overflow-hidden px-[9%] pt-[35px] h-full ">
               <Outlet />
            </div>
            <div className={`border-l-[0.1px] px-[3%] fixed pt-[100px] py-[35px] md:flex flex-col justify-between border-l-gray-200 hidden bottom-0 right-0 h-full w-1/3`}>
                <div className="w-full flex flex-col">
                    <UserCircle2 strokeWidth={1} className="h-25 w-25 text-gray-500"/>
                    <div className="w-full flex flex-col mt-2">
                        <span className="font-semibold text-[15px]">Elon Musk</span>
                        <button className="mt-5 text-left text-[14px] hover:text-blue-950 cursor-pointer text-blue-700">
                            Edit profile
                        </button>
                    </div> 
                </div>
                <div>
                { bottomNavs.map(( { nav, url } ) => {
                    return (
                    <a key={url} href={url} className="text-[11px] mr-2 inline text-left font-ptsans-regular text-gray-500 hover:underline cursor-pointer">
                        {nav}
                    </a>
                    )
                })}
                </div>
                
            </div>
        </div>
    );
};

export default ProfileLayout;