import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
//import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
const[mode,setMode]=useState('light') //to check dark mode is enable

const[alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null)
  }, 1000);
}

const toggleMode = ()=>{
  if(mode === 'light'){
  setMode('dark')
  document.body.style.backgroundColor='#042743';
  showAlert('Dark mode has been enable','success')
}
else{
  setMode('light')
  document.body.style.backgroundColor='white';
  showAlert('Light mode has been enable','success')
}
}
return (
  <>
  {/* <Navbar title="TextUtils"  about="Contact us"/> */}
  {/* <Navbar /> */}
  <Navbar title="TextUtils"  about="About us" mode={mode} toggleMode={toggleMode}/>
  
{/* <Router> */}
    
    <Alert alert={alert} />
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading='Enter the text here' mode={mode}/>
    {/* <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter the text here' mode={mode}/>} />
    </Routes> */}
  </div>
{/* </Router> */}
    
    </>
);
}

export default App;
