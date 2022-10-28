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

import Input from './Input'

const initialState = {
  email: '',
}

const ForgotPW = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const [isSignup, setIsSignup] = useState(false)
  const [form, setForm] = useState(initialState)
  const [showPassword, setShowPassword] = useState(false)

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

  return (
    <Container component="main" maxWidth="sm" className={classes.forgotContainer}>
      <Paper className={classes.paperForgot} elevation={3}>
        {/* <Avatar className={classes.avatar}></Avatar> */}
        <Typography component="h1" variant="h5">
            Password Forgotten ?
        </Typography>
        <Typography component="h1" variant="body2" className={classes.forgotDescription}>
            Don't worry ! Enter the email you use for ModernStream and we'll send you instructions to reset your password
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={1}>

            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className={classes.submit}
                // half="true"
            >
                Request Password Reset
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default ForgotPW;
