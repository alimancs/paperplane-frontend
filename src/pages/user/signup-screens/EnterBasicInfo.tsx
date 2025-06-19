import React, { useState } from "react";
import Loader from "../../general-components/Loader";
import axios from "axios";

interface props {
    firstname:string,
    setFirstname:(value:string)=>void,
    lastname:string,
    setLastname:(value:string)=>void,
    username:string,
    setUsername:(value:string)=>void,
    nextScreen:()=>void,
}

const EnterBasicInfo:React.FC<props> = ( { firstname, setFirstname, lastname, setLastname, nextScreen, username, setUsername }) => {
    
    const isFirstnameValid = firstname !== '';
    const isLastnameValid = lastname !== '';

    return (
        <div className="flex-1 flex gap-3 flex-col justify-center items-center text-[#17124f]">
            <div className="flex flex-col mt-[20px] md:w-[400px] w-[80%]">
                <span className="font-semibold text-center text-[18px]">Enter your personal details.</span>
                <div className="flex flex-col mt-[10px]">
                    <label>Fullname</label>
                    <div className="flex flex-row justify-between items-center">
                        <input id="firstname" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}  className="w-[48%] outline-none px-3  border-[0.5px] h-[40px] border-[#17124f] bg-transparent" placeholder="Firstname" type="Firstname"/>
                        <input id="lastname" value={lastname} onChange={(e)=>{setLastname(e.target.value)}}  className="w-[48%] outline-none  px-3 border-[0.5px] h-[40px] border-[#17124f] bg-transparent" placeholder="Lastname" type="Lastname"/>
                    </div>
                </div>
                <div className="flex flex-col mt-[10px]">
                    <label>Username</label>
                    <input id="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}  className="w-[100%] mt-[10px] outline-none mx-auto px-[10px] border-[0.5px] h-[40px] border-[#17124f] bg-transparent" placeholder="Enter your desired username..." type="Username"/>
                </div>
                <button onClick={nextScreen} className="px-[20px] mx-auto w-[100%] text-center mt-[15px] text-[14px] flex flex-row justify-center items-center gap-3 text-[#ecf0f1] h-[35px] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out bg-[#17124f]">
                    { 'Continue'}
                </button>
            </div>
        </div>
    )
}

export default EnterBasicInfo;