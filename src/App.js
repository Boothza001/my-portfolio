import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const color = "purple";

  return (
    <>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Education color={color} />
      <Experience color={color} />
      <Projects color={color} />
      <Contact color={color} />
      <Footer />
    </>
  );
}

export default App;
