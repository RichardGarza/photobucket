import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-primary">
          <h1>
            <i className=" m far fa-images" />
            {'  '}Photobucket
          </h1>
          <ul>
            <li>Sign In</li>
            <li>Sign Up</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
