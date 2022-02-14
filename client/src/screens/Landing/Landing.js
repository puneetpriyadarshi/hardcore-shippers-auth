import React from "react";
import "./Landing.scss";
import LandingButton from "../../components/Landing/LandingButton";
import Logo from "../../media/Logo/logo.svg";
import LandingGif from "../../media/Landing/landing.gif";
const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-info">
        <img className="info-logo" src={Logo} alt="logo" />
        <div className="info-name">Hardcore Shippers</div>
        <div className="info-description">
          An open source platform where dealers can book drivers for
          transporting their goods
        </div>
        <div className="info-buttons">
          <div className="button-text">Continue as a...</div>
          <div className="button-links">
            <LandingButton link="auth/client" value="Dealer" />
            <span className="link-seperator">or</span>
            <LandingButton link="auth/driver" value="Driver" />
          </div>
        </div>
      </div>

      <div className="landing-gif">
        <img className="landing-gif" src={LandingGif} alt="landing" />
      </div>
    </div>
  );
};

export default Landing;
