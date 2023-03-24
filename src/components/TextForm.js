import React from 'react'

export default function TextForm(props) {
  return (
    <>
        <h2>{props.Heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={8} defaultValue={""} />
        </div>
        <button className='btn btn-primary'>Convert to UpperCase</button>
    </>
  )
}
