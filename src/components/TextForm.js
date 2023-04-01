import React, { useState } from 'react'






export default function TextForm(props) {


  const handleOnchange = (event) => {
    // console.log("on change")
    setText(event.target.value)

  }
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () => {
    // console.log("LowerCase was clicked " + text)
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handclearclick = () => {
    let newText = ""
    setText(newText)
  }
  const [text, setText] = useState("")

  const [myStyle, setmystyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  const [btnText, setBtnText] = useState("Dark Mode")

  const handletoggleclick = () =>{
    if(myStyle.color == 'black'){
        setmystyle({
            color: 'white',
            backgroundColor: 'black'
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
        <h2>{props.Heading}</h2>
        <div className="mb-3" >
          <textarea  style={myStyle} className="form-control" value={text} onChange={handleOnchange} rows={8} defaultValue={""} />
        </div>
        <button className='btn btn-primary mx-3 my-3' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-3  my-3' onClick={handleLoClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-3  my-3' onClick={handclearclick} >Clear Text</button>
        <button className='btn btn-primary mx-3  my-3' onClick={handletoggleclick}>{btnText}</button>
        {/* <button className='btn btn-primary' onClick={handleClickbold}>Convert to Bold </button> */}
      </div>
      <div className='container my-3' style={myStyle}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
