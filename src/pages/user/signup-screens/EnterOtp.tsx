import Loader from "../../../pages/general-components/Loader";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

interface components {
    email:string,
    nextScreen:()=>void,
    prevScreen:()=>void,
}

const EnterOtp:React.FC<components> = ( { email, nextScreen, prevScreen } ) => {
    const [ activeInput, setActiveInput ] = useState<number>(0);
    const [ boxArray, setBoxArray ] = useState(['', '', '', '', '', ''])
    const [ verifyingOtp, setVerifyingOtp ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState<string>('Unknwon error');
    const [ showError, setShowError ] = useState<boolean>(false);
     

    useEffect( () => {
        const inputBox = document.getElementById(`otp-${activeInput}`);
        if (inputBox) {
            inputBox.focus();
        }
    }, [activeInput])

    const makeOTPBoxesRed = () =>{
        boxArray.map( (_, index) => {
            const inputBox = document.getElementById(`otp-${index}`);
          if(inputBox){
            inputBox.style.borderColor ='red'
          }
           
        })
    }

    const makeOTPBoxesDefaultColor = () =>{
        boxArray.map( (_, index) => {
            const inputBox = document.getElementById(`otp-${index}`);
          if(inputBox){
            inputBox.style.borderColor ='#9ca3af'
          }
           
        })  
    }

    const handleInput = ( e:React.ChangeEvent<HTMLInputElement>, index:number) => {
        if(errorMessage){
            makeOTPBoxesDefaultColor()
            setErrorMessage('');
        }
        const str = e.target.value;
        // only accept digits. if non-digit ignore
        if (!/^\d*$/.test(e.target.value)) return 

        // update the OTP state and take only the last digit
        const newOtp = [...boxArray];
        newOtp[index] = str.slice(-1);
        setBoxArray(newOtp);

        // if digit was entered and was not the last digit move to the next box
        if ( str && (index < boxArray.length-1) ) {
            setActiveInput(index+1);
        }
    };


    const handleKeyDown = ( e:React.KeyboardEvent<HTMLInputElement>, index:number ) => {
        if ( e.key === 'Backspace' && boxArray[index] === '' ) {
            setActiveInput(index-1);
        }
    }

    const displayError = (errMsg:string) => {
        setErrorMessage(errMsg);
        setShowError(true);
        makeOTPBoxesRed();
        setTimeout(() => {
            setShowError(false);
            setTimeout(() => {
                setErrorMessage('Unknwon error');
                makeOTPBoxesDefaultColor();
            }, 1000);
        }, 5000);
    }

    const handleVerify = async (otpToken:string) => {
        const data = { otpToken, email };
        setVerifyingOtp(true);
        try {
            const response = await axios.post('https://paperplane-blog-api.onrender.com/api/auth/verifyOtp', data);
            if ( response.data.isVerified ) {
                return { isVerified:true }
            } else {
                return { isVerified:false, msg:response.data.msg }
            }
        } catch(err) {
            setVerifyingOtp(false);
            if (err instanceof Error) {
                displayError(`Error verifying email, ${err.message}`);
              } else {
                displayError(`Unknown`);
            }
            return { isVerified:false }
        }
    }

    const sendOtpAndVerify = async () => {
        let otpToken = ''
        boxArray.map((num)=>{
            otpToken = `${otpToken}${num}`;
        })
        if (otpToken.length===6) {
            const confirm = await handleVerify(otpToken);
            if (confirm.isVerified) {
                nextScreen();
            } else {
                setVerifyingOtp(false);
                displayError(confirm.msg);
            }
        } else {
            displayError('Invalid OTP code, check your input');
        }
    }


    return (
                <div className="flex-1 flex flex-col justify-center items-center text-[#17124f] mx-auto  mt-[20px] md:w-[400px] w-[80%] gap-2">
                    { !verifyingOtp && (
                        <>
                            <span className="font-semibold text-center text-[18px]">OTP Code</span>
                            <div className="flex flex-col justify-center place-items-center gap-1">
                            <span className="text-[15px] text-center">We sent you a 6-digit code via your email <span className="font-semibold">{email}</span></span>
                            </div>

                            <div className="flex flex-row gap-2 w-[100%] mt-[15px] mb-[7px] justify-center items-center">
                                { boxArray.map( (_, index) => {
                                    return <input key={index} pattern="\d*" onKeyDown={(e) => handleKeyDown(e, index)} inputMode="numeric" id={`otp-${index}`} value={boxArray[index]} onChange={(e)=>{handleInput(e, index)}} className='h-[40px] w-[40px] border-[1px] border-gray-400 text-center bg-transparent' type="tel" maxLength={1} />
                                
                                })}
                            </div>
                            <span className={`text-center text-red-600 text-[14px] transition-all duration-200 ease-in-out ${showError?'opacity-100':'opacity-0'}`}>{errorMessage}</span>
                            <div className="w-full mt-[6px] justify-center place-items-center font-light gap-2 flex">
                                <span className="text-left text-[15px]">Did&apos;t receive the code?</span>
                                <button className={"hover:underline decoration-[#44bd32] cursor-pointer text-[#44bd32] w-fit"} >Resend code</button>
                            </div>
                            <button 
                                onClick={sendOtpAndVerify} 
                                className="px-[20px] mx-auto w-[100%] text-center mt-[40px] text-[14px] flex flex-row justify-center items-center gap-3 text-[#ecf0f1] h-[35px] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out bg-[#17124f]" >
                                Continue
                            </button>
                        </>  
                    )} 

                    { verifyingOtp && (
                        <div className="flex flex-col mt-[20px] md:w-[400px] w-[80%] justify-center items-center h-fit gap-2">
                            <Loader/>
                            <span className="text-[13px] text-center text-gray-500">Processing...</span>
                        </div>
                    )}
                </div>

    )
}

export default EnterOtp;