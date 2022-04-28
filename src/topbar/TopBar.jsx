import './topbar.css'
import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <a href="https://www.instagram.com/daldon123/?hl=ko"><i className="topIcon fa-brands fa-instagram-square"></i></a>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className='topListItem'><Link to="/" className="homeLink">HOME</Link></li>
          <li className='topListItem'>ABOUT</li>
          <li className='topListItem'><Link to ="/Single" className='singleLink'>CONTENT</Link></li>
          <li className='topListItem'><Link to ="/Write" className='writeLink'>WRITE</Link></li>
          <li className='topListItem'><Link to ="/Login" className='loginLink'>LOGIN</Link></li>
          <li className='topListItem'><Link to ="/Settings" className='settingsLink'>SIGN UP! <i class="settingsIcon fa-solid fa-user-plus"></i></Link></li>
        </ul>
      </div>
      <div className="topRight">
        <img className='topImg' src="달돈총.JPG" alt="daldon" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
  )
}
