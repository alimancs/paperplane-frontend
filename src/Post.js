import { formatISO9075 } from 'date-fns';
import { Link } from "react-router-dom";
import { LazyLoadComponent } from 'react-lazy-load-image-component';


export default function Post( { _id, title, summary, cover, user, createdAt}) {

    function base64ToImageURL(cover) {

      // convertion to Blob
      const bytestr = atob(cover.split(',')[0]);
      const mimeStr = cover.split(',')[0].split(':')[1].split(';')[0];
      const ia = new Uint8Array(bytestr.length);

      for ( let i = 0; i<bytestr.length; i++ ) {
        ia[i] = bytestr.charCodeAt[i];
      }

      const blob =  Blob([ia], { type: mimeStr});
      return URL.createObjectURL(blob);
    }

    const coverImage = base64ToImageURL(cover);

    
    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = formatISO9075( new Date(createdAt)).split(' ')[0].split('-');
    const dateStr = `${months[date[1]-1]} ${date[2]}, ${date[0]}`;
    return (
        <div className='postcard'>
        <div>
          <Link to={`/post/${_id}`}>
          <LazyLoadComponent>
            <img  width='100%' height='240px' className='postCardImage' src={ coverImage } alt='post'/>
          </LazyLoadComponent>
          </Link>
        </div>
        <div className='postInfo'>
         <Link to={`/profile/${user.username}`}>
            <p className='author'>
              <span className='user'>By {user.username[0].toUpperCase() + user.username.slice(1)}</span>
            </p>
          </Link>
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