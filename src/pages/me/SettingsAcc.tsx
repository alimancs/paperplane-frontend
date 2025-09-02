import { Ellipsis } from "lucide-react";
import React from "react";
import colors from "../../utils/colors";
import { useNavigate } from "react-router-dom";
import EllipsisOption from "../../components/ui/EllipsisOption";
import EditAbout from "../../pages/profile/components/EditAbout";
import About from "../../pages/profile/components/About";

const SettingsAcc: React.FC = () => {
    const navigate = useNavigate();

    const [ activeComponent, setActiveComponent ] = React.useState("ABOUT");

    const handleActiveComponentChange = (component: string) => {
        setActiveComponent(component);
    };

    return (
        <div className="w-full">
            <div className="w-full flex flex-row justify-start items-center">
                <span className={`text-[40px] font-bold text-[${colors.primary}]`}>Settings</span>
            </div>

            <div className="w-full flex flex-row mb-2 gap-10 border-b-[0.1px] mt-[35px] border-b-gray-200">
                <button onClick={() => navigate('/me/settings')} className="text-[14px] pb-4 text-gray-900 border-b-[0.1px] cursor-pointer border-b-gray-900">
                    Account
                </button>
                <button onClick={() => navigate('/me/settings/publishing')} className="text-[14px] pb-4 border-b-[0.1px] text-gray-400 cursor-pointer hover:text-gray-900 border-b-transparent">
                    Publishing
                </button>
                <button onClick={() => navigate('/me/settings/notifications')} className="text-[14px] pb-4 border-b-[0.1px] text-gray-400 cursor-pointer hover:text-gray-900 border-b-transparent">
                    Notifications
                </button>
                <button onClick={() => navigate('/me/settings/membership')} className="text-[14px] pb-4 border-b-[0.1px] text-gray-400 cursor-pointer hover:text-gray-900 border-b-transparent">
                    Membership & payment
                </button>
                <button onClick={() => navigate('/me/settings/security')} className="text-[14px] pb-4 border-b-[0.1px] text-gray-400 cursor-pointer hover:text-gray-900 border-b-transparent">
                    Security & apps
                </button>
            </div>
            <div className="py-[35px] flex flex-row">
            </div>
        </div>
    );
};

export default SettingsAcc;