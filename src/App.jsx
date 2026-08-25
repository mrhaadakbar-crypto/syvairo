import React from 'react'
import Home from './Pages/Home'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import From from './Component/From';
import Services1 from './Component/Services1';

import About from './Pages/About';
import Media from './Pages/Media';
import Careers from './Pages/Careers';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <>



  <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<From/>} path='/from'/>
          <Route element={<Services1/>} path='/services' />
          <Route element={<Media/>} path='/blog' />
          <Route element={<About/>} path='/about' />
          <Route element={<Careers/>} path='/careers' />
          <Route element={<Contact/>} path='/contact' />
        </Routes>
  </BrowserRouter>




    </>
  )
}

export default App