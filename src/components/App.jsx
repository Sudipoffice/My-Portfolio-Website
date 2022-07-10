import React from 'react';
import Home from "./Items/Home";
import About from './Items/About';
import Skills from './Items/Skills';
import Projects from './Items/Projects';
import Contact from './Items/Contact';



function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;