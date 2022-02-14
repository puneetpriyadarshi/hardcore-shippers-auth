import React, { useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import useStyles from "./styles.js";
import Input from "./input.js";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signinClient, signupClient } from "../../actions/authClient.js";
const initialState = {
  name: "",
  userName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
  natureOfMaterial: "",
  weightOfMaterial: "",
  quantityOfMaterial: "",
  sourceState: "",
  sourceCity: "",
};
const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formDataClient, setFormDataClient] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const classes = useStyles();
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signupClient(formDataClient, history));
    } else {
      dispatch(signinClient(formDataClient, history));
    }
  };
  const handleChange = (e) => {
    setFormDataClient({ ...formDataClient, [e.target.name]: e.target.value });
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="name"
                  label="Name"
                  handleChange={handleChange}
                  autoFocus
                />
                <Input
                  name="userName"
                  label="User Name"
                  handleChange={handleChange}
                />
                <Input
                  name="phone"
                  label="Phone"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="natureOfMaterial"
                  label="Nature of Material"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="weightOfMaterial"
                  label="Weight of Material"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="quantityOfMaterial"
                  label="Quantity of Material"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="sourceState"
                  label="Source State"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="sourceCity"
                  label="Source City"
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
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
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
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
