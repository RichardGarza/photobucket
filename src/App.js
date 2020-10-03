import React from 'react';
import './App.css';
import Homepage from './components/pages/HomePage.js';
import ForgotPassword from './components/pages/ForgotPassword.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
