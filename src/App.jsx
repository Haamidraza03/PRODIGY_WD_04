import './App.css';
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/Pages/Home';
import Contact from '../src/Pages/Contact';

function App() {
  useEffect(()=>{
    AOS.init({once:"true"});
  },[])
  return (
    <BrowserRouter>
      <div className="App">
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
