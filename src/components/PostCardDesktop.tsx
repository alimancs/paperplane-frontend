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
}

const PostCardDesktop:React.FC<components> = ( { timestamp, title, comments, likes, savedByClient, summary, image, slug } ) => {

    const options = [
        { title:"Show less like this", isDangerButton:false, action:()=>{console.log("Show less like this")} },
        { title:"Follow author", isDangerButton:false, action:()=>{console.log("Follow author")} },
        { title:"Report story", isDangerButton:true, action:()=>{console.log("Report story")} },
    ]

    const EllipsisIcon = ()=><Ellipsis strokeWidth={2}  className="text-gray-500 transition-all duration-300 ease-in-out hover:text-gray-900" size={'22px'}/>;

    return (
        <Link to={`/@username/${slug}`} className={`md:flex hidden border-b border-gray-200 flex-row w-full md:px-0 px-5 text-gray-900 hover:cursor-pointer justify-between items-center h-[300px] md:h-[250px]`}>
            <div className="w-[68%] flex flex-col h-full  justify-center">
                <ProfileTag className={"mb-5"}/>
                <span className={`font-extrabold leading-tight text-[16px] md:text-[18px]`}>
                    { title }
                </span>
                <span className={`font-ptsans-regular text-gray-500 mt-2 leading-tight text-[15px]`}>
                    {summary}
                </span>
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
            <img className="w-[26%] md:h-[110px] h-[60px]" src={image}/>
        </Link>
    )
}

export default PostCardDesktop;