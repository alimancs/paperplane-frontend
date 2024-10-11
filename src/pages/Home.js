import Loader from "../Loader";
import Post from "../Post";
import { useEffect, useState } from "react";

export default function Home() {
  
  const [ postsList, setPostList ] = useState([]);
  const [ err, setErr ] = useState('');
  const [ loader, setLoader ] = useState('loading');
  const [ lBox, setLBox ] = useState('loaderOpen');

  useEffect( ()=>{

   fetch(("https://paperplane-blog-api.onrender.com/posts") ).then( response => {
    response.json().then( posts => {
      setPostList(posts);
      setLBox('loaderClose');
    })
   })
   .catch( err => {
     setErr('Something went wrong 😢, please try again');
     setLoader('nloading');
   })

  }, [] )

    return(
        <div className="bodyContainer">
          { postsList.length > 0 && postsList.map( post=> {
             return <Post key={` post NO.${postsList.indexOf(post)}`} {...post} />
          }) }
          <Loader box={lBox} errorMessage={err} loaderStatus={loader}></Loader>
        </div> 
    );
};