import React from "react";
import colors from "../../utils/colors";
import { useNavigate } from "react-router-dom";
import PlainHorizontalNavigations from "../../components/ui/PlainHorizontalNavigation";
import HorizontalNavigationCarousel from "../../components/ui/HorizontalNavigationCarousel";

const SettingsNotifications: React.FC = () => {
    const navigate = useNavigate();

    const settingsNavigation = [
        { title:"Account", url:"/me/settings", current:false }, 
        { title:"Publishing", url:"/me/settings/publishing", current:false },
        { title:"Notifications", url:"/me/settings/notifications", current:true },
        { title:"Membership & payment", url:"/me/settings/membership", current:false },
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
                        <span className="text-gray-900">Recommended reading</span>
                        <span className="text-gray-500 text-start">Featured stories, columns and collections we think you&apos;ll enjoy based on your reading history.</span>
                    </div>
                    <input className="accent-blue-600 h-[17px] w-[17px]" type="checkbox"/>
                </button>
                <div className="w-full flex flex-col gap-6 border-t-[0.1px] pt-6 border-t-gray-300">
                    <button className="w-full flex flex-row transition-all justify-between ease-in-out duration-300 cursor-pointer items-start hover:text-gray-900 text-gray-500">
                        <span className="text-gray-900">Follows and matching highlights</span>
                        <input className="accent-blue-600 h-[17px] w-[17px]" type="checkbox"/>
                    </button>
                    <button className="w-full flex flex-row transition-all justify-between ease-in-out duration-300 cursor-pointer items-start hover:text-gray-900 text-gray-500">
                        <span className="text-gray-900">Replies to your responses</span>
                        <input className="accent-blue-600 h-[17px] w-[17px]" type="checkbox"/>
                    </button>
                    <button className="w-full flex flex-row transition-all justify-between ease-in-out duration-300 cursor-pointer items-start hover:text-gray-900 text-gray-500">
                        <span className="text-gray-900">Activity on your published stories</span>
                        <input className="accent-blue-600 h-[17px] w-[17px]" type="checkbox"/>
                    </button>
                </div>
                <div className="w-full flex flex-col gap-6 border-t-[0.1px] pt-6 border-t-gray-300">
                <button className="w-full flex flex-row transition-all justify-between ease-in-out duration-300 cursor-pointer items-start hover:text-gray-900 text-gray-500">
                    <div className="flex flex-col items-start gap-1">
                        <span className="text-gray-900">Allow email notifications</span>
                        <span className="text-gray-500 text-start">You&apos;ll still receive administrative emails even if this settings is off.</span>
                    </div>
                    <input className="accent-blue-600 h-[17px] w-[17px]" type="checkbox"/>
                </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsNotifications;