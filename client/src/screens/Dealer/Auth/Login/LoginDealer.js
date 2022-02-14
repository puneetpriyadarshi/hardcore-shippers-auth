import React from "react";
import "../../../Auth.scss";
import AuthHeading from "../../../../components/Heading/AuthHeading";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { Link } from "react-router-dom";

const LoginDealer = () => {
  const [text, setText] = React.useState("password");
  const HandleSubmit = () => {
    alert("Submit");
  };
  return (
    <div className="login-driver">
      <AuthHeading />
      <form action="" className="auth-box">
        <div className="form-title">Login as Dealer</div>
        <div className="login-details">
          <div className="input-structure">
            <label>Username</label>
            <div className="input-icon">
              <PersonIcon />
            </div>
            <input type="text" placeholder="eg. pratik621" />
          </div>
          <div className="input-structure password">
            <label>Password</label>
            <div className="input-icon">
              <HttpsIcon />
            </div>
            <input type={text} placeholder="*****" />
            <div className="eye-password">
              {text === "password" ? (
                <VisibilityIcon onClick={() => setText("text")} />
              ) : (
                <VisibilityOffIcon onClick={() => setText("password")} />
              )}
            </div>
          </div>
          <div className="submit-form">
            <Button
              className="button-submit"
              variant="contained"
              type="submit"
              onClick={HandleSubmit}
            >
              Login
            </Button>
          </div>
        </div>
        <div className="already-account">
          New Here...
          <Link to="/dealer/signup">SignUp</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginDealer;
