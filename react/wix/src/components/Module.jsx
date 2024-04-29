import React from 'react'
import {  Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './Home';
import Portfolio from './Portfolio';
import Books from './Books';
import About from './About';
import Contact from './Contact';
import ClientAlbmuns from './ClientAlbmuns';
import Blogs from './Blogs';

export const Module = () => {
    return (
      <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="Portfolio" element={<Portfolio/>}/>
          <Route path="Books" element={<Books/>}/>
          <Route path="ClientAlbmuns" element={<ClientAlbmuns/>}/>
          <Route path="Blogs" element={<Blogs/>}/>
          <Route path="Contact" element={<Contact/>}/>
          
      </Routes>
      </BrowserRouter>
      </>
    )
  }
  
export default Module;

