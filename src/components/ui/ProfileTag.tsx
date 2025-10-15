import React from "react";
import CircleShapeImage from "./CircleShapeImage";
import { Link } from "react-router-dom";

interface component {
    className:string;
    username:string;
    pp:string;
    fullname:string;
}

const ProfileTag:React.FC<component> = ( { className, username, pp, fullname } ) => {
    return (
        <Link to={`/${username}`} className={`flex flex-row items-center gap-2 ${className}`}>
            <CircleShapeImage src={pp} alt={"Elon musk"} size={22}/>
            <span className="font-ptsans-regular text-[14px]">{fullname}</span>
        </Link>
    )
}

export default ProfileTag;