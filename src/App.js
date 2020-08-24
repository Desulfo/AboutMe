import React from 'react';
//STYLES
import './App.css';
import 'tachyons';
//COMPONENTS
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import MyStack from './MyStack';
import Projects from './Projects';
import Contact from './Contac';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navigation />
      <AboutMe />
      <MyStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
