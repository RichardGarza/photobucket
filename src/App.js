import React from 'react';
import './App.css';
import Homepage from './pages/Homepage.js';
import Navbar from './pages/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Homepage />
    </div>
  );
}

export default App;
