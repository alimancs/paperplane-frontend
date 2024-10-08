import { useParams, Link } from "react-router-dom";
import {  useContext, useEffect, useState } from "react";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Image from "../Image"

export default function PostPage() {

    function base64ToImageURL(cover) {

        // convertion to Blob
        const bytestr = atob(cover.split(',')[0]);
        const mimeStr = cover.split(',')[0].split(':')[1].split(';')[0];
        const ia = new Uint8Array(bytestr.length);
  
        for ( let i = 0; i<bytestr.length; i++ ) {
          ia[i] = bytestr.charCodeAt[i];
        }
  
        const blob =  Blob([ia], { type: mimeStr});
        return URL.createObjectURL(blob);
      }
  
    let coverImage;

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
         coverImage = base64ToImageURL(data.cover);
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
                    <img alt="blog cover" className="blogPageImage" src={ coverImage }/>
                </LazyLoadComponent>
            </div>
            <div className="postContent" dangerouslySetInnerHTML={{__html : postData.content}} ></div>
            
        </div>
    )
};