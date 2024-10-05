import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { useParams, Navigate } from "react-router-dom";
import TextCounter from "../TextCounter";

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

    const [ warning, setWarning ] = useState('');

    function check( value, limit ) {
        if ( value > limit ) {
            return false;
        } else if ( value <= limit ) {
            return true;
        }
    }

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

       if ( check(summary.length, 140) && check(title.length, 90) ) {

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
       }  else {
        setWarning('Title or summary exceeds limit !');
     }
       

    }

    async function  deletePost() {
        const response = await fetch(`https://paperplane-blog-api.onrender.com/editpost/delete/${post.id}`, {
            method:'DELETE'
        })
        
        if (response.ok) {
            setRedirect(true);
        } else {
            alert('something went wrong: try checking your internet connection');
        }
    }



    if (redirect) {
        return <Navigate to={`/post/${post.id}`}/>
    }
    return(
        <div className="bodyContainer"> 
            <form onSubmit={ saveEdit }>
                <span className="warning">{ warning }</span>
                <input value={ title } onChange={ e => setTitle( e.target.value ) } type="title" placeholder="Title"></input>
                <TextCounter value={ title.length } limit={90} classname={ title.length > 90 ? "warning" : "textCounter"}/>
                <input value={ summary } onChange={ e => setSummary( e.target.value ) } type="summary" placeholder="Summary"></input>
                <TextCounter value={ summary.length } limit={140} classname={ summary.length > 140 ? "warning" : "textCounter"}/>
                <input type='file'  onChange={ e => setFiles( e.target.files )}></input>
                <ReactQuill value={ content } onChange={ val => setContent( val ) } theme="snow" modules={modules}></ReactQuill>
                <button onClick={ saveEdit } className="submit" type="submit">Save Edit</button>
                <button onClick={ deletePost } className="delete" >Delete</button>
            </form>
        </div>
    )
}