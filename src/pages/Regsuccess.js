import { useState } from "react";
import { Navigate } from "react-router-dom";


export default function Regsuccess() {
    const [ count, setCount ] = useState(5);
    const [ redirect, setRedirect ] = useState(false);
    const timer = setTimeout(() => {
        if (count>0) {
            setCount(count-1);
        } else {
            clearTimeout(timer);
            setRedirect(true);
        }
    }, 1000);

    if (redirect) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className="rs-body">
           <span className="rs-text">You have successfully created an account</span>
           <span className="rs-text"> Redirecting you to login page in <span className="rs-count">{count}</span></span>
        </div>
    )
}