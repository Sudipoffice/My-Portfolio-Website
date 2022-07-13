import React from 'react';
import Home from "./Items/Home";
import About from './Items/About';
import Skills from './Items/Skills';
import Projects from './Items/Projects';
import Contact from './Items/Contact';
import './App.css';
import Favicon from "react-favicon";
import pic from "../images/Favicon.png";


function App() {
  return (
    <div className="App">
    <Favicon url={pic} />
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;