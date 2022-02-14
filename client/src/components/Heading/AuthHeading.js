import React from "react";
import Logo from "../../media/Logo/logo.svg";
import "./AuthHeading.scss";

const AuthHeading = () => {
  return (
    <div className="auth-heading">
      Welcome to{" "}
      <span>
        <img src={Logo} alt="Logo" />
      </span>{" "}
      Hardcore Shippers
    </div>
  );
};

export default AuthHeading;
