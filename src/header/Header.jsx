import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          <span className='headerTitleSm'>Cute & Prity</span>
          <span className='headerTitleLg'>Daldon-Blog</span>
        </div>
        <img className='headerImg' src="산책돈.jpg" alt="daldon" />
    </div>
  )
}
