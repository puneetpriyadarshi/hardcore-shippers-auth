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
import { signin, signup } from "../../actions/authDriver.js";
const initialState = {
  name: "",
  userName: "",
  phone: "",
  age: "",
  experience: "",
  transportName: "",
  truckNumber: "",
  truckCapacity: "",
  sourceStateOne: "",
  sourceCityOne: "",
  destinationStateOne: "",
  destinationCityOne: "",
  sourceStateTwo: "",
  sourceCityTwo: "",
  destinationStateTwo: "",
  destinationCityTwo: "",
  sourceStateThree: "",
  sourceCityThree: "",
  destinationStateThree: "",
  destinationCityThree: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
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
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
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
                  name="age"
                  label="Age"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="experience"
                  label="Experience"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="transportName"
                  label="Transport Name"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="truckNumber"
                  label="Truck Number"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="truckCapacity"
                  label="Truck Capacity"
                  handleChange={handleChange}
                />
                <Input
                  name="sourceStateOne"
                  label="Source State 1"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="sourceCityOne"
                  label="Source City 1"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="destinationStateOne"
                  label="Destination State 1"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="destinationCityOne"
                  label="Destination City 1"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="sourceStateTwo"
                  label="Source State 2"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="sourceCityTwo"
                  label="Source City 2"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="destinationStateTwo"
                  label="Destination State 2"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="destinationCityTwo"
                  label="Destination City 2"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="sourceStateThree"
                  label="Source State 3"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="sourceCityThree"
                  label="Source City 3"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="destinationStateThree"
                  label="Destination State 3"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="destinationCityThree"
                  label="Destination City 3"
                  handleChange={handleChange}
                  half
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
