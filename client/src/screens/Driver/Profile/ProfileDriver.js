import React from "react";
import NavBar from "../../../components/NavBar/NavBar";
import InfoBoxDriver from "../../../components/Profile/InfoBoxDriver";
import ProfileHeading from "../../../components/Profile/ProfileHeading";

const ProfileDriver = () => {
  return (
    <div>
      <NavBar identity="driver" />
      <ProfileHeading />
      <InfoBoxDriver />
    </div>
  );
};

export default ProfileDriver;
