import React from "react";
import colors from "../../utils/colors";
import PlainHorizontalNavigations from "../../components/ui/PlainHorizontalNavigation";
import HorizontalNavigationCarousel from "../../components/ui/HorizontalNavigationCarousel";
import { ArrowLeftRight, CircleArrowOutUpLeft, LucideCircleArrowOutUpRight, SquareArrowOutUpLeft, SquareArrowOutUpRight } from "lucide-react";

const SettingsAcc: React.FC = () => {
    const settingsNavigation = [
        { title:"Account", url:"/me/settings", current:true }, 
        { title:"Publishing", url:"/me/settings/publishing", current:false },
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
            <div className="py-4 flex flex-col text-[14px] gap-6">
                <button className="w-full flex flex-row hover:text-gray-900 transition-all ease-in-out duration-300 cursor-pointer items-center justify-between text-gray-500">
                    <span className="text-gray-900">Email Address</span>
                    <span>Aliman2952003@gmail.com</span>
                </button>
                <button className="w-full flex flex-row hover:text-gray-900 transition-all ease-in-out duration-300 cursor-pointer items-center justify-between text-gray-500">
                    <span className="text-gray-900">Username & subdomain</span>
                    <span>@Aliman2952003</span>
                </button>
                <button className="w-full flex flex-row transition-all justify-between ease-in-out duration-300 cursor-pointer items-start hover:text-gray-900 text-gray-500">
                    <div className="flex flex-col items-start gap-1">
                        <span className="text-gray-900">Profile design</span>
                        <span className="text-gray-500">Customize the appearance of your profile</span>
                    </div>
                    <SquareArrowOutUpRight size={20} strokeWidth={1}/>
                </button>
                <button className="w-full flex flex-row transition-all justify-between ease-in-out duration-300 cursor-pointer items-start hover:text-gray-900 text-gray-500">
                    <div className="flex flex-col items-start gap-1">
                        <span className="text-gray-900">Refine recommendations</span>
                        <span className="text-gray-500">Adjust recommendations by updating what you&apos;re following and more</span>
                    </div>
                    <SquareArrowOutUpRight size={20} strokeWidth={1}/>
                </button>
                <button className="w-full text-start cursor-pointer ">
                    <span className="text-gray-900">Blocked users</span>
                </button>
                <button className="w-full flex flex-col gap-1 mt-6 transition-all ease-in-out duration-300 cursor-pointer items-start text-gray-500">
                    <span className="text-red-600">Deactivate account</span>
                    <span>Deactivating will suspend your account until ou sign in back</span>
                </button>
                <button className="w-full flex flex-col gap-1 transition-all ease-in-out duration-300 cursor-pointer items-start text-gray-500">
                    <span className="text-red-600">Delete account</span>
                    <span>Permanently delete your account and all your content</span>
                </button>
            </div>
        </div>
    );
};

export default SettingsAcc;