import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log('inside');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  }
  const handleLowerClick = ()=>{
    // console.log('inside2');
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  }
  const handleClearClick = ()=>{
    // console.log('inside2');
    let newText = ' ';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }
  const handlcopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  }
  const removeExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }
  const handleOnChange = (event)=>{
    // console.log('hello');
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode === 'light'?'#042743':'white'}}>
      <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handlcopy}>Copy text</button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'light'?'#042743':'white'}}>
       <h1>Your text Summary</h1>
       <p>{text.split(' ').length} words and {text.length} characters</p>
       <p>{0.008 * text.split(' ').length} Minutes read</p>
       <h2>Preview</h2>
       <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
