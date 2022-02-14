import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./LandingButton.scss";

const LandingButton = (props) => {
  return (
    <Link to={`/${props.link}`} className="landing-button">
      <Button variant="outlined">{props.value}</Button>
    </Link>
  );
};

export default LandingButton;
