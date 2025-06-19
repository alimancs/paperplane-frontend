import { useNavigate } from "react-router-dom";
import ChevronIcon from "../../../assets/icons/ChevronIcon";
import React, { useState } from "react";
import Loader from "../../general-components/Loader";
import axios from "axios";

interface props {
    email:string,
    setEmail:(value:string)=>void,
    nextScreen:()=>void,
    toHome:()=>void,
}

const EnterEmail:React.FC<props> = ( { email, setEmail, nextScreen, toHome }) => {

    return (
        <div className="flex-1 flex gap-3 flex-col justify-center items-center text-[#17124f]">
            <div className="flex flex-col mt-[20px] md:w-[400px] w-[80%] gap-2">
                <span className="font-semibold text-center text-[18px]">Sign up with email.</span>
                <label className="text-center text-[15px]">Email</label>
                <input id="emailInput" value={email} onChange={(e)=>{setEmail(e.target.value)}}  className="w-[100%] mt-[10px] outline-none mx-auto px-[10px] border-[0.5px] h-[40px] border-[#17124f] bg-transparent" placeholder="Enter email here..." type="email"/>
                <button onClick={nextScreen} className="px-[20px] mx-auto w-[100%] text-center mt-[15px] text-[14px] flex flex-row justify-center items-center gap-3 text-[#ecf0f1] h-[35px] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out bg-[#17124f]">
                    Continue
                </button>
                <button onClick={toHome} className="px-[20px] text-[#44bd32] text-[14px] mt-[20px] flex flex-row justify-center items-center gap-3 h-[40px] cursor-pointer hover:underline transition-all duration-300 ease-in-out">
                    <div className="h-fit rotate-180 w-fit">
                        <ChevronIcon bg="#44bd32" size="15px"/>
                    </div>
                    All Sign up options
                </button>
            </div>
        </div>
    )
}

export default EnterEmail;