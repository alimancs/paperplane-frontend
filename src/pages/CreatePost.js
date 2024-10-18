import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import axios from 'axios';

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
    const [ cover, setCover ] = useState('');
    const [ redirect, setRedirect ] = useState(false);
    const { userInfo } = useContext(UserContext);

    const data = new FormData();

    const [ str, setStr ] = useState('Publish');


   async function addPost(e) {
        e.preventDefault();
        setStr('Publishing...');

        const authToken = localStorage.getItem('authToken');
        const data = {
            title,
            summary,
            content,
            cover,
        }
        axios.post("https://paperplane-blog-api.onrender.com/addpost", data, {
            headers:{
                'Authorization': authToken,
            }
        })
        .then( response => {
            console.log(response.data);
            setRedirect(true);
        })
        .catch(error => {
            setStr('Publish')
            alert('something went wrong: try checking your internet connection');
        });

    }

    const handleImageChange = (e) => {

        const reader = new FileReader();
        reader.onloadend = () => {

            setCover( reader.result );
        };
        reader.readAsDataURL(e.target.files[0])

    }

    if ( redirect | userInfo === null)  {
       return <Navigate to={'/'}/>
    }
    return(
        <div className="bodyContainer"> 
            <Link to={`/`} className="backbutton"> ⇱ Home</Link>
            <form onSubmit={ addPost }>
                <textarea value={ title } onChange={ e => setTitle( e.target.value ) } type="title" placeholder="Title"></textarea>
                <textarea value={ summary } onChange={ e => setSummary( e.target.value ) } type="summary" placeholder="Summary"></textarea>
                <input  type="file" onChange={ handleImageChange } />
                <ReactQuill className="editor" value={ content } onChange={ val => setContent( val ) } theme="snow" modules={modules}></ReactQuill>
                <button className="submit" type="submit">{str}</button>
            </form>
        </div>
    )
}