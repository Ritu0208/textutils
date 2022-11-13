import React, { useState } from 'react'

export default function TextForm(props) {
  // const event = Event;
  const handleUpClick = () => {
    // console.log("handleUpClick " + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase", "success")
    document.title = "TextUtils UpperCase";
  }
  const handleLoClick = () => {
    // console.log("handleUpClick " + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase", "success")
    document.title = "TextUtils LowerCase";
  }

  const handleCopy = () => {
    
    navigator.clipboard.writeText(text);
    
    props.showAlert("Copy to clipboard", "success")
    document.title = "TextUtils Copied To Clipborad";
  }

  const handleClearClick = () => {
    // console.log("handleUpClick " + text);
    let newText = " ";
    setText(newText)
    document.title = "TextUtils Clean Textarea";
  }


  const handleOnChange = (event) => {
    // console.log("handleOnChange");
    setText(event.target.value);
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className="mb-3">
          <h1 htmlFor="myBox">{props.LabelText}</h1>
          <textarea className='form-control' onChange={handleOnChange} value={text} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} name="" id="myBox" cols="30" rows="10"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>

        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>

        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>

        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>

      </div>
      <div className='container my-3 ' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p> {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>

        <p> {0.08 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minute to read</p>
        <h2>Preview </h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  )
}