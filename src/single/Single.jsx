import Sidebar from '../sidebar/Sidebar'
import SinglePost from '../singlepost/SinglePost'
import './single.css'

export default function single() {
  return (
    <div className='single'>
        <SinglePost />
        <Sidebar />
    </div>
  )
}
