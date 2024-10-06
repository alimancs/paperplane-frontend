import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { useParams, Navigate } from "react-router-dom";

const modules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'], 
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula']]
}

export default function EditPage() {
    
    const post = useParams();
    const [ title, setTitle ] = useState("");
    const [ summary, setSummary ] = useState("");
    const [ content, setContent ] = useState("");
    const [ files, setFiles ] = useState('');
    const [ redirect, setRedirect ] = useState(false);
    const [ backHome, setBackHome ] = useState(false);


    useEffect(() => {

        fetch(`https://paperplane-blog-api.onrender.com/post/${post.id}`)
        .then( response => response.json())
        .then( postData => {
            setTitle(postData.title);
            setSummary(postData.summary);
            setContent(postData.content);
            setFiles(postData.file);
        })

    }, [])

    async function saveEdit(e) {
       e.preventDefault();

        const data = new FormData();
        data.set( 'title', title );
        data.set( 'summary', summary );
        data.set( 'content', content);
        data.set( 'file', files?.[0]);
        data.set( 'id', post.id);

        const authToken = localStorage.getItem("authToken");

        const response = await fetch(`https://paperplane-blog-api.onrender.com/post`, {
            method : "PUT",
            body : data,
            credentials : "include",
            headers:{ 'Authorization': authToken },
        })
        if (response.ok) {
            setRedirect(true);
        } else {
            alert('something went wrong: try checking your internet connection');
        }
       

    }

    async function  deletePost() {
        const authToken = localStorage.getItem("authToken");
        const response = await fetch(`https://paperplane-blog-api.onrender.com/editpost/delete/${post.id}`, {
            method:'DELETE',
            headers:{ 'Authorization': authToken },
        })
        
        if (response.ok) {
            setBackHome(true);
        } else {
            alert('something went wrong: try checking your internet connection');
        }
    }



    if (redirect) {
        return <Navigate to={`/post/${post.id}`}/>
    }
    if (backHome) {
        return <Navigate to={`/`}/>
    }
    return(
        <div className="bodyContainer"> 
            <form onSubmit={ saveEdit }>
                <input value={ title } onChange={ e => setTitle( e.target.value ) } type="title" placeholder="Title"></input>
                <input value={ summary } onChange={ e => setSummary( e.target.value ) } type="summary" placeholder="Summary"></input>
                <input type='file'  onChange={ e => setFiles( e.target.files )}></input>
                <ReactQuill value={ content } onChange={ val => setContent( val ) } theme="snow" modules={modules}></ReactQuill>
                <div className="editBox">
                    <button onClick={ saveEdit } className="submit" type="submit">Save Edit</button>
                    <button onClick={ deletePost } className="delete" >Delete</button>
                </div>
            </form>
        </div>
    )
}