import React, { useState } from 'react'
// import translate from '@vitalets/google-translate-api';






export default function TextForm(props) {



  const handleOnchange = (event) => {
    // console.log("on change")
    setText(event.target.value)

  }
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('converted to Uppercase', "success")
  }
  const handleLoClick = () => {
    // console.log("LowerCase was clicked " + text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to Lowercase", "success")
  }
  const handclearclick = () => {
    let newText = ""
    setText(newText)
  }
 
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset copied state after 2 seconds
    props.showAlert("Copy to Clipboard", "success")
  };




  const [myStyle, setmystyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  const [btnText, setBtnText] = useState("Dark Mode")

  const handletoggleclick = () =>{
    if(myStyle.color == 'black'){
        setmystyle({
            color: 'white',
            backgroundColor: '#113a62'
        })
      setBtnText(" Light Mode")
    }
    else{
        setmystyle({
            color: 'black',
            backgroundColor: 'white'
        })
        setBtnText("Dark Mode")
    }
   
}
 

  return (
    <>
      <div className='container' style={myStyle}>
        <h2 >{props.Heading}</h2>
        <div className="mb-3" >
          <textarea className="form-control" style={myStyle} value={text}  onChange={handleOnchange} rows={8} defaultValue={""} />
        </div>
        <button type="button" class="btn btn-outline-primary mx-2 my-2" style={myStyle} onClick={handleUpClick}>Convert to UpperCase</button>
        <button type="button" class="btn btn-outline-primary mx-2 my-2" style={myStyle} onClick={handleLoClick}>Convert to LowerCase</button>
        <button type="button" class="btn btn-outline-primary mx-2 my-2" style={myStyle} onClick={handclearclick} >Clear Text</button>
        <button type="button" class="btn btn-outline-primary mx-2 my-2" style={myStyle} onClick={handletoggleclick}>{btnText}</button>
        <button type="button" class="btn btn-outline-primary mx-2 my-2" style={myStyle} onClick={handleCopy}>{copied ? 'Copied!' : 'Copy Text'}</button>

        {/* <button className='btn btn-primary' onClick={handleClickbold}>Convert to Bold </button> */}
      </div>
      <div className='container my-3' style={myStyle}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox about  preview it here"}</p>
      </div>
    </>
  )
}
