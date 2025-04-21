import CloseIcon from "../../assets/icons/CloseIcon";
import EmailIcon from "../../assets/icons/EmailIcon";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import React from "react";

interface props {
    toSignUp:()=>void,
    toIntro:()=>void,
}

const SignInOptions:React.FC<props> = ( { toSignUp, toIntro } ) => {
    return (
        <div className="h-screen w-screen flex flex-col gap-3 pb-[30px] bg-[#ecf0f1]">
            <button onClick={toIntro} className="h-[40px] hover:scale-105 hover:opacity-50 cursor-pointer w-[40px] absolute z-50 top-[3%] right-[3%]"><CloseIcon size='20px' /></button>
            <div className="flex-1 flex gap-3 flex-col justify-center items-center text-[#17124f]">
                <span className="font-semibold text-[18px]">Welcome Back.</span>
                <div className="flex flex-col mt-[20px] gap-2">
                    <button className="px-[20px] text-[14px] flex flex-row justify-center items-center gap-3 h-[40px] border-1 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out border-[#17124f]">
                        <GoogleIcon/>Sign In with Google
                    </button>
                    <button className="px-[20px] text-[14px] flex flex-row justify-center items-center gap-3 h-[40px] border-1 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out border-[#17124f]">
                        <EmailIcon/>Sign In with email
                    </button>
                </div>
                <div className="mt-[20px]">No account? <span onClick={toSignUp} className="text-[#3969f7] cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">Create one</span></div>
            </div>
            <div className="md:mx-[25%] mx-[10%] absolute h-fit bottom-[90px]">
                <p className="text-center text-[13px] text-gray-600">Click "Sign In" to agree to Paperplane's 
                    <span className="underline"> Terms of service </span> 
                    and acknowledge that Paperplane 
                    <span className="underline"> Privacy Policy </span>
                    applies to you.
                </p>
            </div>
        </div>
    )
}

export default SignInOptions;