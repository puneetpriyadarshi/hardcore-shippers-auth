import React from "react";
import NavBar from "../../../components/NavBar/NavBar";
import InfoBoxDealer from "../../../components/Profile/InfoBoxDealer";
import ProfileHeading from "../../../components/Profile/ProfileHeading";

const ProfileDealer = () => {
  return (
    <div>
      <NavBar identity="dealer" />
      <ProfileHeading />
      <InfoBoxDealer />
    </div>
  );
};

export default ProfileDealer;
