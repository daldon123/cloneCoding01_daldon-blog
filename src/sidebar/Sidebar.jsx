import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem1">
            <span className='sidebarTitle1'>About Me</span>
            <img className='sidebarImg' src="스윗달돈.jpg" alt="" />
            <p>"꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀꿀"</p>
        </div>
        <div className='sidebarItem2'>
            <span className='sidebarTitle2'>Categories</span>
            <ul className='sidebarList'>
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className='sidebarItem3'>
            <span className='sidebarTitle3'>Follow Us</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <a href="https://www.instagram.com/daldon123/?hl=ko"><i className="sidebarIcon fa-brands fa-instagram-square"></i></a>        
                <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
            </div>
        </div>
    </div>
  )
}
