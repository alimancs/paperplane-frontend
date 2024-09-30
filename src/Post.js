import { formatISO9075 } from 'date-fns';
import { Link } from "react-router-dom";
import { LazyLoadComponent } from 'react-lazy-load-image-component';


export default function Post( { _id, title, summary, cover, user, createdAt}) {
    return (
        <div className='postcard'>
        <div>
          <Link to={`/post/${_id}`}>
          <LazyLoadComponent>
            <img  width='100%' height='240px' className='postCardImage' src={ 'https://paperplane-blog-api.onrender.com/'+ cover} alt='post'/>
          </LazyLoadComponent>
          </Link>
        </div>
        <div className='postInfo'>
          <div className="postText">
            <Link className='postTitle' to={`/post/${_id}`}>
            <span>{title}</span>
            </Link>
          </div>
          <p className='author'>
            <a className='user'>{user.username}</a>
            <time>{ formatISO9075( new Date(createdAt)) }</time>
          </p>
          <div className="postText">
              <span className='summary'> { summary  }</span>
          </div>
        </div>
      </div>
    );
};