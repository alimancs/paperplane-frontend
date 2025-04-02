import { useNavigate } from "react-router-dom";
import CloseIcon from "../../../assets/icons/CloseIcon";
import React, { useState } from "react";
import EnterEmail from "./EnterEmail";
import EnterOtp from "./EnterOtp";
import EnterBasicInfo from "./EnterBasicInfo";


const MainSignUpScreen:React.FC = () => {

    const navigate = useNavigate();
    const [ presentStep, setPresentStep ] = useState(1);
    const [ email, setEmail ] = useState('');
    const [ firstname, setFirstname ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ username, setUsername ] = useState('');

    const toNextScreen = () => {
        if (presentStep<4) {
            setPresentStep(presentStep+1);
        }
    }

    const toPrevScreen = () => {
        if (presentStep>=1) {
            setPresentStep(presentStep-1);
        }
    }

    const toIntro = () => {
        navigate('/?to=signUp');
    }


    return (
        <div className="h-screen w-screen flex flex-col gap-3 pb-[30px] bg-[#ecf0f1]">
            <button onClick={toIntro} className="h-[40px] hover:scale-105 hover:opacity-50 cursor-pointer w-[40px] absolute z-50 top-[3%] right-[3%]"><CloseIcon size='20px' /></button>
            { presentStep === 1 && <EnterEmail email={email} nextScreen={toNextScreen} toHome={toIntro} setEmail={setEmail}/> }
            { presentStep === 2 && <EnterOtp email={email} prevScreen={toPrevScreen} nextScreen={toNextScreen}/> }
            { presentStep === 3 && <EnterBasicInfo 
                                    firstname={firstname} setFirstname={setFirstname} 
                                    lastname={lastname} setLastname={setLastname} 
                                    username={username} setUsername={setUsername} 
                                    nextScreen={toNextScreen} toHome={toIntro}/> }
            <div className="h-fit md:w-[100%] w-[80%] mx-auto absolute md:left-0 left-[10%] bottom-[100px]">
                <p className="text-center text-[13px] text-gray-600">
                    This site is protected by a secure authentication system. see our   
                    <span className="underline"> Terms of service </span> 
                    and 
                    <span className="underline"> Privacy Policy </span>
                </p>
            </div>
        </div>
    )
}

export default MainSignUpScreen;