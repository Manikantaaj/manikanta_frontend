

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar } from 'react-bootstrap';





import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Books from './components/Books';
import Blogs from './components/Blogs';
import ClientAlbmuns from './components/ClientAlbmuns';
import Contact from './components/Contact';






function App() {
 
  return (
  


    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Portfolio' element={<Portfolio/>}>
      </Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Books' element={<Books/>}></Route>
      <Route path='/Blogs' element={<Blogs/>}></Route>
      <Route path='/ClientAlbmuns' element={<ClientAlbmuns/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;
