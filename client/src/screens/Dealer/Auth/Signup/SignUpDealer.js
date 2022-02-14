import React, { useState } from "react";

// importing styles
import "../../../Auth.scss";
import AuthHeading from "../../../../components/Heading/AuthHeading";

// importing materail ui components
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HttpsIcon from "@mui/icons-material/Https";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AdfScannerIcon from "@mui/icons-material/AdfScanner";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import NumbersIcon from "@mui/icons-material/Numbers";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";

// importing components
import { Link } from "react-router-dom";
import { data } from "../../../../data/city-state";
import { state } from "../../../../data/state";

const SignUpDealer = () => {
  const [screen, setScreen] = useState("1/2");
  const [text, setText] = useState("password");
  const [city, setCity] = useState("");

  const HandleSubmit = () => {
    alert("Submit");
  };

  const selectState = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="signup-dealer">
      <AuthHeading />
      <form action="" className="auth-box">
        <div className="form-title">SignUp as Dealer ({screen})</div>
        {screen === "1/2" ? (
          <div className="signup-auth-details">
            <div className="input-structure">
              <label>Name</label>
              <div className="input-icon">
                <PersonIcon />
              </div>
              <input type="text" placeholder="eg. Pratik Kumar" />
            </div>
            <div className="input-structure">
              <label>User Name</label>
              <div className="input-icon">
                <PersonIcon />
              </div>
              <input type="text" placeholder="eg. pratik621" />
            </div>
            <div className="input-structure">
              <label>Email</label>
              <div className="input-icon">
                <AlternateEmailIcon />
              </div>
              <input type="email" placeholder="eg. abc21@xyz" />
            </div>
            <div className="input-structure">
              <label>Phone</label>
              <div className="input-icon">
                <LocalPhoneIcon />
              </div>
              <input type="email" placeholder="eg. xxxxxxxxxx" />
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
            <div className="input-structure password">
              <label>Confirm Password</label>
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
            <div className="auth-button">
              <Button
                className="button-submit"
                variant="contained"
                onClick={() => {
                  setScreen("2 / 2");
                }}
              >
                Proceed <ArrowRightAltIcon />
              </Button>
            </div>
          </div>
        ) : (
          <div className="signup-user-details">
            <div className="input-structure">
              <label>Nature of material</label>
              <div className="input-icon">
                <AdfScannerIcon />
              </div>
              <input type="text" placeholder="eg. Snacks and Beverages" />
            </div>
            <div className="input-structure">
              <label>Weight of material</label>
              <div className="input-icon">
                <ConfirmationNumberIcon />
              </div>
              <input type="text" placeholder="eg. 150 Kg" />
            </div>
            <div className="input-structure">
              <label>Quantity of material</label>
              <div className="input-icon">
                <NumbersIcon />
              </div>
              <input type="text" placeholder="eg. 50 Boxes" />
            </div>
            <div className="input-structure select">
              <label>State</label>
              <div className="input-icon">
                <ApartmentIcon />
              </div>
              <select
                name="state"
                id="state"
                onChange={selectState}
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT" disabled>
                  Select your option
                </option>
                {state.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>
            {/* <div className="map-data">{data}</div> */}
            <div className="input-structure select">
              <label>City</label>
              <div className="input-icon">
                <EmojiTransportationIcon />
              </div>
              <select name="city" id="city" defaultValue={"DEFAULT"}>
                <option value="DEFAULT" disabled>
                  Select your option
                </option>
                {data
                  .filter((item) => item.state === city)
                  .map((item) => (
                    <option value={item.name}>{item.name}</option>
                  ))}
              </select>
            </div>
            <div className="submit-form">
              <Button
                className="button-submit"
                variant="contained"
                type="submit"
                onClick={HandleSubmit}
              >
                Signup
              </Button>
            </div>

            <div className="back-to-1">
              <Button
                color="error"
                onClick={() => {
                  setScreen("1/2");
                }}
              >
                <ArrowBackIcon />
                &nbsp; Go to previous part
              </Button>
            </div>
          </div>
        )}
        <div className="already-account">
          Already have an account...
          <Link to="/dealer/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpDealer;
