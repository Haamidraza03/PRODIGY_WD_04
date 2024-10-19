import './App.css';
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/Pages/Home';
import Contact from '../src/Pages/Contact';

function App() {
  useEffect(() => {
    const handleRightClick = (e) => {
      e.preventDefault();
    }

    document.addEventListener('contextmenu', handleRightClick);
    
    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
    }
  }, []);

  useEffect(()=>{
    AOS.init({once:"true"});
  },[])
  return (
    
    <BrowserRouter>
      <div className="App">
      <html lang="en">
      <head>
        {ProcessingInstruction.env.NODE_ENV === "production" && (<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5065836333714009"
     crossorigin="anonymous"></script>)}
      </head>
      </html>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
