import { useParams, Link } from "react-router-dom";
import {  useContext, useEffect, useState } from "react";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Loader from "../Loader";
import axios from "axios";
import avatar from "../avatar.PNG";
import Comment from "../Comment";

export default function PostPage() {

    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const [ date, setdate ] = useState('Month Day, Year')

    const [ postData, setPostData ] = useState(null);
    const { userInfo } = useContext(UserContext);
    const [ err, setErr ] = useState('');
    const [ loader, setLoader ] = useState('loading');
    const [ lBox, setLBox ] = useState('loaderOpen');
    const [ clip, setClip ] = useState('notOff');
    const [likes, setLikes] = useState([]);
    const [ likecolor, setLikecolor ] = useState( 'black');

    const [ comments, setComments ] = useState( []);
    const [commentstate, setCommentstate] = useState('noteOff');
    const [commenttext, setCommenttext] = useState('');
    const { id } = useParams();

    //show clipboard success
    function clipSuccess() {
      setClip('notButton');
      setTimeout(() => {
        setClip('notOff');
      }, 5000);
    }

    //copy text to clipboard
    function copyText() {
        navigator.clipboard.writeText(`https://paperplane-blog.onrender.com/post/${id}`)
        .then( ()=> {
            console.log('copied URL to clipboard');
            clipSuccess();
        }, () => {
            console.log('failed to copy');
        })

    }

    // Like blog post
    function likePost() {
        const liker = userInfo.username;
        if (!liker) return ;

        const newlist = likes;
        const like = likecolor==='black'?true:false;
        setLikecolor( likecolor==='black'?'red':'black');
        if (like) {newlist.push(liker)};
        if (!like) {newlist.splice(newlist.indexOf(liker), 1)};
        setLikes(newlist);
        const data = { like, liker };

        axios.put(`https://paperplane-blog-api.onrender.com/like/${id}`, data )
        .then( response => {
            console.log(response.message);
        })
        .catch(() => {
            console.log('something went wrong');
        })


    };

    // add comment
    function addComment() {
        console.log(userInfo);
        if (userInfo.username) {
        const commenter = userInfo.username;
        const ctext = commenttext;

        setCommenttext('');
        const oldcomments = comments;
        const commentObj =  {
            dp:userInfo.dp,
            user:commenter,
            text:ctext,
            state:'posting...',
        }
        comments.push(commentObj )
        const commentIndex = comments.length-1;
        const data = { commentObj }
        setCommentstate('noteOff');
        setTimeout(()=> {
            setCommentstate('comments')
        }, 1)

        axios.put(`https://paperplane-blog-api.onrender.com/addcomment/${id}`, data)
        .then( (response) => {
            comments[commentIndex].state = '';
            setCommentstate('noteOff');
            setTimeout(()=> {
            setCommentstate('comments')
            }, 1)
        }).catch( (error) => {
            setComments(oldcomments);
            setCommentstate('noteOff');
            setTimeout(()=> {
            setCommentstate('comments')
            }, 1)
        })
        }



    }

    //calculate approximate reading time;
    function calculateReadingTime(text) {
        const wordsPerMinute = 150; // Adjust this based on your reading speed
        const wordCount = text.split(/\s+/).length; // Count words by splitting on whitespace
      
        const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
        return readingTimeMinutes;
      }
    

    useEffect(() => {
        axios.get(`https://paperplane-blog-api.onrender.com/post/${id}`)
        .then( response => {
            const data = response.data;
            setPostData(data);
            setLBox('loaderClose');
            setLikes(data.likes);
            setComments(data.comments?data.comments:[]);
            const date = formatISO9075( new Date(data.createdAt)).split(' ')[0].split('-');
            setdate(`${months[date[1]-1]} ${date[2]}, ${date[0]}`);
            setLikecolor(data.likes.includes(userInfo.username)?'red':'black' );
        })
        .catch( err => {
            setErr('Something went wrong, please try again');
            setLoader('nloading');
        })
    }, [])


    if (!postData) return <Loader box={lBox} errorMessage={err} loaderStatus={loader}></Loader> 
    return (<>
        <div className="postView">
        <Link to={`/`} className="backbutton"> ⇱ Home</Link>
            <div className='pp-author'>
                <Link to={`/profile/${postData.user.username}`}>
                    <span className='pp-user'> By {postData.user.username[0].toUpperCase() + postData.user.username.slice(1)}</span>
                </Link>
                    <time className="time">{ date } • { calculateReadingTime(postData.content)} Minute{calculateReadingTime(postData.content)>1?'s':''} read</time>
            </div>

            <h1 className="pp-tt">{postData.title}</h1>

            <div className="ppImage">
                <LazyLoadComponent>
                    <img alt="blog cover" className="blogPageImage" src={ postData.cover }/>
                </LazyLoadComponent>
            </div>

            <div className="postContent" dangerouslySetInnerHTML={{__html : postData.content}} ></div>
            <>
            <div className="postBottom" >
                <div className="pb">
                   <span className="likebox">{likes.length}</span>
                   <button onClick={likePost} className="likebutton">
                        <svg width="20px" height="20px" viewBox="0 0 64 64"  aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet" fill="#000000">

                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                            <g id="SVGRepo_iconCarrier">

                            <path d="M54.255 25.75c-2.854-1.952-4.644-4.562-6.075-8.581c-.532-1.494-1.859-2.46-3.381-2.46c-1.636 0-3.132 1.055-4.104 2.894a8.582 8.582 0 0 0-.986 3.28c-1.008-1.838-3.056-2.229-4.027-.922c0 0-7.986-6.071-10.71-8.004c-3.62-2.566-8.415.276-8.295 3.211c-4.571-2.478-9.589 1.897-8.043 6.482c-1.768-.324-6.29 4.363-1.536 7.963c-3.293.338-4.572 5.494-.745 7.841c0 0 .018.713.069 1.063c-2.522.766-3.392 5.534-.953 7.039c0 0 17.59 11.232 23.645 14.611c3.29 1.836 8.955 2.557 14.002.918c4.901-.508 9.059-3.106 12.4-7.736c9.195-12.742 1.911-25.429-1.261-27.599m-1.077 26.357c-3.829 5.38-9.328 5.938-13.536 5.938c-6.869 0-11.065-3.293-11.065-3.293L9.725 40.676c-3.569-2.464-1.42-6.39 1.084-6.318l14.997 10.219l1.846.115S14.257 35.076 9.92 31.691c-2.532-1.976-1.7-5.75 1.578-6.5l18.756 13.464l1.844.115l-20.035-15.538c-4.233-3.094.015-8.928 4.119-5.957c4.733 3.426 18.972 14.285 18.972 14.285l1.846.116l-18.745-15.527c-.162-2.396 3.025-4.479 5.573-2.573c5.124 3.833 20.504 15.32 20.504 15.32c-.396-1.109-.594-1.943-.594-1.943s-2.922-4.858-1.339-8.395c1.39-3.102 4.202-2.598 4.769-.931c1.507 4.438 3.068 7.072 6.191 9.292c3.988 2.835 8.066 13.605-.181 25.188" fill={likecolor}/>

                            <path d="M46.041 2.889L37.431 2l2.938 12.26z" fill={likecolor}/>

                            <path d="M53.165 5.264L48.79 15.457l10.205-2.734z" fill={likecolor}/>

                            <path d="M29.111 3.549l-6.21 5.133l8.944 5.828z" fill={likecolor}/>

                            </g>

                        </svg>
                   </button>
                </div>
                <div className="pb">
                   { userInfo.id === postData.user._id ? <Link className="editPost" to={`/edit/${id}`}>Edit Post</Link> : ''}
                    <button className="editPost" onClick={copyText} >
                        Share
                        <div className={clip} >Copied</div>
                    </button> 
                </div>
                
            </div>
            <div className="comment">
                <div onClick={()=>{setCommentstate(commentstate==='noteOff'?'comments':'noteOff')}} className="cm-head">({comments.length}) Comments {commentstate==='noteOff'?'⇲':'⇱'} </div>
                <div className={commentstate}>
                    {comments.length === 0  ?<div className="no-com"> No comment see here... </div>: comments.map(comment => <Comment datas={comment} />)}
                </div>
                { userInfo.id ? <div className="comment-i">
                    <input value={commenttext} onChange={e => { setCommenttext(e.target.value)}} placeholder="Replying to ali's post..." type="text" className="textscreen"></input>
                    <button onClick={addComment} className="send-text">Send</button>
                </div>:''}
            </div>
            </>
        </div>
        </>
    )
};