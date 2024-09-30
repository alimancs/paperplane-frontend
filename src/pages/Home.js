import Post from "../Post";
import { useEffect, useState } from "react";

export default function Home() {
  
  const [ postsList, setPostList ] = useState([]);

  useEffect( ()=>{

   fetch(("https://paperplane-blog-api.onrender.com/posts") ).then( response => {
    response.json().then( posts => {
      setPostList(posts);
    })
   });

  }, [] )

    return(
        <div className="bodyContainer">
          { postsList.length > 0 && postsList.map( post=> {
             return <Post {...post} />
          }) }
        </div> 
    );
};