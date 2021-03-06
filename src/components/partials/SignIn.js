import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Photobucket
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function signOut() {
  sessionStorage.removeItem('userId');
  sessionStorage.removeItem('sessionId');
}

function submitForm(e) {
  return e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const userIdCookie = sessionStorage.getItem('userId');
    const sessionIdCookie = sessionStorage.getItem('sessionId');

    const userDetails = {
      email,
      password,
      userIdCookie,
      sessionIdCookie,
    };
    axios
      .post('/signIn', userDetails)
      .then(function (res) {
        const { userId, status, sessionId } = res.data;
        if (userId) {
          sessionStorage.setItem('userId', userId);
          sessionStorage.setItem('sessionId', sessionId);

          console.log('Did It Work? ->', status);
          // // remove
          // localStorage.removeItem('myData');

          // // remove all
          // localStorage.clear();
        } else {
          console.log(`Received back: ${status}`);
        }
      })
      .catch(function (error) {
        console.log('There was a problem', error);
      });
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign In
        </Typography>

        <form className={classes.form} noValidate onSubmit={submitForm()}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgotPassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
        <form className={classes.form} noValidate onSubmit={signOut()}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Sign Out
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
