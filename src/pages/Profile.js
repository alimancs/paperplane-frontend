import Post from "../Post";
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import { formatISO9075 } from 'date-fns';

export default function Profile() {

    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const [ postsList, setPostsList ] = useState([]);
    const { username } = useParams();
    const [ userDate, setUserDate ] = useState('Month 00, 0000');

    async function userProfile(username) {
        const response = await fetch(`https://paperplane-blog-api.onrender.com/profile/${username}`, {
            method:'GET',
            headers: {'Authorization': username},
        })
        .then( response => response.json())
        .then( data => { 
            setPostsList(data.posts);

            const date = formatISO9075( new Date(data.joinDate)).split(' ')[0].split('-');
            const dateStr = `${months[date[1]-1]} ${date[2]}, ${date[0]}`;
            setUserDate(dateStr);
         })
    }
    useEffect(() => {
        userProfile(username);
    }, [])


    return (
        <>
        <div className="pr-body">

            <div className="pr-top">
                <div className="pr-header">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path class="fa-secondary" opacity=".4" fill="#000000" d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zm0 96a88 88 0 1 1 -88 88A88 88 0 0 1 248 104zm0 344a191.6 191.6 0 0 1 -146.5-68.2C120.3 344.4 157.1 320 200 320a24.8 24.8 0 0 1 7.1 1.1 124.7 124.7 0 0 0 81.8 0A24.8 24.8 0 0 1 296 320c42.9 0 79.7 24.4 98.5 59.8A191.6 191.6 0 0 1 248 448z"/>
                        <path class="fa-primary" fill="#000000" d="M248 280a88 88 0 1 0 -88-88A88 88 0 0 0 248 280zm48 40a24.8 24.8 0 0 0 -7.1 1.1 124.7 124.7 0 0 1 -81.8 0A24.8 24.8 0 0 0 200 320c-42.9 0-79.7 24.4-98.5 59.8 68.1 80.9 188.8 91.3 269.8 23.3A192 192 0 0 0 394.5 379.8C375.7 344.4 338.9 320 296 320z"/>
                    </svg>
                </div> 
                <div className="pr-text">
                    <span className="pr-name">{username}</span>
                    <span className="pr-join">Joined {userDate}</span>
                </div>
            </div>
            <div className="pr-table">
                <span className="pb"> Published</span>
            </div>
            <div className="bodyContainer">
            { postsList.length > 0 && postsList.map( post=> {
                return <Post key={` post NO.${postsList.indexOf(post)}`} {...post} />
            }) }
            </div>

        </div>
        </>
    )
}