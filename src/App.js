import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
// import About from './component/About';
import { useState } from 'react';

function App() {
  const[mode, setMode] =useState('light');
  const toggleMode = ()=>{
if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor = '#042743';
}else{
  setMode('light');
  document.body.style.backgroundColor = 'white';
}
}
  return (
  <>
  <Navbar title='Textutils' aboutText='About' mode={mode} toggleMode = {toggleMode}/>
  <div className="container">
  <Textform heading='Type Here' mode = {mode}/>
  </div>
  {/* <About/> */}
  </>
  );
}

export default App;
