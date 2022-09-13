import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/Pages/Home'
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<AboutUs/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
