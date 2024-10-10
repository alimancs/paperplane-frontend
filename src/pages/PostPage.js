import { useParams, Link } from "react-router-dom";
import {  useContext, useEffect, useState } from "react";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Image from "../Image"

export default function PostPage() {

    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const [ date, setdate ] = useState('Month Day, Year')

    const [ postData, setPostData ] = useState(null);
    const { userInfo } = useContext(UserContext);

    //calculate approximate reading time;
    function calculateReadingTime(text) {
        const wordsPerMinute = 150; // Adjust this based on your reading speed
        const wordCount = text.split(/\s+/).length; // Count words by splitting on whitespace
      
        const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
        return readingTimeMinutes;
      }
    
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://paperplane-blog-api.onrender.com/post/${id}`)
        .then( response => response.json())
        .then( data => {
         setPostData(data);
         const date = formatISO9075( new Date(data.createdAt)).split(' ')[0].split('-');
         setdate(`${months[date[1]-1]} ${date[2]}, ${date[0]}`);
        })
    }, [])
    if (!postData) return "";
    return (
        <div className="postView">
            { userInfo.id === postData.user._id ? <Link className="logButton" to={`/edit/${ postData._id }`}>Edit Post</Link>:''}
            <div className='pp-author'>
                <Link to={`/profile/${postData.user.username}`}>
                    <span className='pp-user'> By {postData.user.username[0].toUpperCase() + postData.user.username.slice(1)}</span>
                </Link>
                    <time>{ date } • { calculateReadingTime(postData.content)} Minute{calculateReadingTime(postData.content)>1?'s':''} read</time>
            </div>
            <h1 className="pp-tt">{postData.title}</h1>
            <div className="ppImage">
                <LazyLoadComponent>
                    <img alt="blog cover" className="blogPageImage" src={ postData.cover }/>
                </LazyLoadComponent>
            </div>
            <div className="postContent" dangerouslySetInnerHTML={{__html : postData.content}} ></div>
            
        </div>
    )
};