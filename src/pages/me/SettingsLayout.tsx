import { UserCircle, UserCircle2 } from "lucide-react";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

type Article = {
    title:string;
    url:string;
}

const SettingsLayout: React.FC = () => {
    const navigate = useNavigate();

    const [ suggestedArticles, setSuggestedArticles ] = useState<Article[]>([
        {
            title:"Sign in or sign up in paperplane",
            url:"/test",
        },
        {
            title:"Your profile page",
            url:"/test",
        },
        {
            title:"Writing and publishing your first story",
            url:"/test",
        },
        {
            title:"About paperplane's distribution system",
            url:"/test",
        },
        {
            title:"Get started with partner program",
            url:"/test",
        },
    ])

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
       <div className="flex flex-row font-ptsans-regular w-full min-h-[90vh]">
            <div className="w-full md:w-2/3 md:px-[9%] px-[5%] pt-[35px] h-full ">
               <Outlet />
            </div>
            <div className={`border-l-[0.1px] px-[3%] fixed pt-[100px] py-[35px] md:flex flex-col justify-between border-l-gray-200 hidden bottom-0 right-0 h-full w-1/3`}>
                <div className="w-full flex flex-col gap-4">
                    <span className="mb-2">Suggested help articles</span> 
                    { suggestedArticles.map( ( { title, url }, index) => {
                        return (
                            <button key={index} onClick={()=>{ navigate(url)}} className="w-full text-start cursor-pointer text-gray-500 hover:text-gray-800 text-[14px]">{title}</button>
                        )
                    })}
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

export default SettingsLayout;