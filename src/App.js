import React from 'react'
import './index.css';
import NavBar from './Component/Navbar';
import TextUtils from './Component/Textutils';
import { useState } from 'react';
import {toast ,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [mode , setMode] = useState('dark');
  const toggleMode = (cls) =>{
    removebodycolor();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark')
     document.body.style.backgroundColor = 'SlateBlue'
     toast.success("New BackGround mode enable")
      // setAllBtn(
      //   document.body.style.backgroundColor = 'grey'

      // )
    }else{
      setMode('light')
      document.body.style.backgroundColor ='white'
      document.body.style.Color = 'black'
      toast.success("New Background mode enable")
    }
  }
  const removebodycolor = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')

    
  }
          
  return (
    <>

    <ToastContainer autoClose={1000} theme={"colored"}  position={"top-center"}  />
    <NavBar  text={"Navbar-features"} mode={mode} toggleMode={toggleMode} />
    <div className="container">
    <TextUtils   mode={mode}  />
    </div>
    
    </>
   
  
  );
}

export default App;
