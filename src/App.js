import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import Translate from './components/Translate';
// import About from './components/About';






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

      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm showAlert={showAlert} Heading="Enter the text to analyze below"  />
      </div>
    </>
  );
}

export default App;
