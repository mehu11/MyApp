import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
      //  console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
      //console.log("Lower case was clicked");
      let newText = text.toLowerCase();
      setText(newText)
    }

    const handleclearClick = ()=>{
      //console.log("Clear the text");
      let newText = "";
      setText(newText)
    }

    const handleiClick = ()=>{
      //console.log("italicize the text");
      let newText = text.italics();
      setText(newText)
    }
    const handleOnchange = (event)=>{
        //console.log("On change");
        setText(event.target.value)
    }

   // const handleCopy = ()=>{ // clipboard API//
     //  let text = document.getElementById("myBox");
       //text.select();
       //navigator.clipboard.writeText(text.value);
    //}
    const handleExtraSpaces = ()=>{ 
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "))
   
    }
    const [text, setText] = useState('Enter your text');
  //  text = "new text";//wrong way to change the state
    //setText("new text");//correcT way to change the state
  return (
    <>
    <div className ="container" style={{color: props.mode==='dark'?'white':'rgb(18 9 86)'}}>
      <h1 >{props.heading}</h1>

      <div className="mb-3">
       <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'white':'rgb(18 9 86)'}} id="mybox" value={text} onChange={handleOnchange} rows="8"/>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleiClick}>Italicize text</button>
      <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear text</button>
     
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
      
    </div>
    
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'rgb(18 9 86)'}} >
        <h1 >Your text summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}  Avg Minutes read</p>
        <h2 className="mx-0">Preview</h2>
        <p>{text.length>0?text:"Enter Something to Preview it Here"}</p>
    </div>
    </>
  )
}
