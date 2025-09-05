import React, { useEffect, useRef, useState } from "react";
import colors from "../../utils/colors";
import PlainHorizontalNavigations from "../../components/ui/PlainHorizontalNavigation";
import HorizontalNavigationCarousel from "../../components/ui/HorizontalNavigationCarousel";
import { SquareArrowOutUpRight, UserCircle2 } from "lucide-react";
import EditInformation from "./components/EditInformation";
import EditEmailAddress from "./components/EditEmailAddress";

const SettingsAcc: React.FC = () => {
    const [ isEditInfo, setIsEditInfo ] = useState<boolean>(false);
    const [ isEditEmailAddress, setIsEditEmailAddress ] = useState<boolean>(false)
    const [ visibleContentHeight, setVisibleContentHeight ] = useState<number | string>("");
    const bodyRef = useRef<HTMLDivElement>(null);

    const settingsNavigation = [
        { title:"Account", url:"/me/settings", current:true }, 
        { title:"Publishing", url:"/me/settings/publishing", current:false },
        { title:"Notifications", url:"/me/settings/notifications", current:false },
        { title:"Membership & payment", url:"/me/settings/membership", current:false },
        { title:"Security & apps", url:"/me/settings/security", current:false }
    ];

    const handleEditInfo = () => {
        setIsEditInfo(!isEditInfo);
    };

    const handleEditEmailAddress = () => {
        setIsEditEmailAddress(!isEditEmailAddress);
    };

    useEffect(() => {
        const updateVisibleContentHeight = () => {
            if (bodyRef.current) {
                const rect = bodyRef.current.getBoundingClientRect();
                const height = Math.round(window.innerHeight - rect.top);
                console.log(height);
                setVisibleContentHeight(height);
            }
        }

        updateVisibleContentHeight(); // update on mount
        window.addEventListener("resize", updateVisibleContentHeight); // update on resize

        return () => window.removeEventListener("resize", updateVisibleContentHeight);
    }, []);

    return (
        <div ref={bodyRef} style={{height:isEditInfo?visibleContentHeight:"100%"}} className={`w-full ${isEditInfo?"overflow-y-hidden":""}`}>
            <div className="w-full flex flex-row justify-start items-center">
                <span className={`md:text-[40px] text-[23px] font-bold text-[${colors.primary}]`}>Settings</span>
            </div>

            { isEditInfo && <EditInformation closeModal={handleEditInfo}/> }
            { isEditEmailAddress && <EditEmailAddress closeModal={handleEditEmailAddress}/> }
            
            <PlainHorizontalNavigations className="md:flex hidden" navs={settingsNavigation}/>
            <HorizontalNavigationCarousel className="md:hidden flex mt-5" navs={settingsNavigation}/>
            <div className="py-6 flex flex-col text-[14px] gap-6">
                <button onClick={handleEditEmailAddress} className="w-full flex flex-row hover:text-gray-900 transition-all ease-in-out duration-300 cursor-pointer items-center justify-between text-gray-500">
                    <span className="text-gray-900">Email Address</span>
                    <span>Aliman2952003@gmail.com</span>
                </button>
                <button className="w-full flex flex-row hover:text-gray-900 transition-all ease-in-out duration-300 cursor-pointer items-center justify-between text-gray-500">
                    <span className="text-gray-900">Username & subdomain</span>
                    <span>@Aliman2952003</span>
                </button>
                <button onClick={handleEditInfo} className="w-full flex flex-row transition-all justify-between ease-in-out duration-300 cursor-pointer items-start hover:text-gray-900 text-gray-500">
                    <div className="flex flex-col items-start gap-1">
                        <span className="text-gray-900">Profile information</span>
                        <span className="text-gray-500">Edit photo, name, pronouns, short bio, etc.</span>
                    </div>
                    <div className="w-fit flex flex-row items-start gap-2 text-gray-500">
                        <span>@Aliman2952003</span>
                        <UserCircle2 size={25} strokeWidth={1}/>
                    </div>
                </button>
                <button className="w-full flex flex-row transition-all justify-between ease-in-out duration-300 cursor-pointer items-start hover:text-gray-900 text-gray-500">
                    <div className="flex flex-col items-start gap-1">
                        <span className="text-gray-900">Profile design</span>
                        <span className="text-gray-500">Customize the appearance of your profile.</span>
                    </div>
                    <SquareArrowOutUpRight size={20} strokeWidth={1}/>
                </button>
                <div className="w-full flex flex-col gap-6 border-t-[0.1px] pt-6 border-t-gray-300">
                    <button className="w-full flex flex-row transition-all justify-between ease-in-out duration-300 cursor-pointer items-start hover:text-gray-900 text-gray-500">
                        <div className="flex flex-col items-start gap-1">
                            <span className="text-gray-900">Refine recommendations</span>
                            <span className="text-gray-500">Adjust recommendations by updating what you&apos;re following and more.</span>
                        </div>
                        <SquareArrowOutUpRight size={20} strokeWidth={1}/>
                    </button>
                    <button className="w-full text-start cursor-pointer ">
                        <span className="text-gray-900">Blocked users</span>
                    </button>
                </div>
                <div className="w-full flex flex-col gap-4 border-t-[0.1px] pt-6 border-t-gray-300">
                    <button className="w-full flex flex-col gap-1 transition-all ease-in-out duration-300 cursor-pointer items-start text-gray-500">
                        <span className="text-red-600">Deactivate account</span>
                        <span>Deactivating will suspend your account until ou sign in back.</span>
                    </button>
                    <button className="w-full flex flex-col gap-1 transition-all ease-in-out duration-300 cursor-pointer items-start text-gray-500">
                        <span className="text-red-600">Delete account</span>
                        <span>Permanently delete your account and all your content.</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsAcc;