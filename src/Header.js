import { Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "./UserContext";



export default function Headers() {

    const { userInfo, setUserInfo } = useContext(UserContext);
    const [ username, setUsername ] = useState(false);
    const [test, setTest ] = useState['empty'];
    function getUserData() {
        fetch('https://paperplane-blog-api.onrender.com/profile', {
            credentials:"include",
            headers: {'Authorization': document.cookie}})
        .then(response => response.json())
        .then( user => {
            setTest(user)
            // if (user === 'no-user') {
            //     setUsername( false);
            // } else {
            //     setUsername( user.username);
            // }
        })
        .catch( error => {
            console.log( error )
        } )  
    }

    useEffect(() => {
       getUserData();
    }, [])
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
        document.cookie ='';
    }
    return (
        <header>
        <Link to='' className="logo">PAPERPLANE({test})</Link>
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