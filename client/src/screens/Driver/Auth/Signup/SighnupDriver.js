import React, { useState } from "react";

// importing styles
import "../../../Auth.scss";
import AuthHeading from "../../../../components/Heading/AuthHeading";
import "./SignupDriver.scss";

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
// import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import NumbersIcon from "@mui/icons-material/Numbers";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ScienceIcon from "@mui/icons-material/Science";
import AgricultureIcon from "@mui/icons-material/Agriculture";

// importing components
import { Link } from "react-router-dom";
import { data } from "../../../../data/city-state";
import { state } from "../../../../data/state";

const SignUpDriver = () => {
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
    <div className="signup-driver">
      <AuthHeading />
      <form action="" className="auth-box">
        <div className="form-title">SignUp as Driver ({screen})</div>
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
              <label>Age (in Years)</label>
              <div className="input-icon">
                <ContactPageIcon />
              </div>
              <input type="number" placeholder="eg. 30 " />
            </div>
            <div className="input-structure">
              <label>Experience (in Years)</label>
              <div className="input-icon">
                <ScienceIcon />
              </div>
              <input type="number" placeholder="eg. 3" />
            </div>
            <div className="input-structure">
              <label>Transport Name</label>
              <div className="input-icon">
                <AgricultureIcon />
              </div>
              <input type="text" placeholder="eg. Mini-truck" />
            </div>
            <div className="input-structure">
              <label>Truck number</label>
              <div className="input-icon">
                <NumbersIcon />
              </div>
              <input type="number" placeholder="eg. xxxxxxxx..." />
            </div>
            <div className="input-structure">
              <label>Truck Capacity(in Kg)</label>
              <div className="input-icon">
                <AdfScannerIcon />
              </div>
              <input type="number" placeholder="eg. 3" />
            </div>
            <div className="intrested-routes">
              <div className="intrested-routes-head">3 Intrested Routes</div>
              <div className="intrested-routes-body">
                <span>From (Route-1</span>
                <div className="input-structure select">
                  <label>State</label>
                  <div className="input-icon">
                    <ApartmentIcon />
                  </div>
                  <select
                    name="from-state-1"
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
                  <select name="from-city-1" id="city" defaultValue={"DEFAULT"}>
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
                <span>To (Route-1)</span>
                <div className="input-structure select">
                  <label>State</label>
                  <div className="input-icon">
                    <ApartmentIcon />
                  </div>
                  <select
                    name="to-state-1"
                    id="to-state-1"
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
                  <select
                    name="to-city-1"
                    id="cto-city-1ity"
                    defaultValue={"DEFAULT"}
                  >
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
              </div>
              <div className="intrested-routes-body">
                <span>From (Route-2)</span>
                <div className="input-structure select">
                  <label>State</label>
                  <div className="input-icon">
                    <ApartmentIcon />
                  </div>
                  <select
                    name="from-state-2"
                    id="from-state-2"
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
                  <select
                    name="from-city-2"
                    id="from-city-2"
                    defaultValue={"DEFAULT"}
                  >
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
                <span>To (Route-2)</span>
                <div className="input-structure select">
                  <label>State</label>
                  <div className="input-icon">
                    <ApartmentIcon />
                  </div>
                  <select
                    name="to-state-2"
                    id="to-state-2"
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
                  <select
                    name="to-city-2"
                    id="to-city-2"
                    defaultValue={"DEFAULT"}
                  >
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
              </div>
              <div className="intrested-routes-body">
                <span>From (Route-3)</span>
                <div className="input-structure select">
                  <label>State</label>
                  <div className="input-icon">
                    <ApartmentIcon />
                  </div>
                  <select
                    name="from-state-3"
                    id="from-state-3"
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
                  <select
                    name="from-city-3"
                    id="from-city-3"
                    defaultValue={"DEFAULT"}
                  >
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
                <span>To (Route-3)</span>
                <div className="input-structure select">
                  <label>State</label>
                  <div className="input-icon">
                    <ApartmentIcon />
                  </div>
                  <select
                    name="to-state-3"
                    id="to-state-3"
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
                  <select
                    name="to-city-3"
                    id="to-city-3"
                    defaultValue={"DEFAULT"}
                  >
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
              </div>
            </div>
            <div className="submit-form" style={{ marginTop: "10px" }}>
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
          <Link to="/driver/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpDriver;
