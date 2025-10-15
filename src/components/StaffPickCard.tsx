import React from "react";
import ProfileTag from "./ui/ProfileTag";

interface components {
    title:string,
    timestamp:string,
    author:{ pp:string, username:string, fullname:string }
}

const StaffPickCard:React.FC<components> = ( { author, timestamp, title }) => {
    return (
        <div className={`flex flex-col w-full text-gray-900 hover:cursor-pointer justify-between items-start`}>
            <ProfileTag pp={author.pp} username={author.username} fullname={author.fullname} className={"mb-3"}/>
            <span className={`font-extrabold leading-tight text-[13px]`}>
                {title }
            </span>
            <span className="text-[12px] items-center justify-between text-gray-500 mt-3">
                {timestamp}
            </span>
        </div>
    )
}

export default StaffPickCard;