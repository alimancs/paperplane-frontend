import CloseIcon from "../../assets/icons/CloseIcon";
import EmailIcon from "../../assets/icons/EmailIcon";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import React from "react";

interface props {
    toSignIn:()=>void,
    toIntro:()=>void,
}

const RegOptions:React.FC<props> = ( { toSignIn, toIntro }) => {
    return (
        <div className="h-screen w-screen flex flex-col pb-[30px] gap-3 bg-[#ecf0f1]">
            <button onClick={toIntro} className="h-[40px] hover:scale-105 hover:opacity-50 cursor-pointer w-[40px] absolute z-50 top-[3%] right-[3%]"><CloseIcon size='25px' /></button>
            <div className="flex-1 flex gap-3 flex-col justify-center items-center text-[#17124f]">
                <span className="font-semibold text-[18px]">Join Paperplane.</span>
                <div className="flex flex-col mt-[20px] gap-2">
                    <button className="px-[20px] text-[14px] rounded-[20px] flex flex-row justify-center items-center gap-3 h-[40px] border-1 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out border-[#17124f]">
                        <GoogleIcon/>Sign Up with Google
                    </button>
                    <button className="px-[20px] text-[14px] rounded-[20px] flex flex-row justify-center items-center gap-3 h-[40px] border-1 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out border-[#17124f]">
                        <EmailIcon/>Sign Up with email
                    </button>
                </div>
                <div className="mt-[20px]">Already have an account? <span onClick={toSignIn} className="text-[#3969f7] cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">Sign In</span></div>
            </div>
            <div className="mx-[10%] md:mx-[25%]">
                <p className="text-center text-[13px] text-gray-600">Click "Sign Up" to agree to Paperplane's 
                    <span className="underline"> Terms of service </span> 
                    and acknowledge that Paperplane 
                    <span className="underline"> Privacy Policy </span>
                    applies to you.
                </p>
            </div>
        </div>
    )
}

export default RegOptions;