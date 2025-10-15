import React from "react";
import ProfileTag from "./ui/ProfileTag";
import colors from "../utils/colors";
import { BookmarkPlus, Ellipsis, MessageCircle, MinusCircleIcon, ThumbsUp } from "lucide-react";
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
    author: { fullname:string, pp:string, username:string }
}

const PostCardDesktop:React.FC<components> = ( { timestamp, title, comments, likes, savedByClient, summary, image, slug , author} ) => {

    const options = [
        { title:"Show less like this", isDangerButton:false, action:()=>{console.log("Show less like this")} },
        { title:"Follow author", isDangerButton:false, action:()=>{console.log("Follow author")} },
        { title:"Report story", isDangerButton:true, action:()=>{console.log("Report story")} },
    ]

    const EllipsisIcon = ()=><Ellipsis strokeWidth={2}  className="text-gray-500 transition-all duration-300 ease-in-out hover:text-gray-900" size={'22px'}/>;

    return (
        <div className={`md:flex hidden border-b border-gray-200 flex-row w-full md:px-0 px-5 text-gray-900 justify-between items-center h-[300px] md:h-[250px]`}>
            <div className="w-[68%] flex flex-col h-full  justify-center">
                <ProfileTag pp={author.pp} fullname={author.fullname} username={author.username} className={"mb-5"}/>
                <Link to={`/@username/${slug}`} className={`font-extrabold cursor-pointer leading-tight text-[16px] md:text-[18px]`}>
                    { title }
                </Link >
                <Link to={`/@username/${slug}`} className={`font-ptsans-regular cursor-pointer text-gray-500 mt-2 leading-tight text-[15px]`}>
                    {summary}
                </Link >
                <div className="flex flex-row text-[12px] items-center justify-between text-gray-500 mt-5">
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
                    <div className="hidden flex-row md:flex items-center gap-4">
                        <button className="cursor-pointer">
                            <BookmarkPlus fill={savedByClient?"#101828":"transparent"} strokeWidth={1}  className={`${savedByClient?"text-gray-900":"text-gray-500 hover:text-gray-900"} transition-all duration-300 ease-in-out`} size={'22px'}/>
                        </button>
                        <DropdownButton options={options} icon={EllipsisIcon} />
                    </div>
                </div>
            </div>
            <Link to={`/@username/${slug}`} className="w-[26%] hover:opacity-80 transition-all ease-in-out duration-300">
                <img className="w-full md:h-[110px] h-[60px]" src={image}/>
            </Link>
        </div>
    )
}

export default PostCardDesktop;