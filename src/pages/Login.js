import { useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { colorGrades } from "../ui/theme";

export default function Login() {
    const mode = useSelector( (state)=>state.mode);
    const palette = colorGrades(mode);

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ redirect, setRedirect ] = useState(false);
    const { userInfo, setUserInfo } = useContext(UserContext);
    const [ loginerror, setLoginerror] = useState('warningOff');
    const [usererror, setUsererror] = useState('warningOff');
    const [passerror, setPasserror] = useState('warningOff');

    const [ str, setStr ] = useState('Sign in');

    function filledInput() {
        const user = username !== '';
        const pass = password !== '';
        if (!user) {setUsererror('warning')};
        if (!pass) {setPasserror('warning')};
        if ( !user | !pass ) {return false}
        else return true
    }


    async function logUserIn(e) {
        e.preventDefault();
        if (filledInput()) {
            setStr('Signing...')
            const response = await fetch("https://paperplane-blog-api.onrender.com/login", {
                method:'POST',
                body:JSON.stringify( { username, password } ),
                headers:{'Content-Type':'application/json', 'Access-Control-Allow-Origin': '*' },
                credentials:'include',
            })
            if (response.ok) {
                response.json().then( data => {
                setUserInfo(data.userData);
                localStorage.setItem('authToken', data.authToken);
                setRedirect(true);
                })
            } else {
                setStr('Sign in');
                setLoginerror('warning');
            }
        }

    }

    if (redirect) {
        return <Navigate to={'/'}/>
    }

    return(
        <div className="lr">
            <h1 className="signtext">Sign in</h1>
            <form onSubmit={ logUserIn }>
                <span className={loginerror}>Invalid Username or password</span>
                <input className="inputForm"  type="text" placeholder="Username" value={ username } onChange={ ev=> setUsername(ev.target.value) }/>
                <span className={usererror}>This field is required*</span>
                <input type='password' className="inputForm"  placeholder="Password" value={ password } onChange={ ev=> setPassword(ev.target.value) }/>
                <span className={passerror}>This field is required*</span>
                <button className="submit" type="submit">{str}</button>
            </form>
        </div>
    );
};