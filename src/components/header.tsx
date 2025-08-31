import React, { useState } from "react";
import { Bell, Search, UserCircle2, PenBox, User, BarChart, Bookmark, BookOpenText  } from "lucide-react";
import colors from "../utils/colors";
import { InputWithIcon } from "./ui/Input";
import { useNavigate } from "react-router-dom";

const Header:React.FC = () => {

    const [ popUpNav, setPopUpNav] = useState(false);
    const navigate = useNavigate();

    const togglePopUpNav = () => {
        setPopUpNav(!popUpNav);
    };

    const navigateTo = (path: string) => {
        navigate(path);
        if (popUpNav) togglePopUpNav();
    };

    return (
        <>
        <div className={`h-[70px] z-[1000] fixed bg-white flex flex-row justify-between items-center md:px-10 px-4 w-full border-b-[0.1px] border-b-gray-200`}>
            <div className="h-fit w-fit flex flex-row items-center gap-2">
                <span onClick={() => { navigateTo("/"); }} className={`text-[24px] text-[${colors.primary}] cursor-pointer font-lobster text-center`}>Paperplane</span>
                <div className="hidden md:flex flex-row items-center gap-2">
                    <InputWithIcon
                    setVal={() => {}}
                    val=""
                    type="text"
                    placeholder="Search..."
                    className={"rounded-[20px]"}
                    icon={<Search strokeWidth={1} className={`md:h-6 md:w-6 h-7 w-7text-[${colors.primary}]`} />}
                    />
                </div>
            </div>
            <div className="flex flex-row items-center gap-5 md:gap-7">
                <button className="md:hidden flex cursor-pointer hover:bg-gray-100 rounded-full p-1 transition-all duration-300 ease-in-out">
                    <Search strokeWidth={1} className={`md:h-5 md:w-5 h-7 w-7 hover:text-[${colors.secondary}] text-[${colors.primary}]`}/>
                </button>
                <button className="md:flex hidden cursor-pointer hover:bg-gray-100 rounded-full hover:px-3 transition-all duration-300 ease-in-out flex-row items-center gap-1">
                    <PenBox strokeWidth={1} className={`md:h-5 md:w-5 h-7 w-7 text-gray-500 hover:text-[${colors.primary}]`}/>
                    <span className={`md:text-[14px] text-[17px]  font-ptsans-regular text-gray-500 hover:text-[${colors.primary}]`}>Write</span>
                </button>
                <button className="cursor-pointer hover:bg-gray-100 rounded-full p-1 transition-all duration-300 ease-in-out">
                    <Bell strokeWidth={1} className={`md:h-5 md:w-5 h-7 w-7 text-gray-500 hover:text-[${colors.primary}]`}/>
                </button>
                <button onClick={togglePopUpNav} className={`${popUpNav ? "border-gray-500" : "border-transparent"} cursor-pointer hover:bg-gray-100 border rounded-full p-1 transition-all duration-300 ease-in-out`}>
                    <UserCircle2 strokeWidth={1} className={`h-7 w-7 text-gray-500 hover:text-[${colors.primary}]`}/>
                </button>
            </div>
        </div>

        { popUpNav && (
            <div className={`bg-white border border-gray-200 rounded-[3px] flex flex-col shadow-md absolute h-[calc(100vh-80px)] top-[70px] right-0 w-[300px]`}>
                <div className="flex flex-col border-b-[0.1px] pl-4 border-gray-200 py-4">
                    <button onClick={() => { navigateTo("/@profile"); }} className="flex flex-row items-center gap-2 p-2 cursor-pointer text-gray-500 hover:text-gray-900 transition-all duration-300 ease-in-out">
                        <User strokeWidth={1} className={`md:h-6 md:w-6 h-7 w-7`}/>
                        <span className={`md:text-[14px] text-[17px]  font-ptsans-regular `}>Profile</span>
                    </button>
                    <button className="flex flex-row items-center gap-2 p-2 cursor-pointer text-gray-500 hover:text-gray-900 transition-all duration-300 ease-in-out">
                        <Bookmark strokeWidth={1} className={`md:h-6 md:w-6 h-7 w-7`}/>
                        <span className={`md:text-[14px] text-[17px]  font-ptsans-regular `}>Library</span>
                    </button>
                    <button className="flex flex-row items-center gap-2 p-2 cursor-pointer text-gray-500 hover:text-gray-900 transition-all duration-300 ease-in-out">
                        <BookOpenText strokeWidth={1} className={`md:h-6 md:w-6 h-7 w-7`}/>
                        <span className={`md:text-[14px] text-[17px]  font-ptsans-regular `}>Stories</span>
                    </button>
                    <button className="flex flex-row items-center gap-2 p-2 cursor-pointer text-gray-500 hover:text-gray-900 transition-all duration-300 ease-in-out">
                        <BarChart strokeWidth={1} className={`md:h-6 md:w-6 h-7 w-7`}/>
                        <span className={`md:text-[14px] text-[17px]  font-ptsans-regular `}>Analytics</span>
                    </button>
                </div>
                <div className="flex flex-col border-b-[0.1px] pl-5 border-gray-200 py-4">
                    <button className={`md:text-[14px] text-[17px]  text-left p-1 cursor-pointer w-full font-ptsans-regular text-gray-500 hover:text-gray-900 transition-all duration-300 ease-in-out`}>Settings</button>
                    <button className={`md:text-[14px] text-[17px]  text-left p-1 cursor-pointer w-full font-ptsans-regular text-gray-500 hover:text-gray-900 transition-all duration-300 ease-in-out`}>Refine recommendations</button>
                    <button className={`md:text-[14px] text-[17px]  text-left p-1 cursor-pointer w-full font-ptsans-regular text-gray-500 hover:text-gray-900 transition-all duration-300 ease-in-out`}>Manage publications</button>
                    <button className={`md:text-[14px] text-[17px]  text-left p-1 cursor-pointer w-full font-ptsans-regular text-gray-500 hover:text-gray-900 transition-all duration-300 ease-in-out`}>Help</button>
                </div>
                <div className="flex flex-col border-b-[0.1px] pl-5 border-gray-200 py-4">
                    <button className={`md:text-[14px] text-[17px]  text-left p-1 cursor-pointer w-full font-ptsans-regular text-gray-500 hover:text-gray-900 transition-all duration-300 ease-in-out`}>Apply for author verification</button>
                    <button className={`md:text-[14px] text-[17px]  text-left p-1 cursor-pointer w-full font-ptsans-regular text-gray-500 hover:text-gray-900 transition-all duration-300 ease-in-out`}>Gift a membership</button>
                </div>
                <div className="flex flex-col pl-5 py-4">
                    <button className={`md:text-[14px] text-[17px]  text-left p-1 flex flex-col gap-1 cursor-pointer w-full font-ptsans-regular text-gray-500 hover:text-gray-900 transition-all duration-300 ease-in-out`}>
                        <span>Sign out</span>
                        <span className="text-[12px]">elon*****@gmail.com</span>
                    </button>
                </div>
            </div>
        )}

        </>
    )
}

export default Header;