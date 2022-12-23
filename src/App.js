import {Route,Routes} from 'react-router-dom'
import './App.css';
import About from './components/About';
import Theme from './components/Theme';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Alert from './components/Alert';



function App() {
  const [mode,setMode] = useState('light')
  const  [alert,setAlert]= useState(null)


  let showAlert =(messege,type)=>{
    setAlert({
messege:messege,
type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const togglemode=()=>{
   if (mode==="light"){
    setMode('dark');
 document.body.style.backgroundColor='#3a3b3c';
 showAlert('Dark mode has been enabled','success');
   }else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert('Light mode has been enabled','success');
   }
  }

  return (
    <>
    <Navbar title='Change it' mode={mode} togglemode={togglemode} />
    <Alert alert={alert} />
     <Routes>
      <Route path='/'       element={<div className='container'> <Home showAlert={showAlert} mode={mode}/></div>} />
      <Route path='/About'  element={<About/>} />
      <Route path='/Theme'  element={<Theme/>} />
     </Routes>
     </>
  );
}

export default App;
