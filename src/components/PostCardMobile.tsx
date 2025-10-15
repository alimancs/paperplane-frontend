import React from "react";
import ProfileTag from "./ui/ProfileTag";
import { BookmarkPlus, Ellipsis, MessageCircle, ThumbsUp } from "lucide-react";
import DropdownButton from "./ui/DropdownButton";
import { Link } from "react-router-dom";

interface components {
    title:string,
    summary:string,
    timestamp:string,
    likes:number,
    comments:number,
    savedByClient:boolean,
    image:string,
    slug:string,
    author:{ pp:string, fullname:string, username:string }
}

const PostCardMobile:React.FC<components> = ( { timestamp, title, comments, likes, savedByClient, summary, image, slug, author } ) => {
    const options = [
        { title:"Show less like this", isDangerButton:false, action:()=>{console.log("Show less like this")} },
        { title:"Follow author", isDangerButton:false, action:()=>{console.log("Follow author")} },
        { title:"Report story", isDangerButton:true, action:()=>{console.log("Report story")} },
    ]

    const EllipsisIcon = ()=><Ellipsis strokeWidth={2}  className="text-gray-500 transition-all duration-300 ease-in-out hover:text-gray-900" size={'22px'}/>;

    return (
        <div className={`flex md:hidden border-b-[0.5px] border-gray-200 flex-col w-full px-5 text-gray-900hover:cursor-pointer justify-center items-start h-[270px]`}>
            <ProfileTag pp={author.pp} fullname={author.fullname} username={author.username} className={"mb-5"}/>
            <div className="w-full flex flex-row h-fit  justify-between">
                <div className="w-[70%] flex flex-col">
                    <Link to={`/@username/${slug}`} className={`font-extrabold leading-tight text-[16px]`}>
                        {title}
                    </Link>
                    <Link to={`/@username/${slug}`} className={`font-ptsans-regular text-gray-500 mt-2 leading-tight text-[15px]`}>
                       {summary}
                    </Link>
                </div>
                <Link to={`/@username/${slug}`} className="w-[25%]" >
                    <img className="w-full h-[60px]" src={image}/>  
                </Link >
                
            </div>
            <div className="flex flex-row text-[12px] w-full items-center justify-between text-gray-500 mt-5">
                <div className="flex flex-row gap-3 items-center">
                    <span>{timestamp}</span>
                    <div className="flex flex-row gap-1">
                        <ThumbsUp strokeWidth={1}  className="fill-gray-500" size={'15px'}/>
                        <span>{likes}</span>
                    </div>
                    <div className="flex flex-row gap-1">
                        <MessageCircle strokeWidth={1}  className="fill-gray-500" size={'15px'}/>
                        <span>{comments}</span>
                    </div>
                </div>
                <div className="flex-row flex items-center gap-4">
                    <button className="cursor-pointer">
                        <BookmarkPlus fill={savedByClient?"#101828":"transparent"} strokeWidth={1}  className={`${savedByClient?"text-gray-900":"text-gray-500 hover:text-gray-900"} transition-all duration-300 ease-in-out`} size={'22px'}/>
                    </button>
                    <DropdownButton dropDownPositionClass="ml-[-210px]" options={options} icon={EllipsisIcon}/>
                </div>
            </div>
        </div>
    )
}

export default PostCardMobile;