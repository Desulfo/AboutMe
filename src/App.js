import React from 'react';
//STYLES
import './App.css';
import 'tachyons';
//COMPONENTS
import Navigation from './Navigation';
import AboutMe from './AboutMe';

function App() {
  return (
    <>
      <Navigation />
      <AboutMe />
    </>
  );
}

export default App;
