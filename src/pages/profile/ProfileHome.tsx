import { Ellipsis, Lock } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileTag from "../../components/ui/ProfileTag";
import DropdownButton from "../../components/ui/DropdownButton";

const ProfileHome: React.FC = () => {
    const navigate = useNavigate();

    const EllipsisIcon = ()=><Ellipsis strokeWidth={2}  className="text-gray-500 transition-all duration-300 ease-in-out hover:text-gray-900" size={'22px'}/>;
    const ellipsisOption1 = [
        { title: "Copy link to profile", isDangerButton:false, action: () => navigate('/@profile/edit') },
        { title: "Design to profile", isDangerButton:false, action: () => navigate('/@profile/settings') },
    ]

    const ellipsisOption2 = [
        { title: "Copy link", isDangerButton:false, action: () => console.log("option button clicked") },
        { title: "Edit list info", isDangerButton:false, action: () => console.log("option button clicked") },
        { title: "Make list public", isDangerButton:false, action: () => console.log("option button clicked") },
        { title: "Hide responses", isDangerButton:false, action: () => console.log("option button clicked") },
    ]

    return (
        <div className="w-full">
            <div className="w-full flex flex-row justify-between items-center">
                <span className={`md:text-[40px] text-[25px] font-bold text-gray-900`}>Elon Musk</span>
                <DropdownButton options={ellipsisOption1} icon={EllipsisIcon}/>
            </div>

            <div className="w-full flex flex-row mb-[20px] gap-10 border-b-[0.1px] mt-[35px] border-b-gray-200">
                <button onClick={() => navigate('/@profile')} className="text-[14px] pb-4 text-gray-900 border-b-[0.1px] cursor-pointer border-b-gray-900">
                    Home
                </button>
                <button onClick={() => navigate('/@profile/about')} className="text-[14px] pb-4 border-b-[0.1px] text-gray-400 cursor-pointer hover:text-gray-900 border-b-transparent">
                    About
                </button>
            </div>
            <div className="w-full h-[130px] bg-gray-100 flex flex-row justify-between border-gray-200 border-[0.1px] rounded-[2px]">
                <div className="w-[59%] h-full px-[4%] flex flex-col gap-2 justify-center">
                    <ProfileTag className={"mb-2"}/>
                    <span className={`text-[18px] font-extrabold text-gray-900`}>Reading list</span>
                    <div className="w-full flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center">
                            <span className="text-[14px]">No stories</span>
                            <Lock className="h-3 w-3 text-gray-700 inline ml-2"/>
                        </div>
                        <DropdownButton options={ellipsisOption2} icon={EllipsisIcon}/>
                    </div>
                </div>
                <div className="w-[19%] h-full bg-gray-200"></div>
                <div className="w-[13%] h-full bg-gray-200"></div>
                <div className="w-[8%] h-full bg-gray-200"></div>
            </div>
        </div>
    );
};

export default ProfileHome;