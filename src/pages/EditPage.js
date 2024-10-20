import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { useParams, Navigate, Link } from "react-router-dom";
import axios from 'axios';

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
    const [ cover, setCover ] = useState(false);
    
    const [ redirect, setRedirect ] = useState(false);
    const [ toHome, setToHome ] = useState(false);

    const [ str, setStr ] = useState('Publish');
    const [ del, setDel ] = useState('Delete');


    useEffect(() => {

        axios.get(`https://paperplane-blog-api.onrender.com/post/${id}`)
        .then( response => {
            const postData = response.data;
            setTitle(postData.title);
            setSummary(postData.summary);
            setContent(postData.content);
        })

    }, [])

    async function saveEdit(e) {
       e.preventDefault();
       setStr('Publishing...'); 

        const data = {
            title,
            summary,
            content,
            cover,
        };

        const authToken = localStorage.getItem("authToken");

        axios.put(`https://paperplane-blog-api.onrender.com/post/${id}`, data, {
            headers:{ 'Authorization': authToken, 'Access-Control-Allow-Origin': '*' },
        })
        .then(response => {
            setRedirect(true);
        })
        .catch(error => {
            setStr('Publish');
            alert('something went wrong: try checking your internet connection');
        })
       

    }

    async function  deletePost() {
        setDel('Deleting...')
        const authToken = localStorage.getItem("authToken");
        axios.delete(`https://paperplane-blog-api.onrender.com/editpost/delete/${id}`, {
            headers:{ 'Authorization': authToken },
        })
        .then(response => {
            setToHome(true);
        })
        .catch(error => {
            setDel('Delete')
            alert('something went wrong: try checking your internet connection');
        })
    }
    
    const handleImageChange = (e) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setCover(reader.result);
        }
        reader.readAsDataURL( e.target.files[0])
    }


    if (redirect) {
        return <Navigate to={`/post/${id}`}/>
    }
    if (toHome) {
        return <Navigate to={`/`}/>
    }
    
    return(
        <div className="bodyContainer">
            <Link to={`/post/${id}`} className="backbutton"> ⇱ Back</Link>
            <form onSubmit={ saveEdit }>
                <textarea value={ title } onChange={ e => setTitle( e.target.value ) } type="title" placeholder="Title"></textarea>
                <textarea value={ summary } onChange={ e => setSummary( e.target.value ) } type="summary" placeholder="Summary"></textarea>
                <input type='file'  onChange={ handleImageChange}></input>
                <ReactQuill value={ content } onChange={ val => setContent( val ) } theme="snow" modules={modules}></ReactQuill>
                <div className="editBox">
                    <button onClick={ saveEdit } className="submit" type="submit">{str}</button>
                    <button onClick={ deletePost } className="delete" >{del}</button>
                </div>
            </form>
        </div>
    )
}