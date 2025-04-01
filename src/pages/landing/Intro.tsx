import ChevronIcon from "../../assets/icons/ChevronIcon";
import Loader from "../general-components/Loader";
import React from "react";

interface props {
    isLoggedIn:boolean,
    getStarted:()=>void,
}

const Intro:React.FC<props> = ( { isLoggedIn, getStarted } ) => {
    return (
        <div className="h-screen w-screen flex flex-col justify-between gap-4 bg-[#ecf0f1]">
            <div className="h-[70px] px-[3%] border-b-[0.5px] border-b-[#17124f] flex flex-row justify-between items-center text-[#17124f]">
                <span className="text-[24px] font-semibold text-center">Paperplane</span>
                { !isLoggedIn ? <Loader/> : (
                    <button onClick={getStarted} className={`h-[40px] w-[150px] transition-all ease-in-out hover:bg-[#55517e] cursor-pointer text-[14px] duration-500 bg-[#17124f] text-[#ecf0f1] rounded-[30px]`}>Get Started</button>
                )
                }
            </div>
            <div className="flex flex-col justify-center items-start px-[3%]">
                <div className="flex flex-col gap-4">
                    <div className="md:max-w-[55%] max-w-[80%]">
                        <span style={{lineHeight:'35px'}} className="text-[50px] text-[#17124f] font-extrabold">Human stories & ideas</span>
                    </div>
                    <div className="md:max-w-[60%]">
                        <span style={{lineHeight:'21px'}} className="text-[#17124f] text-[25px]">A place to read, write, and deepen your understanding.</span>
                    </div>
                </div>
                <button className="px-[40px] mt-[45px] flex flex-row gap-2 justify-center items-center bg-[#44bd32] transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#538f49] rounded-[35px] text-[white] h-[45px]">
                    Start reading
                    <ChevronIcon size="15px" bg="white"/>
                </button>
            </div>
            <div></div>
            <p className="text-center absolute mx-[20px] bottom-[15px] text-[12px] text-gray-600">&copy; 2025 Paperplane. All rights reserved.</p>
        </div>
    )
}

export default Intro;