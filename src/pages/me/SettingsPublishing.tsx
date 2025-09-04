import React from "react";
import colors from "../../utils/colors";
import { useNavigate } from "react-router-dom";
import PlainHorizontalNavigations from "../../components/ui/PlainHorizontalNavigation";
import HorizontalNavigationCarousel from "../../components/ui/HorizontalNavigationCarousel";

const SettingsPublishing: React.FC = () => {
    const navigate = useNavigate();
    const settingsNavigation = [
        { title:"Account", url:"/me/settings", current:false }, 
        { title:"Publishing", url:"/me/settings/publishing", current:true },
        { title:"Notifications", url:"/me/settings/notifications", current:false },
        { title:"Membership & payment", url:"/me/settings/membership", current:false },
        { title:"Security & apps", url:"/me/settings/security", current:false }
    ]

    return (
        <div className="w-full">
            <div className="w-full flex flex-row justify-start items-center">
                <span className={`md:text-[40px] text-[23px] font-bold text-[${colors.primary}]`}>Settings</span>
            </div>

            <PlainHorizontalNavigations className="md:flex hidden" navs={settingsNavigation}/>
            <HorizontalNavigationCarousel className="md:hidden flex mt-5" navs={settingsNavigation}/>
            <div className="py-6 flex flex-col text-[14px] gap-6">
                <button className="w-full text-start cursor-pointer ">
                    <span className="text-gray-900">Manage publication</span>
                </button>
            </div>
        </div>
    );
};

export default SettingsPublishing;