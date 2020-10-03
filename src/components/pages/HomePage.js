import React, { Component } from 'react';
import PublicCollections from './PublicCollections.js';
import SignIn from '../partials/SignIn.js';
import SignUp from '../partials/SignUp.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ForgotPassword from './ForgotPassword';
class Homepage extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav className="navbar bg-primary">
            <h1>
              <i className=" m far fa-images" />
              {'  '}Photobucket
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
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/signIn">
                <SignIn />
              </Route>
              <Route path="/signUp">
                <SignUp />
              </Route>
              <Route path="/forgotPassword">
                <div className=" all-center m-2">
                  <ForgotPassword />
                  <Grid className="m-2 all-center" container maxWidth="xs">
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

export default Homepage;
