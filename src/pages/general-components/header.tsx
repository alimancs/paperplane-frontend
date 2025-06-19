import React from "react";
import { Bell, UserCircle, Search, Book  } from "lucide-react";
import colors from "../../utils/colors";
import { InputWithIcon } from "./ui/Input";

const Header:React.FC = () => {
    return (
        <div className={`h-fit pb-5 pt-9 flex flex-row justify-between items-center md:px-10 px-4 w-screen border-b-[0.1px] border-b-[${colors.line}]`}>
            <div className="h-fit w-fit flex flex-row items-center gap-2">
                <span className={`text-[24px] text-[${colors.primary}] font-extralight text-center`}>PAPERPLANE</span>
                <div className="hidden md:flex flex-row items-center gap-2">
                    <InputWithIcon
                    setVal={() => {}}
                    val=""
                    type="text"
                    placeholder="Search..."
                    icon={<Search strokeWidth={1} className={`h-6 w-6 text-[${colors.primary}]`} />}
                    />
                </div>
            </div>
            <div className="flex flex-row items-center gap-5 md:gap-10">
                <button className="md:hidden flex cursor-pointer hover:bg-gray-300 rounded-full p-1 transition-all duration-300 ease-in-out">
                    <Search strokeWidth={1} className={`h-6 w-6 hover:text-[${colors.secondary}] text-[${colors.primary}]`}/>
                </button>
                <button className="md:flex hidden cursor-pointer hover:bg-gray-300 rounded-full p-1 px-3 transition-all duration-300 ease-in-out flex-row items-center gap-1">
                    <Book strokeWidth={1} className={`h-6 w-6 text-[${colors.primary}]`}/>
                    <span className={`text-[14px] text-[${colors.primary}]`}>Write</span>
                </button>
                <button className="cursor-pointer hover:bg-gray-300 rounded-full p-1 transition-all duration-300 ease-in-out">
                    <Bell strokeWidth={1} className={`h-6 w-6 text-[${colors.primary}]`}/>
                </button>
                <button className="cursor-pointer hover:bg-gray-300 rounded-full p-1 transition-all duration-300 ease-in-ou">
                    <UserCircle strokeWidth={1} className={`h-9 w-9 text-[${colors.primary}]`}/>
                </button>
            </div>
        </div>
    )
}

export default Header;