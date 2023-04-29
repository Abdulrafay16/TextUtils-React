import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
// import Translate from './components/Translate';
import {BrowserRouter, Route,Routes} from "react-router-dom";







function App() {
  const [mode, setmode] = useState('light')
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
      {/* <About/> */}
      {/* <Translate /> */}
{/* 
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm showAlert={showAlert} Heading="Enter the text to analyze below" />
        <About />
      </div> */}


      <Alert alert={alert} />
      <BrowserRouter>
      <Routes>
        <Route path='/navbar' element={<Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} togglemode={togglemode}/>}/>
        <Route path='/textform' element={<TextForm showAlert={showAlert} Heading="Enter the text to analyze below" />}/>
        <Route path='/about' element={  <About mode={mode} />} />
        
      </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
