import { useNavigate } from "react-router-dom";
import ChevronIcon from "../../../assets/icons/ChevronIcon";
import React, { useState } from "react";
import Loader from "../../general-components/Loader";

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

    const navigate = useNavigate();
    const [ sendingEmail, setSendingEmail ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState('Unknwon error');
    const [ showError, setShowError ] = useState(false);


    return (
        <div className="flex-1 flex gap-3 flex-col justify-center items-center text-[#17124f]">
            <div className="flex flex-col mt-[20px] md:w-[400px] w-[80%]">
                <span className="font-semibold text-center text-[18px]">Enter your personal details.</span>
                <div className="flex flex-col mt-[10px]">
                    <label>Fullname</label>
                    <div className="flex flex-row justify-between items-center">
                        <input value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}  className="w-[48%] mt-[10px] rounded-[5px] outline-none mx-auto px-[10px] border-[0.5px] h-[40px] border-[#17124f] bg-transparent" placeholder="Firstname" type="Firstname"/>
                        <input value={lastname} onChange={(e)=>{setLastname(e.target.value)}}  className="w-[48%] mt-[10px] rounded-[5px] outline-none mx-auto px-[10px] border-[0.5px] h-[40px] border-[#17124f] bg-transparent" placeholder="Lastname" type="Lastname"/>
                    </div>
                </div>
                <div className="flex flex-col mt-[10px]">
                    <label>Username</label>
                    <input value={username} onChange={(e)=>{setUsername(e.target.value)}}  className="w-[100%] mt-[10px] rounded-[5px] outline-none mx-auto px-[10px] border-[0.5px] h-[40px] border-[#17124f] bg-transparent" placeholder="Enter your desired username..." type="Username"/>
                </div>
                <span className={`text-center text-red-600 text-[14px] transition-all duration-200 ease-in-out ${showError?'opacity-100':'opacity-0'}`}>{errorMessage}</span>
                <button onClick={nextScreen} className="px-[20px] mx-auto w-[100%] text-center mt-[15px] text-[14px] rounded-[20px] flex flex-row justify-center items-center gap-3 text-[#ecf0f1] h-[35px] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out bg-[#17124f]">
                    Continue
                </button>
            </div>
        </div>
    )
}

export default EnterBasicInfo;