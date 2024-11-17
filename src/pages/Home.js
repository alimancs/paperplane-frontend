import Loader from "../Loader";
import Post from "../Post";
import { useEffect, useState } from "react";
import PostPreLoader from "../ui/PostPreloader";
import axios from "axios";
import NetworkError from "../ui/NetworkError";

export default function Home() {
  
  const [ postsList, setPostList ] = useState([]);
  const [ err, setErr ] = useState('');
  const [ loader, setLoader ] = useState('block');
  const [ newtworkError, setNetworkError ] = useState('none');
  

  async function getPosts() {
    try {
      const response = await axios.get("https://paperplane-blog-api.onrender.com/posts");
      setPostList(response.data);
    } catch( err ) {
      console.log( err.message );
      setNetworkError('block');
    } finally {
      setLoader('none');
    }
  }

  useEffect( () => {
    getPosts();
  }, []);

    return(
        <div className="bodyContainer">
          { postsList.length > 0 && postsList.map( post=> {
             return <Post key={` post NO.${postsList.indexOf(post)}`} {...post} />
          }) }

          <div style={{ display: ( loader )}}>
              <PostPreLoader/>  
              <PostPreLoader/> 
              <PostPreLoader/> 
          </div>
          <div style={{ display: (newtworkError) }}><NetworkError/> </div>
        </div> 
    );
};