import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';

function TextUtils(props){
   
     const[text , setText] = useState("Enter some text Here");

     const textHandler = () =>{
        let newText = text.toUpperCase();
        setText(newText);
       toast.success("Text Converted To UpperCase")

     }
     const handleonChange = (e) => {
          setText(e.target.value);

     }
     const textloHandler = () =>{
         let loText = text.toLowerCase();
         setText(loText);
          toast.success("Text Converted To LowerCase")

     }
     const textclearHandler = () => {
         setText("");
         toast.warning("text clear successfully")
     }

   
     
     const goodBhai = (e)=> {
          
         toast.success('Thankyou for Your feedback')
     }
   
    

    return(
       <>
                    <div className="mb-3 my-3"   >
            <label htmlFor="exampleFormControlTextarea1 tw-10" className="form-label">Enter Text Below</label>

            <textarea style={{backgroundColor : props.mode === 'warning'?'black':'warning'}} value={text}  onChange={handleonChange}   className="form-control "   id="exampleFormControlTextarea1"  rows="8"></textarea>
            
            <button className="btn btn-primary mx-1  mt-2" onClick={textHandler}  >UpperCase</button>
            <button className="btn btn-primary mx-1  mt-2" onClick={textloHandler}  >LowerCase</button>
            <button className="btn btn-primary mx-1  mt-2" onClick={textclearHandler}  >Clear Text</button>
            {/* <button  onClick={togglebtn}  className="btn btn-primary">Enable mode</button> */}

              {/* <div className="form-check form-switch"   onClick={togglebtn}>
           <input className="form-check-input"     type="checkbox" role="switch" id="flexSwitchCheckChecked" />
           <label className="form-check-label"   htmlFor="flexSwitchCheckChecked">Enable Background </label>
        </div> */}

            
            </div>
            <div className="container my-3" >
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
              <h3>Give Us Your FeedBack</h3>
            <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here"    id="floatingTextarea2" rows="16"  ></textarea>
        <label htmlFor="floatingTextarea2">Comments</label>
        <button className="btn btn-primary my-2 float-end" onClick={goodBhai} >Submit</button>
       </div>
       </>
    )
}
export default TextUtils