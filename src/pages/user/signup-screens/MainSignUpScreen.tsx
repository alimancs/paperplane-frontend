import { useNavigate } from "react-router-dom";
import CloseIcon from "../../../assets/icons/CloseIcon";
import React, { useState } from "react";
import EnterEmail from "./EnterEmail";
import EnterOtp from "./EnterOtp";
import EnterBasicInfo from "./EnterBasicInfo";
import SetupPassword from "./SetupPassword";
import RegLoad from "./RegLoad";
import axios from "axios";
import RegSuccess from "./RegSuccess";


const MainSignUpScreen:React.FC = () => {

    const navigate = useNavigate();
    const [ presentStep, setPresentStep ] = useState<number>(1);
    const [ email, setEmail ] = useState<string>('');
    const [ firstname, setFirstname ] = useState<string>('');
    const [ lastname, setLastname ] = useState<string>('');
    const [ username, setUsername ] = useState<string>('');
    const [ password, setPassword ] =useState<string>('');

    const [ regState, setRegState ] = useState<string>('Processing...');
    const [ isRegSuccess, setIsRegSuccess ] = useState<boolean>(false);
    const [ isRegistrying, setIsRegistrying ] = useState<boolean>(false);
    const [ regError, setRegError ] = useState<string>('Unknown error');

    const toNextScreen = () => {
        if (presentStep<7) {
            setPresentStep(presentStep+1);
        }
    }

    const register = async () => {
        toNextScreen();
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
        <div className="h-screen w-screen flex flex-col gap-3 bg-[#ecf0f1]">
            <button onClick={toIntro} className="h-[40px] hover:scale-105 hover:opacity-50 cursor-pointer w-[40px] absolute z-50 top-[3%] right-[3%]"><CloseIcon size='20px' /></button>

            { presentStep === 1 && <EnterEmail email={email} nextScreen={toNextScreen} toHome={toIntro} setEmail={setEmail}/> }
            { presentStep === 2 && <EnterOtp email={email} prevScreen={toPrevScreen} nextScreen={toNextScreen}/> }
            { presentStep === 3 && <EnterBasicInfo 
                                    firstname={firstname} setFirstname={setFirstname} 
                                    lastname={lastname} setLastname={setLastname} 
                                    username={username} setUsername={setUsername} 
                                    nextScreen={toNextScreen} /> }
            { presentStep === 4 && <SetupPassword 
                                    password={password} setPassword={setPassword} 
                                    registerUser={register} isRegistrying={isRegistrying} isSuccess={isRegSuccess} errMsg={regError}  /> }
            { presentStep === 5 && <RegSuccess username={username}/> }                     

            <div className={`h-fit md:w-[100%] w-[80%] mx-auto absolute md:left-0 left-[10%] bottom-[60px] ${presentStep===6 || presentStep === 5?'opacity-0':'opacity-100'}`}>
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