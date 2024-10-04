import { Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "./UserContext";



export default function Headers() {

    const { userInfo, setUserInfo } = useContext(UserContext);
    const [ username, setUsername ] = useState(false);
    function checkUserData() {
        const authToken = localStorage.getItem('authToken');
        fetch('https://paperplane-blog-api.onrender.com/profile', {
            method:'GET',
            credentials:"include",
            headers:{ 'Authorization' : authToken },
        })
        .then(response => response.json())
        .then( user => {
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
        } )  
    }

    useEffect(() => {
       checkUserData();
    }, [ userInfo.username ])
    function logOut() {
        // fetch('https://paperplane-blog-api.onrender.com/logout', {
        //     method:"POST",
        //     credentials:"include",
        //     headers:{'Authorization':''}
        // }).then( response => {
        //     setUserInfo({}) ;
        //     setUsername(false);
        // })
        // .then()
        setUserInfo({}) ;
        setUsername(false);
        localStorage.setItem( 'authToken', '');
    }
    return (
        <header>
        <Link to='' className="logo">PAPERPLANE</Link>
        <nav> 
            { username && <>
                <span className="userHeader">{username[0].toUpperCase()}</span> <Link className="regButton" to={`/createpost/${userInfo.id}`}> Create post </Link>
               <span className="logButton" onClick={logOut} >Log out</span>
            </>}

            { !username && <>
                <Link className="regButton" to='/register'>Register</Link>
                <Link className="logButton" to='/login'>Login</Link>
            </>
            }
        </nav>
        </header>
    );
};