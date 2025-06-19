import React, { useEffect, useState } from "react";
import Intro from "./Intro";
import SignInOptions from "./SignInOptions";
import RegOptions from "./SignUpOptions";
import { useNavigate, useParams } from "react-router-dom";

interface query {
    to:string | null,
}

const Landing:React.FC = () => {
    const [ showSignIn, setShowSignIn ] = useState<boolean>(false);
    const [ showSignUp, setShowSignUp ] = useState<boolean>(false);
    const [ showIntro, setShowIntro ] = useState<boolean>(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);
    
    const router = useNavigate();

    useEffect( () => {
        const  params = new URLSearchParams(window.location.search);
        const to = params.get('to');
        if (to) {
            if ( to === 'signUp') {
                toSignUp();
            } else if ( to === 'signIn') {
                toSignIn();
            }
        }
        handleIntro();
    }, []);

    const handleIntro = () => {
        //check if the user is loggedIn
        setTimeout(() => {
            // router('/feed'); send user to home page
            setIsLoggedIn(true);
        }, 5000);
    }


    const toSignUp = () => {
        setShowSignIn(false);
        setShowIntro(false);
        setShowSignUp(true);
    }

    const toSignIn = () => {
        setShowSignIn(true);
        setShowIntro(false);
        setShowSignUp(false);
    }

    const toIntro = () => {
        setShowSignIn(false);
        setShowIntro(true);
        setShowSignUp(false);
    }

    return (
        <>
            { showIntro && <Intro getStarted={toSignIn} isLoggedIn={isLoggedIn} />}
            { showSignIn && <SignInOptions toIntro={toIntro} toSignUp={toSignUp}/>}
            { showSignUp && <RegOptions toIntro={toIntro} toSignIn={toSignIn}/>}
        </>
    )
}

export default Landing;