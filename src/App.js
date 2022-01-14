import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './component/Organisms/Header';

import Home from './component/Pages/Home/Home';
import About from './component/Pages/About/About';
import Services from './component/Pages/Services/Services';
import Technical from './component/Pages/Technical/Technical';
import Team from './component/Pages/Team/Team';
import Projects from './component/Pages/Projects/Projects';
import Contact from './component/Pages/Contact/Contact';

function App(props) {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/technical" element={<Technical/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;