import './singlepost.css'

export default function singlePost() {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
            <img className='singlePostImg' src="귀돈.jpg" alt="" />
            <h1 className="singlePostTitle">
                달돈이 꿀잠
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Safak</b> </span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>
            zzzzzzzzzzzzzzzzzZZZZZZZZZZZZZZZZZZZZZZzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZzzzzzzzzZZZZZZZZZZZ
            zzzzzzzzzzzzzzzzzZZZZZZZZZZZZZZZZZZZZZZzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZzzzzzzzzZZZZZZZZZZZ
            zzzzzzzzzzzzzzzzzZZZZZZZZZZZZZZZZZZZZZZzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZzzzzzzzzZZZZZZZZZZZ
            zzzzzzzzzzzzzzzzzZZZZZZZZZZZZZZZZZZZZZZzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZzzzzzzzzZZZZZZZZZZZ
            zzzzzzzzzzzzzzzzzZZZZZZZZZZZZZZZZZZZZZZzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZzzzzzzzzZZZZZZZZZZZ
            </p>
        </div>
    </div>
  )
}
