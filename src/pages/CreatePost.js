import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const modules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'], 
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula']]
}

export default function CreatePost() {
    const [ title, setTitle ] = useState("");
    const [ summary, setSummary ] = useState("");
    const [ content, setContent ] = useState("");
    const [ files, setFiles ] = useState([]);
    const [ redirect, setRedirect ] = useState(false);
    const { userInfo } = useContext(UserContext);


   async function addPost(e) {
        e.preventDefault();
        const authToken = localStorage.getItem('authToken');
        const data = new FormData();
        data.set( 'title', title );
        data.set( 'summary', summary );
        data.set( 'content', content );
        data.set( 'file', files[0] );
        
        const response = await  fetch("https://paperplane-blog-api.onrender.com/addpost", {
            method:"POST",
            body: data,
            credentials:"include",
            headers:{ 'Authorization':authToken }
        });

        if (response.ok) {
            setRedirect(true);
        } else {
            alert('something went wrong: try checking your internet connection');
        }

    }
    if ( redirect | userInfo === null)  {
       return <Navigate to={'/'}/>
    }
    return(
        <div className="bodyContainer"> 
            <form onSubmit={ addPost }>
                <input value={ title } onChange={ e => setTitle( e.target.value ) } type="title" placeholder="Title"></input>
                <input value={ summary } onChange={ e => setSummary( e.target.value ) } type="summary" placeholder="Summary"></input>
                <input  type="file" onChange={ e => setFiles(e.target.files) } />
                <ReactQuill className="editor" value={ content } onChange={ val => setContent( val ) } theme="snow" modules={modules}></ReactQuill>
                <button className="submit" type="submit">Create Post</button>
            </form>
        </div>
    )
}