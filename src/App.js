import React from 'react';
//STYLES
import 'tachyons';
//COMPONENTS
import Navigation from './organisms/Navigation';
import AboutMe from './organisms/AboutMe';
import MyStack from './organisms/MyStack';
import Experience from './organisms/Experience';
import Projects from './organisms/Projects';
import Contact from './organisms/Contac';
import Footer from './organisms/Footer';

function App() {
  return (
    <>
      <Navigation />
      <AboutMe />
      <MyStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
