import './write.css'
import Draft from "../draft/draft";
import TextEdit from '../textedit/TextEdit';



export default function Write() {

  return (
    <div className='write'>
        
        <img className='writeImg' src="산책돈.jpg" alt="" />
        <form className='writeForm'>
            <div className='writeFormGroup'>
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-circle-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display : "none"}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup2">
                <TextEdit/>
                {/* <textarea placeholder='Tell your story...' type="text" className='writeInput writeText'></textarea> */}
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}
