import React, {useState} from 'react'






export default function TextForm(props) {


  const handleOnchange = (event) =>{
    console.log("on change")
    setText(event.target.value)
    
  }


  const handleClick = () =>{
    console.log("uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
  }
  
  const handleClick2 = () =>{
    console.log("LowerCase was clicked " + text)
    let newText2 = text.toLowerCase();
    setText(newText2)
  }

const [text , setText] = useState("Enter Text Here")

  return (
    <>
        <h2>{props.Heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text}  onChange={handleOnchange} rows={8} defaultValue={""} />
        </div>
        <button className='btn btn-primary' onClick={handleClick}>Convert to UpperCase</button>
        <button className='btn btn-primary' onClick={handleClick2}>Convert to LowerCase</button>
        {/* <button className='btn btn-primary' onClick={handleClickbold}>Convert to Bold </button> */}
    </>
  )
}
