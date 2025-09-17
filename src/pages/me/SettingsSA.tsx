import React from "react";
import colors from "../../utils/colors";
import { useNavigate } from "react-router-dom";
import PlainHorizontalNavigations from "../../components/ui/PlainHorizontalNavigation";
import HorizontalNavigationCarousel from "../../components/ui/HorizontalNavigationCarousel";
import { SquareArrowOutUpRight } from "lucide-react";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import XIcon from "../../assets/icons/XIcon";

const SettingsSA: React.FC = () => {
    const navigate = useNavigate();

    const settingsNavigation = [
        { title:"Account", url:"/me/settings", current:false }, 
        { title:"Publishing", url:"/me/settings/publishing", current:false },
        { title:"Notifications", url:"/me/settings/notifications", current:false },
        { title:"Membership & payment", url:"/me/settings/membership", current:false },
        { title:"Security & apps", url:"/me/settings/security", current:true }
    ]

    return (
        <div className="w-full">
            <div className="w-full flex flex-row justify-start items-center">
                <span className={`md:text-[40px] text-[23px] font-bold text-gray-900`}>Settings</span>
            </div>

            <PlainHorizontalNavigations className="md:flex hidden" navs={settingsNavigation}/>
            <HorizontalNavigationCarousel className="md:hidden flex mt-5" navs={settingsNavigation}/>
            <div className="py-6 flex flex-col text-[14px] gap-6">
                <button className="w-full flex flex-col gap-1 transition-all ease-in-out duration-300 cursor-pointer items-start text-gray-500">
                    <span className="text-red-600">Sign out of all other sessions</span>
                    <span>Sign out of other sessions in other browsers or on other computers.</span>
                </button>
                <button className="w-full flex flex-col gap-1 transition-all ease-in-out duration-300 cursor-pointer items-start text-gray-500">
                    <span className="text-gray-900">Download your information</span>
                    <span>Download a copy of your information you&apos;ve shared on paperplane to zip file.</span>
                </button>
                <div className="w-full flex flex-col gap-6 border-t-[0.1px] pt-6 border-t-gray-300">
                    <button className="w-full flex flex-row transition-all justify-between ease-in-out duration-300 cursor-pointer items-start hover:text-gray-900 text-gray-500">
                        <div className="flex flex-row gap-5 items-start">
                            <GoogleIcon size="20px" />
                            <div className="flex flex-col items-start gap-1 h-fit">
                                <span className="text-gray-900">Connect Google</span>
                                <span className="text-gray-500">we&apos;ll never post to Google or message your friends without your permission.</span>
                            </div>  
                        </div>
                        <SquareArrowOutUpRight size={20} strokeWidth={1}/>
                    </button>

                    <button className="w-full flex flex-row transition-all justify-between ease-in-out duration-300 cursor-pointer items-start hover:text-gray-900 text-gray-500">
                        <div className="flex flex-row gap-5 items-start">
                            <XIcon size="20px" />
                            <div className="flex flex-col items-start gap-1 h-fit">
                                <span className="text-gray-900">Connect X</span>
                                <span className="text-gray-500">we&apos;ll never post to X or message your friends without your permission.</span>
                            </div>  
                        </div>
                        <SquareArrowOutUpRight size={20} strokeWidth={1}/>
                    </button>

                    <button className="w-full flex flex-row transition-all justify-between ease-in-out duration-300 cursor-pointer items-start hover:text-gray-900 text-gray-500">
                        <div className="flex flex-row gap-5 items-start">
                            <FacebookIcon size="20px" />
                            <div className="flex flex-col items-start gap-1 h-fit">
                                <span className="text-gray-900">Connect Facebook</span>
                                <span className="text-gray-500">we&apos;ll never post to Facebook or message your friends without your permission.</span>
                            </div>  
                        </div>
                        <SquareArrowOutUpRight size={20} strokeWidth={1}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsSA;