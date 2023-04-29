import React, {useState} from 'react'
import Navbar from './Navbar'
import Alert from './Alert'


export default function About(props) {

    // let myStyle = {
    //     color: props.mode==="dark"?"white":"#113a62",
    //     backgroundColor: props.mode==="dark"?"#113a62":"white"
    // }
    const [mode, setmode] = useState('light')
    const [myStyle, setmystyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
  const [btnText, setBtnText] = useState("Dark Mode")

    const toggleStyle = () =>{
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
    const [alert, setAlert] = useState(null)
    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
    }
  
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  
    const togglemode = () => {
        if (mode === 'light') {
          setmode('dark')
          document.body.style.backgroundColor = '#113a62'
          showAlert("Dark mode has been enable", "success");
        } else {
          setmode('light')
          document.body.style.backgroundColor = 'white'
          showAlert("Light mode has been enable", "success");
        } 
      }
    
    return (
        <>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} togglemode={togglemode}/>
             <Alert alert={alert} />
        <div className='container my-4' style={myStyle}>
            <h2 className='my-4'>About us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                     Analyze Your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                 Free to use 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container '>
            <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btnText}</button>
            </div> */}
        </div>
        </>
    )
}
