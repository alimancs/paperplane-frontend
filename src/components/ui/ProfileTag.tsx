import React from "react";

interface component {
    className:string;
}

const ProfileTag:React.FC<component> = ( { className } ) => {
    return (
        <div className={`flex flex-row items-center gap-2 ${className}`}>
            <div className="h-[20px] rounded-full overflow-hidden w-[20px]">
                <img src="/elon.webp" className="w-[100%] h-[100%]" />
            </div>
            <span className="font-ptsans-regular text-[14px]">Elon musk</span>
        </div>
    )
}

export default ProfileTag;