import Sidebar from '../sidebar/Sidebar'
import './settings.css'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className='settingsUpdateTitle'>Update your Account</span>
                <span className='settingsDeleteTitle'>Delet Account</span>
            </div>
            <form className='settingsForm'>
                <label>Profile picture</label>
                <div className='settingsPP'>
                    <img className='settingsImg' src="애기돈.jpg" alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                </div>

                <input type="file" id='fileInput' style={{display:"none"}}/>
                <label>UserName</label>
                <input type="text" placeholder='daldon'/>
                <label>Email</label>
                <input type="email" placeholder='daldon.naver.com'/>
                <label>Password</label>
                <input type="password"/>
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
