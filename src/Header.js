import { Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "./UserContext";



export default function Headers() {

    const { userInfo, setUserInfo } = useContext(UserContext);
    const [ username, setUsername ] = useState(false)

    useEffect(() => {
        console.log(document.cookie);
        fetch('https://paperplane-blog-api.onrender.com/profile', {
            credentials:"include",
            headers: new Headers({'Authorization': `Bearer ${document.cookie}`})})
        .then(response => response.json())
        .then( user => {
            setUserInfo( user );
            setUsername( user.username)})
        .catch( error => {
            console.log( error )
        } ) 
    }, [])
    function logOut() {
        fetch('https://paperplane-blog-api.onrender.com/logout', {
            method:"POST",
            credentials:"include",
        }).then( response => {
            setUserInfo({}) ;
            setUsername(false);
        }
         );
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