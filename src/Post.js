import { formatISO9075 } from 'date-fns';
import { Link } from "react-router-dom";
import { LazyLoadComponent } from 'react-lazy-load-image-component';


export default function Post( { _id, title, summary, cover, user, createdAt}) {
    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = formatISO9075( new Date(createdAt)).split(' ')[0].split('-');
    const dateStr = `${months[date[1]-1]} ${date[2]}, ${date[0]}`
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
          <p className='author'>
            <a className='user'>By {user.username[0].toUpperCase() + user.username.slice(1)}</a>
          </p>
          <Link className='postTitle' to={`/post/${_id}`}>
          <div className="postText">
            <span>{ title.length > 90 ? title[0].toUpperCase() + title.slice(1, 90) + '...': title[0].toUpperCase() + title.slice(1) }</span>
          </div>
          </Link>
          <Link className='summary' to={`/post/${_id}`}>
          <div className="postText">
              <span className='summary'> { summary.slice(0, 90) + '...'  }</span>
          </div>
          </Link>
          <p className='author'>
            <span>{dateStr}</span>
          </p>
        </div>
      </div>
    );
};