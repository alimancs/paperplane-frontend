import React from "react";
import CircleShapeImage from "./CircleShapeImage";

interface component {
    className:string;
}

const ProfileTag:React.FC<component> = ( { className } ) => {
    return (
        <div className={`flex flex-row items-center gap-2 ${className}`}>
            <CircleShapeImage src={"/elon.webp"} alt={"Elon musk"} size={22}/>
            <span className="font-ptsans-regular text-[14px]">Elon musk</span>
        </div>
    )
}

export default ProfileTag;