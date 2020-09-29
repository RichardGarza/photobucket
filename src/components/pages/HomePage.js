import React, { Component } from 'react';
import PublicCollections from './PublicCollections.js';
import SignIn from '../partials/SignIn.js';
import SignUp from '../partials/SignUp.js';

class Homepage extends Component {
  render() {
    return (
      <div>
        <PublicCollections />
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default Homepage;
