import { useEffect, useState } from "react";
import avatar from '../avatar.PNG';
import axios from 'axios';
import { Navigate, useParams, Link } from "react-router-dom";



export default function Editprofile() {
    const user = useParams().username;

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState(user);
    const [bio, setBio] = useState('');
    const [dp, setDp] = useState(avatar);
    const [redirect, setRedirect] = useState(false);
    const [savestr, setSavestr] = useState('Save changes');

    const [ menu, setMenu] = useState('dp-menu-off')

    const handleImageChange = (e) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setDp(reader.result);
        }
        reader.readAsDataURL( e.target.files[0])
    }

    const delDp = () => {
        setDp(avatar);
        setMenu('dp-menu-off');
    }

    function saveEdit(e) {
        e.preventDefault();
        setSavestr('Saving...');
        const data = {
            username,
            firstname,
            lastname,
            bio,
            profilePic:dp===avatar?'':dp
        }
        axios.put(`https://paperplane-blog-api.onrender.com/save-edit/${user}`, data)
        .then( response => {
            console.log(response.data);
            setRedirect(true);
        })
        .catch(error=> {
            console.log('something went wrong');
        })
    }

    function getData() {
        axios.get(`https://paperplane-blog-api.onrender.com/basic-user-data/${user}`)
        .then( response => {
            const data = response.data;
            setBio(data.bio);
            setFirstname(data.firstname);
            setLastname(data.lastname);
            if (data.profilePic!=='') {setDp(data.profilePic)};
        })
    };

    useEffect(()=> {
        getData();
    }, []);

    if (redirect) {
        return <Navigate to={`/profile/${username}`}/>
    }
    return (
        <div  className="ep-box">
            <Link to={`/profile/${user}`} className="backbutton"> ⇱ Back</Link>
            <div className="ep-top">
                <img alt="avatar" onClick={()=>{setMenu('dp-menu')}} src={dp} className="pr-header"></img>
                <div className={menu}>
                <span onClick={()=>setMenu('dp-menu-off')} id="dp-cl" className="dp-op">×</span>                           
                    <span onClick={()=>setMenu('dp-menu-off')}  className="dp-op">
                    <input onChange={handleImageChange}  type="file" className="dp-input"></input>Change image</span> 
                    <span onClick={delDp} id="dp-del" className="dp-op">Delete image</span>                         
                </div>

            </div>

            <form onSubmit={saveEdit}>
                <span className="ep-tt">- Firstname and Lastname</span>
                <div className="formDiv">
                    <input id="inputS1" className="inputForm" onChange={ e => { setFirstname(e.target.value) } } value={firstname} type="text" placeholder="First name"/>
                    <input id="inputS2" className="inputForm" onChange={ e => { setLastname(e.target.value) } } value={lastname} type="text" placeholder="Last name"/>
                </div>
                <span className="ep-tt">- Username</span>
                <input className="inputForm" onChange={ e => { setUsername(e.target.value) } } value={username} type="text" placeholder="Username"/>
                <span className="ep-tt">- About</span>
                <input className="inputForm" onChange={ e => { setBio(e.target.value) } } value={bio} type="text" placeholder="About me"/>
                <button  type="submit" className="ep-save">{savestr}</button>
            </form>
        </div>
    )
}