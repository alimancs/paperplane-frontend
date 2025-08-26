import { Ellipsis } from "lucide-react";
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
                    list={[
                        { label: "Edit Profile", onClick: () => navigate('/@profile/edit') },
                        { label: "Settings", onClick: () => navigate('/@profile/settings') },
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
        </div>
    );
};

export default ProfileHome;