import { Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import ham from './ham.svg';
import close from './closeham.svg';
import axios from 'axios';



export default function Headers() {
    const { userInfo, setUserInfo } = useContext( UserContext )
    const [ username, setUsername ] = useState(false);
    const [ hamOpen, setHamOpen ] = useState(false);
    const [hambutton, setHambutton] = useState(ham);
    
    function checkUserData() {
        const authToken = localStorage.getItem('authToken');
        axios.post('https://paperplane-blog-api.onrender.com/profile',  { authToken })
        .then( response => {
            const user = response.data ;
            if ( !user ) {
                setUsername( false);
                setUserInfo({});
            } else {
                setUsername( user.username);
                setUserInfo(user);
            }
        })
        .catch( error => {
            throw error;
        } )  ;
    }

    useEffect(() => {
       checkUserData();
    }, [ userInfo ])
    function logOut() {
        setUserInfo({}) ;
        setUsername(false);
        localStorage.setItem( 'authToken', '');
    }

    //close and open nav
    function setNav() {
        setHamOpen(!hamOpen);
        if (!hamOpen) {
            setHambutton(close);
        } else {
            setHambutton(ham);
        }
    }

    // close hamburger 
    function closeHam() {
        setHamOpen(false);
        setHambutton(ham);
    }
    return (
        <header>
        <Link to='' className="logo">PAPERPLANE</Link>
        <nav className="desktopNav"> 
            { username && <>
               <Link to={`/profile/${username}`}>
                <div className="userHeader">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path class="fa-secondary" opacity=".4" fill="#000000" d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zm0 96a88 88 0 1 1 -88 88A88 88 0 0 1 248 104zm0 344a191.6 191.6 0 0 1 -146.5-68.2C120.3 344.4 157.1 320 200 320a24.8 24.8 0 0 1 7.1 1.1 124.7 124.7 0 0 0 81.8 0A24.8 24.8 0 0 1 296 320c42.9 0 79.7 24.4 98.5 59.8A191.6 191.6 0 0 1 248 448z"/>
                        <path class="fa-primary" fill="#000000" d="M248 280a88 88 0 1 0 -88-88A88 88 0 0 0 248 280zm48 40a24.8 24.8 0 0 0 -7.1 1.1 124.7 124.7 0 0 1 -81.8 0A24.8 24.8 0 0 0 200 320c-42.9 0-79.7 24.4-98.5 59.8 68.1 80.9 188.8 91.3 269.8 23.3A192 192 0 0 0 394.5 379.8C375.7 344.4 338.9 320 296 320z"/>
                    </svg>
                </div>
                </Link> 
                <Link className="writeButton" to={`/createpost`}>
                <div className="headerIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="#000000" d="M417.8 315.5l20-20c3.8-3.8 10.2-1.1 10.2 4.2V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h292.3c5.3 0 8 6.5 4.2 10.2l-20 20c-1.1 1.1-2.7 1.8-4.2 1.8H48c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V319.7c0-1.6 .6-3.1 1.8-4.2zm145.9-191.2L251.2 436.8l-99.9 11.1c-13.4 1.5-24.7-9.8-23.2-23.2l11.1-99.9L451.7 12.3c16.4-16.4 43-16.4 59.4 0l52.6 52.6c16.4 16.4 16.4 43 0 59.4zm-93.6 48.4L403.4 106 169.8 339.5l-8.3 75.1 75.1-8.3 233.5-233.6zm71-85.2l-52.6-52.6c-3.8-3.8-10.2-4-14.1 0L426 83.3l66.7 66.7 48.4-48.4c3.9-3.8 3.9-10.2 0-14.1z"/>
                </svg>
                </div>Write
                </Link>
               <span className="logButton" onClick={logOut} >Log out</span>
            </>}

            { !username && <>
                <Link className="regButton" to='/register'>Sign up</Link>
                <Link className="logButton" to='/login'>Sign in</Link>
            </>
            }
        </nav>


        <nav className="mobileNav"> 
            <img alt="ham" src={hambutton}  onClick={setNav} className="m-userHeader">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path class="fa-secondary" opacity=".4" fill="#000000" d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zm0 96a88 88 0 1 1 -88 88A88 88 0 0 1 248 104zm0 344a191.6 191.6 0 0 1 -146.5-68.2C120.3 344.4 157.1 320 200 320a24.8 24.8 0 0 1 7.1 1.1 124.7 124.7 0 0 0 81.8 0A24.8 24.8 0 0 1 296 320c42.9 0 79.7 24.4 98.5 59.8A191.6 191.6 0 0 1 248 448z"/>
                    <path class="fa-primary" fill="#000000" d="M248 280a88 88 0 1 0 -88-88A88 88 0 0 0 248 280zm48 40a24.8 24.8 0 0 0 -7.1 1.1 124.7 124.7 0 0 1 -81.8 0A24.8 24.8 0 0 0 200 320c-42.9 0-79.7 24.4-98.5 59.8 68.1 80.9 188.8 91.3 269.8 23.3A192 192 0 0 0 394.5 379.8C375.7 344.4 338.9 320 296 320z"/>
                </svg> */}
            </img>

            <div className={hamOpen?'hamOpen':'hamClose'}>
            { !username && <>
                <div className="m-navbox">
                    <Link onClick={closeHam} className="regButton" to='/register'>Sign up</Link>
                    <Link onClick={closeHam} className="logButton" to='/login'>Sign in</Link>
                </div>
               </>
            }

            {
                username && <>
                <div className="m-navbox">
                    <div onClick={closeHam} className="hamNav">
                    <Link className="m-profileButton" to={`/profile/${username}`}>
                    <div className="headerIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path class="fa-secondary" opacity=".4" fill="#000000" d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zm0 96a88 88 0 1 1 -88 88A88 88 0 0 1 248 104zm0 344a191.6 191.6 0 0 1 -146.5-68.2C120.3 344.4 157.1 320 200 320a24.8 24.8 0 0 1 7.1 1.1 124.7 124.7 0 0 0 81.8 0A24.8 24.8 0 0 1 296 320c42.9 0 79.7 24.4 98.5 59.8A191.6 191.6 0 0 1 248 448z"/>
                        <path class="fa-primary" fill="#000000" d="M248 280a88 88 0 1 0 -88-88A88 88 0 0 0 248 280zm48 40a24.8 24.8 0 0 0 -7.1 1.1 124.7 124.7 0 0 1 -81.8 0A24.8 24.8 0 0 0 200 320c-42.9 0-79.7 24.4-98.5 59.8 68.1 80.9 188.8 91.3 269.8 23.3A192 192 0 0 0 394.5 379.8C375.7 344.4 338.9 320 296 320z"/>
                    </svg>
                    </div>
                    <span className="hamtext">profile</span>
                    </Link>
                    </div>
                </div>
                <div className="m-navbox">
                    <div onClick={closeHam} className="hamNav">
                        <Link className="m-writeButton" to={`/createpost`}>
                        <div className="headerIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="#000000" d="M417.8 315.5l20-20c3.8-3.8 10.2-1.1 10.2 4.2V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h292.3c5.3 0 8 6.5 4.2 10.2l-20 20c-1.1 1.1-2.7 1.8-4.2 1.8H48c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V319.7c0-1.6 .6-3.1 1.8-4.2zm145.9-191.2L251.2 436.8l-99.9 11.1c-13.4 1.5-24.7-9.8-23.2-23.2l11.1-99.9L451.7 12.3c16.4-16.4 43-16.4 59.4 0l52.6 52.6c16.4 16.4 16.4 43 0 59.4zm-93.6 48.4L403.4 106 169.8 339.5l-8.3 75.1 75.1-8.3 233.5-233.6zm71-85.2l-52.6-52.6c-3.8-3.8-10.2-4-14.1 0L426 83.3l66.7 66.7 48.4-48.4c3.9-3.8 3.9-10.2 0-14.1z"/>
                        </svg>
                        </div>
                        <span className="hamtext">Write</span>
                        </Link>
                    </div>
                    <div onClick={closeHam} className="hamNav">
                        <div className="m-logButton" onClick={logOut}>
                            <div>
                                <svg width="23px" height="20px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Stock_cut" version="1.1" >
                                <desc/>
                                <g>
                                <polyline fill="none" points="21,18 21,11    11,1 1,11 1,31 21,31 21,24  " stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                                <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="10" x2="31" y1="21" y2="21"/>
                                <polyline fill="none" points="25,15 31,21    25,27  " stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                                </g>
                                </svg>
                            </div>
                            <span className="hamtext">Sign out</span>
                        </div>
                    </div>
                </div>
                </>

            }
            </div>
        </nav>
        </header>
    );
};