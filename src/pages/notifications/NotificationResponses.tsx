import React from "react";
import { useNavigate } from "react-router-dom";
import PlainHorizontalNavigations from "../../components/ui/PlainHorizontalNavigation";

const NotificationsResponses: React.FC = () => {
    const navigate = useNavigate();

    const notificationsNavigation = [
        { title:"Notifications", url:"/notifications", current:false }, 
        { title:"Responses", url:"/notifications/r", current:true },
    ]

    return (
        <div className="w-full">
            <div className="w-full flex flex-row justify-start items-center">
                <span className={`md:text-[40px] text-[23px] font-bold text-gray-900`}>Notifications</span>
            </div>

            <PlainHorizontalNavigations className="md:flex hidden" navs={notificationsNavigation}/>
            <div className="py-6 flex flex-col text-[14px] gap-6">
                <div className="flex flex-row justify-between w-full items-center text-[13px]">
                    <span className="text-gray-600">You&apos;re all caught up</span>
                    <span className="text-blue-600">Your stats</span>
                </div>
            </div>
        </div>
    );
};

export default NotificationsResponses;