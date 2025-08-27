import { Ellipsis, Lock, UserCircle2 } from "lucide-react";
import React, { use } from "react";
import colors from "../../utils/colors";
import { useNavigate } from "react-router-dom";
import EllipsisOption from "../../components/ui/EllipsisOption";

const ProfileHome: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full">
            <div className="w-full flex flex-row justify-between items-center">
                <span className={`text-[40px] font-bold text-[${colors.primary}]`}>Elon Musk</span>
                <EllipsisOption
                    className="mt-3"
                    list={[
                        { label: "Copy link to profile", onClick: () => navigate('/@profile/edit') },
                        { label: "Design to profile", onClick: () => navigate('/@profile/settings') },
                    ]}
                />
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
                    <div className="flex flex-row gap-2 items-center">
                        <UserCircle2 className="h-5 w-5 text-gray-400"/>
                        <span className="text-black text-[14px]">Elon Musk</span>
                    </div>
                    <span className={`text-[18px] font-extrabold text-[${colors.primary}]`}>Reading list</span>
                    <div className="w-full flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center">
                            <span className="text-[14px]">No stories</span>
                            <Lock className="h-3 w-3 text-gray-700 inline ml-2"/>
                        </div>
                        <EllipsisOption
                            
                            list={[
                                { label:"Copy link", onClick:()=>{console.log("Copy link")} },
                                { label:"Edit list info", onClick:()=>{console.log("Copy link")} },
                                { label:"Make list public", onClick:()=>{console.log("Copy link")} },
                                { label:"Hide responses", onClick:()=>{console.log("Copy link")} },
                            ]}
                        />
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