import Post from "../Post";
import { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import { formatISO9075 } from 'date-fns';
import Loader from "../Loader";
import avatar from '../avatar.PNG';

export default function Profile() {

    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const [ postsList, setPostsList ] = useState([]);
    const { username } = useParams();
    const { userInfo } = useContext(UserContext);
    const [fullname, setFullname] = useState('User Fullname'); 
    const [ userDate, setUserDate ] = useState('Month 00, 0000');
    const [bio, setBio] = useState('');
    const [ dp , setDp ] = useState(avatar);
    const [ err, setErr ] = useState('');
    const [ loader, setLoader ] = useState('loading');
    const [ lBox, setLBox ] = useState('loaderOpen');

    async function userProfile(username) {
        const response = await fetch(`https://paperplane-blog-api.onrender.com/profile/${username}`, {
            method:'GET',
            headers: {'Authorization': username},
        })
        .then( response => response.json())
        .then( data => { 
            setPostsList(data.posts);
            setLBox('loaderClose');
            setBio(data.bio);

            const date = formatISO9075( new Date(data.joinDate)).split(' ')[0].split('-');
            const dateStr = `${months[date[1]-1]} ${date[2]}, ${date[0]}`;
            setFullname(data.fullname);
            setUserDate(dateStr);
            if (data.profilePic !== ''){ setDp(data.profilePic)};
         })
         .catch( err => {
            setErr('Something went wrong 😢, please try again');
            setLoader('nloading');
          })
    }
    useEffect(() => {
        userProfile(username);
    }, [])


    return (
        <div>
        <Link to={`/`} className="backbutton"> ⇱ Home</Link>
        <div className="pr-body">

            <div className="pr-top">
                <img alt="avatar" src={dp} className="pr-header">
                </img> 
                <div className="pr-text">
                    <span className="pr-fname">{fullname}</span>
                    <span className="pr-name">@{username}</span>
                    <span className="pr-join">Joined {userDate}</span>
                </div>
            </div>
            <div className="pr-bio">
                <span className="bio">Hey, I am using paperplane</span>
            </div>
            <div className="pr-bbox">
                <button to={`/edit-profile/${userInfo.id}`} className="pr-button"><Link className="pr-b" to={`/edit-profile/${username}`}>Edit profile</Link></button>
                <button className="pr-button">Share profile</button>
            </div>
            <div className="pr-table">
                <span className="pb"> Published</span>
            </div>
            <div className="bodyContainer">
            { postsList.length > 0 && postsList.map( post=> {
                return <Post key={` post NO.${postsList.indexOf(post)}`} {...post} />
            }) }
             <Loader box={lBox} errorMessage={err} loaderStatus={loader}></Loader>
            </div>

        </div>
        </div>
    )
}