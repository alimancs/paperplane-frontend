import { useNavigate } from "react-router-dom";
import ChevronIcon from "../../../assets/icons/ChevronIcon";
import React, { useState } from "react";
import Loader from "../../general-components/Loader";

interface props {
    password:string,
    setPassword:(value:string)=>void,
    registerUser:()=>void,
    registerInProgress:boolean,
}

const SetupPassword:React.FC<props> = ( { password, setPassword, registerUser, registerInProgress}) => {

    const navigate = useNavigate();
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('Unknwon error');
    const [ showError, setShowError ] = useState(false);

    return (
        <div className="flex-1 flex gap-3 flex-col justify-center items-center text-[#17124f]">
            <div className="flex flex-col mt-[20px] md:w-[400px] w-[80%]">
                { !registerInProgress && (
                    <>
                    <span className="font-semibold text-center text-[18px]">Setup your login password.</span>
                    <div className="flex flex-col mt-[10px]">
                        <label>Password</label>
                        <input value={password} onChange={(e)=>{setPassword(e.target.value)}}  className="w-[100%] mt-[10px] rounded-[5px] outline-none mx-auto px-[10px] border-[0.5px] h-[40px] border-[#17124f] bg-transparent" placeholder="XXX000XXX..." type="Username"/>
                    </div>
                    <div className="flex flex-col mt-[10px]">
                        <label>ConfirmPassword</label>
                        <input value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}  className="w-[100%] mt-[10px] rounded-[5px] outline-none mx-auto px-[10px] border-[0.5px] h-[40px] border-[#17124f] bg-transparent" placeholder="Confirm your password..." type="Username"/>
                    </div>
                    <span className={`text-center text-red-600 text-[14px] transition-all duration-200 ease-in-out ${showError?'opacity-100':'opacity-0'}`}>{errorMessage}</span>
                    <button onClick={registerUser} className="px-[20px] mx-auto w-[100%] text-center mt-[15px] text-[14px] rounded-[20px] flex flex-row justify-center items-center gap-3 text-[#ecf0f1] h-[35px] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out bg-[#17124f]">
                        Continue
                    </button>
                    </>
                )}
                { registerInProgress && (
                        <div className="flex flex-col mt-[20px] md:w-[400px] w-[80%] justify-center items-center h-fit gap-2">
                            <Loader/>
                            <span className="text-[13px] text-center text-gray-500">Setting up your profile...</span>
                        </div>
                )}
            </div>
        </div>
    )
}

export default SetupPassword;