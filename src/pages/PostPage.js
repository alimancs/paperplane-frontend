import { useParams, Link } from "react-router-dom";
import {  useContext, useEffect, useState } from "react";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Image from "../Image"

export default function PostPage() {

    const [ postData, setPostData ] = useState(null);
    const { userInfo } = useContext(UserContext);
    
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://paperplane-blog-api.onrender.com/post/${id}`)
        .then( response => response.json())
        .then( data => {
         setPostData(data);
        })
    }, [])
    if (!postData) return "";
    return (
        <div className="postView">
            { userInfo.id === postData.user._id ? <Link className="logButton" to={`/edit/${ postData._id }`}>Edit Post</Link>:''}
            <h1 className="postPageT">{postData.title}</h1>
            <p className='author'>
                <a className='user'> by {postData.user.username}</a>
                <time>{ formatISO9075( new Date(postData.createdAt)) }</time>
            </p>
            <div className="ppImage">
                <LazyLoadComponent>
                    <img alt="blog cover" className="blogPageImage" src={ `https://paperplane-blog-api.onrender.com/${postData.cover}`}/>
                </LazyLoadComponent>
            </div>
            <div className="postContent" dangerouslySetInnerHTML={{__html : postData.content}} ></div>
            
        </div>
    )
};