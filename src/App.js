import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Title from './components/Title';
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Projects />

    </div>
  );
}

export default App;
