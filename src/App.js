import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');   //whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has been Enabled', 'success');
      document.title = 'TextUtils - Dard Mode';      // if we want to change the title
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled', 'success');
      document.title = 'TextUtils - Light Mode';      // if we want to change the title
    }
  }
  return (
    <>
    <Router>
     <Navbar title = "TextUtils" aboutText = "About TextUtils" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert} />
     <div className="container my-3">
     <Routes>
          <Route exact  path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode} />} />
        </Routes>
     </div>
     </Router>
    
    </>
  );
}

export default App;
