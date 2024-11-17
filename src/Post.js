import { formatISO9075 } from 'date-fns';
import { Link } from "react-router-dom";
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import avatar from "./avatar.PNG";
import { useSelector } from 'react-redux';
import { colorGrades } from './ui/theme';


export default function Post( { _id, title, summary, cover, user, createdAt}) {

    const mode = useSelector( (state)=>state.mode);
    const palette = colorGrades(mode);
  
    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = formatISO9075( new Date(createdAt)).split(' ')[0].split('-');
    const dateStr = `${months[date[1]-1]} ${date[2]}, ${date[0]}`;

    return (
      <div className='postcard'>
        <div>
          <Link to={`/post/${_id}`}>
            <img  width='100%' height='240px' className='postCardImage' src={ cover } alt='post'/>
          </Link>
        </div>
        <div className='postInfo'>
         <Link className='user-link' to={`/profile/${user.username}`}>
            <p className='author'>
              <img height='30px' width='30px' className="cm-img" alt="dp" src={user.profilePic === ''?avatar:user.profilePic}></img>
              <span style={{ color: (palette.title)}} className='user'>{user.username[0].toUpperCase() + user.username.slice(1)}</span>
            </p>
          </Link>
          <Link className='postTitle' to={`/post/${_id}`}>
          <div className="postText">
            <span style={{ color: (palette.title)}}>{ title.length > 90 ? title[0].toUpperCase() + title.slice(1, 90) + '...': title[0].toUpperCase() + title.slice(1) }</span>
          </div>
          </Link>
          <Link className='summary' to={`/post/${_id}`}>
          <div className="postText">
              <span style={{ color: (palette.text)}} className='summary'> { summary.slice(0, 90) + '...'  }</span>
          </div>
          </Link>
          <p className='author'>
            <span style={{ color: (palette.text)}}>{dateStr}</span>
          </p>
        </div>
      </div>
    );
};