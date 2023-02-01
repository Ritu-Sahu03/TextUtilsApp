import React, {useState} from "react";


export default function Textform(props) {
    const [text, setText] = useState("");
    
    const handleClear =()=>{
        const newText = '';
        setText(newText);
    }

    const handleLower=()=>{
        const newText = text.toLowerCase();
        setText(newText);
    }

    const handleUpper=()=>{
        const newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnchange=(event)=>{
      setText(event.target.value);
    }

    const handleWhiteSpace=()=>{
      let newText = text.replace(/\s+/g, ' ');
      setText(newText);
    }
   

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}} >
    <h1>{props.heading}</h1>

    <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'rgb(24, 24, 24)':'white',color:props.mode==='dark'?'white':'black'}} value = {text} onChange = {handleOnchange} rows="8" placeholder = "Enter Text Here"></textarea>
      </div>
     
      <button className="btn btn-primary mx-1" onClick = {handleUpper}>Convert Uppercase</button>
      <button className="btn btn-primary  mx-1" onClick = {handleLower}>Convert Lowercase</button>
      <button className="btn btn-primary  mx-1" onClick = {handleWhiteSpace}>Remove Extra Whitespaces</button>
      <button className="btn btn-primary  mx-1" onClick = {handleClear}>Clear</button>
  
    </div>
      
     <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}} >
     <h2>{props.heading}</h2>
     <p>{(text.split(" ")).length} words and {text.length} characters</p>
     <p>{0.008 * ((text.split(" ")).length)} minutes to read</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter text above to preview"}</p>
     </div>
    </>
  );
}
