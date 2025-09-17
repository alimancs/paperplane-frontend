import React from "react";
import colors from "../../utils/colors";
import { useNavigate } from "react-router-dom";
import PlainHorizontalNavigations from "../../components/ui/PlainHorizontalNavigation";
import HorizontalNavigationCarousel from "../../components/ui/HorizontalNavigationCarousel";
import { SquareArrowOutUpRight } from "lucide-react";

const SettingsMP: React.FC = () => {
    const navigate = useNavigate();

    const settingsNavigation = [
        { title:"Account", url:"/me/settings", current:false }, 
        { title:"Publishing", url:"/me/settings/publishing", current:false },
        { title:"Notifications", url:"/me/settings/notifications", current:false },
        { title:"Membership & payment", url:"/me/settings/membership", current:true },
        { title:"Security & apps", url:"/me/settings/security", current:false }
    ]

    return (
        <div className="w-full">
            <div className="w-full flex flex-row justify-start items-center">
                <span className={`md:text-[40px] text-[23px] font-bold text-gray-900`}>Settings</span>
            </div>

            <PlainHorizontalNavigations className="md:flex hidden" navs={settingsNavigation}/>
            <HorizontalNavigationCarousel className="md:hidden flex mt-5" navs={settingsNavigation}/>
            <div className="py-6 flex flex-col text-[14px] gap-6">
                <button className="w-full flex flex-row transition-all justify-between ease-in-out duration-300 cursor-pointer items-start hover:text-gray-900 text-gray-500">
                    <div className="flex flex-col items-start gap-1">
                        <span className="text-gray-900">Upgrade to paperplane membership</span>
                        <span className="text-gray-500">Subscribe for unlimited access to the smartest writers and biggest ideas in paperplane.</span>
                    </div>
                    <SquareArrowOutUpRight size={20} strokeWidth={1}/>
                </button>
            </div>
        </div>
    );
};

export default SettingsMP;