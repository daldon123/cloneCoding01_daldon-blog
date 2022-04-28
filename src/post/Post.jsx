import './post.css'
import { Link } from 'react-router-dom';

export default function Post() {
  return (
    
    <div className='post'>
      <Link to="/Single">
        <img className='postImg' src="빙글돈.gif" alt="" />
      </Link>  
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                "꿀꿀꿀꿀꿀꿀꿀꿀꿀"
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>
        "꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑 꾸에에에엑"
        </p>

    </div>
    
  )
}
