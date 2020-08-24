import React from 'react';
//STYLES
import './App.css';
import 'tachyons';
//COMPONENTS
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import MyStack from './MyStack';

function App() {
  return (
    <>
      <Navigation />
      <AboutMe />
      <MyStack />
    </>
  );
}

export default App;
