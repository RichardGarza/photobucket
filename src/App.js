import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import PublicCollections from './components/pages/PublicCollections';
import SignIn from './components/partials/SignIn.js';
import SignUp from './components/partials/SignUp.js';
import Grid from '@material-ui/core/Grid';
import ForgotPassword from './components/pages/ForgotPassword';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* Navigation Bar */}
          <nav className="navbar bg-primary">
            <h1>
              <i className=" m far fa-images" />
              {'  '}
              <Link to="/">Photobucket</Link>
            </h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signIn">Sign In</Link>
              </li>
              <li>
                <Link to="/signUp">Sign Up</Link>
              </li>
            </ul>
          </nav>
          <div>
            {/* Switch Router To Determine Which Page To Display */}
            <Switch>
              <Route path="/signIn">
                <SignIn />
              </Route>
              <Route path="/signUp">
                <SignUp />
              </Route>
              {/* Route for comedic 'Forgot Password' page */}
              <Route path="/forgotPassword">
                <div className=" all-center m-2">
                  <ForgotPassword />
                  <Grid className="m-2 all-center" container>
                    <Grid item lg>
                      <Grid item xs>
                        <Link to="/signIn" variant="body2">
                          Try To Sign In Again
                        </Link>
                      </Grid>
                      <p>OR</p>
                      <Grid item xs>
                        <Link to="/signUp" variant="body2">
                          Sign Up For A New Account
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </Route>
              {/* Route for Homepage (which includes SignUp) */}
              <Route path="/">
                <Grid container>
                  <Grid item xs>
                    <PublicCollections />
                  </Grid>
                  <Grid item xs>
                    <SignUp />
                  </Grid>
                </Grid>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
