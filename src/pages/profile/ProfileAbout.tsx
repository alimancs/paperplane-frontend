import { Ellipsis } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import EditAbout from "./components/EditAbout";
import About from "./components/About";
import DropdownButton from "../../components/ui/DropdownButton";

const ProfileHome: React.FC = () => {
    const navigate = useNavigate();

    const [ activeComponent, setActiveComponent ] = React.useState("ABOUT");

    const handleActiveComponentChange = (component: string) => {
        setActiveComponent(component);
    };

    const EllipsisIcon = ()=><Ellipsis strokeWidth={2}  className="text-gray-500 transition-all duration-300 ease-in-out hover:text-gray-900" size={'22px'}/>;
    const ellipsisOption = [
        { title: "Edit profile", isDangerButton:false, action: () => navigate('/me/settings') },
    ]

    return (
        <div className="w-full">
            <div className="w-full flex flex-row justify-between items-center">
                <span className={`md:text-[40px] text-[25px] font-bold text-gray-900`}>Elon Musk</span>
                <DropdownButton options={ellipsisOption} icon={EllipsisIcon}/>
            </div>

            <div className="w-full flex flex-row mb-2 gap-10 border-b-[0.1px] mt-[35px] border-b-gray-200">
                <button onClick={() => navigate('/@profile')} className="text-[14px] pb-4 border-b-[0.1px] text-gray-400 cursor-pointer hover:text-gray-900 border-b-transparent">
                    Home
                </button>
                <button onClick={() => navigate('/@profile/about')} className="text-[14px] pb-4 text-gray-900 border-b-[0.1px] cursor-pointer border-b-gray-900">
                    About
                </button>
            </div>
            { activeComponent === "ABOUT" && <About toEdit={() => handleActiveComponentChange("EDIT_ABOUT")} /> }
            { activeComponent === "EDIT_ABOUT" && <EditAbout toAbout={() => handleActiveComponentChange("ABOUT")}  /> }
            <div className="border-t-[0.1px] mt-[35px] border-t-gray-200 py-[35px] flex flex-row">
                <button className="text-blue-700 text-[15px] mt-2">
                    1 Following
                </button>
            </div>
        </div>
    );
};

export default ProfileHome;