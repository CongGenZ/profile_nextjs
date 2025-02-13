"use client";

import Navbar from "./components/Navbar.jsx";
import Header from './components/Header';
import About from "./components/About.jsx";
import Server from "./components/Server.jsx";
import Work from './components/Work';
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect, useState } from 'react';


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  useEffect(()=>{
    if(localStorage.theme === 'dark' ||(!('theme' in localStorage) && window.matchMedia('(prefer-color-scheme:dark)').matches) ){
    setIsDarkMode(true)

    }else{
    setIsDarkMode(false)
    }
},[])

  useEffect (() =>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';

    }
    else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }

  },[isDarkMode])
  return (
    <>
    
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Header isDarkMode={isDarkMode}/>
      <About isDarkMode={isDarkMode}/> 
      <Server isDarkMode={isDarkMode}/>
   <  Work isDarkMode={isDarkMode}/>
    <Contact isDarkMode={isDarkMode}/>
    <Footer isDarkMode={isDarkMode}/>
    </>
  );
}
