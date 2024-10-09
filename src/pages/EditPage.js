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
    
    const { id } = useParams();
    const [ title, setTitle ] = useState("");
    const [ summary, setSummary ] = useState("");
    const [ content, setContent ] = useState("");
    const [ file, setFile ] = useState(false);
    
    const [ redirect, setRedirect ] = useState(false);


    useEffect(() => {

        fetch(`https://paperplane-blog-api.onrender.com/post/${id}`)
        .then( response => response.json())
        .then( postData => {
            setTitle(postData.title);
            setSummary(postData.summary);
            setContent(postData.content);
        })

    }, [])

    async function saveEdit(e) {
       e.preventDefault();

        const data = new FormData();
        data.set( 'title', title );
        data.set( 'summary', summary );
        data.set( 'content', content);
        data.set( 'cover', file);

        const authToken = localStorage.getItem("authToken");

        const response = await fetch(`https://paperplane-blog-api.onrender.com/post/${id}`, {
            method : "PUT",
            body : data,
            credentials : "include",
            headers:{ 'Authorization': authToken, 'Access-Control-Allow-Origin': '*' },
        })
        if (response.ok) {
            setRedirect(true);
        } else {
            alert('something went wrong: try checking your internet connection');
        }
       

    }

    async function  deletePost() {
        const authToken = localStorage.getItem("authToken");
        const response = await fetch(`https://paperplane-blog-api.onrender.com/editpost/delete/${id}`, {
            method:'DELETE',
            headers:{ 'Authorization': authToken },
        })
        
        if (response.ok) {
            setRedirect(true);
        } else {
            alert('something went wrong: try checking your internet connection');
        }
    }
    
    const handleImageChange = (e) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setFile(reader.result);
        }
        reader.readAsDataURL( e.target.files[0])
    }


    if (redirect) {
        return <Navigate to={`/post/${id}`}/>
    }
    
    return(
        <div className="bodyContainer"> 
            <form onSubmit={ saveEdit }>
                <textarea value={ title } onChange={ e => setTitle( e.target.value ) } type="title" placeholder="Title"></textarea>
                <textarea value={ summary } onChange={ e => setSummary( e.target.value ) } type="summary" placeholder="Summary"></textarea>
                <input type='file'  onChange={ handleImageChange}></input>
                <ReactQuill value={ content } onChange={ val => setContent( val ) } theme="snow" modules={modules}></ReactQuill>
                <div className="editBox">
                    <button onClick={ saveEdit } className="submit" type="submit">Publish Edit</button>
                    <button onClick={ deletePost } className="delete" >Delete</button>
                </div>
            </form>
        </div>
    )
}