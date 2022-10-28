import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core'
import useStyles from './styles'

import { signin, signup } from '../../../actions/auth'
import { GoogleLogin } from 'react-google-login'

import Input from './Input'
import { AUTH } from '../../../constants/actionTypes'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const Auth = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const [isSignup, setIsSignup] = useState(false)
  const [form, setForm] = useState(initialState)
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => setShowPassword(!showPassword)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSignup) {
      dispatch(signup(form, history))
    } else {
      dispatch(signin(form, history))
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const switchMode = () => {
    setForm(initialState)
    setIsSignup((prevIsSignup) => !prevIsSignup)
    setShowPassword(false)
  }

  const googleSuccess = async (res) => {
    const user = res?.profileObj
    const token = res?.tokenId

    try {
      dispatch({ type: AUTH, data: { user, token } })
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const googleError = () =>
    console.log('Google Sign In was unsuccessful. Try again later')

  return (
    <Container component="main" maxWidth="xs" className="authContainer">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? 'Sign Up' : 'Sign In'}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {!isSignup && (
              <div style={{ fontSize: '15px' }}>
                <div>
                  <label
                    className="option"
                    style={{
                      display: 'block',
                      position: 'relative',
                      paddingLeft: '25px',
                      cursor: 'pointer',
                    }}
                  >
                    <input type="checkbox"></input>{' '}
                    <span className="checkmark"></span>
                    <span className="text-light-white">Remember Me</span>
                  </label>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <a href="/">Forgot password?</a>
                </div>
              </div>
            )}

            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            //fullWidth
            className={classes.submit}
            half="true"
          >
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>

          <Grid container justifyContent="center">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? 'Already have an account? Sign In'
                  : "Don't have an account? Sign Up"}
              </Button>

              <div
                className="text-center p-t-54 p-b-20"
                style={{ fontSize: '15px', color: '#6e6e6e' }}
              >
                <hr />
                Or Sign Up Using
              </div>
              <div className="text-center py-3 connections">
                <GoogleLogin
                  clientId="726295204094-7jqeqstbsfcjsssi93mprk52jmfbqoe9.apps.googleusercontent.com"
                  className="px-2"
                  render={(renderProps) => (
                    <Button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      startIcon={
                        <img
                          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                          alt=""
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                          }}
                        ></img>
                      }
                    />
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleError}
                  cookiePolicy="single_host_origin"
                ></GoogleLogin>
              </div>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth
