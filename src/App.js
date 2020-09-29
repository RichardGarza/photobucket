import React from 'react';
import './App.css';
import Homepage from './components/pages/HomePage.js';
import Navbar from './components/partials/NavBar.js';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Homepage />
    </div>
  );
}

export default App;
