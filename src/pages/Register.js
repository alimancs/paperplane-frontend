import { useState } from "react";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    async function register(e){
       e.preventDefault();
       const response = await fetch("https://paperplane-blog-api.onrender.com/register", {
        method:"POST",
        body:JSON.stringify({ username, password }),
        headers:{"content-type":"application/json"},
       })
       console.log(response);
       if (response.status === 200) {
        alert("resgistration successfull")
       } else {
        alert("registration");
       }
    };
    return (
        <div className="lr">
            <h1>Register</h1>
            <form onSubmit={register} >
                <input onChange={ e => {setUsername(e.target.value)}} value={username} type="text" placeholder="Username"/>
                <input onChange={ e => {setPassword(e.target.value)}} value={password} type="text" placeholder="Password"/>
                <button className="submit">Register</button>
            </form>
        </div>
    );
};