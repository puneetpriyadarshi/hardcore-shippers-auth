import React from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import "./NoBooking.scss";
import NoBookingImage from "../../media/Nothing/no-booking.svg";
import { Button } from "@mui/material";

const NoBooking = (props) => {
  return (
    <div className="no-booking-history">
      <div className="no-booking-history-image">
        <img src={NoBookingImage} alt="No Booking" />
      </div>
      <Link to={`/${props.identity}/home`}>
        <Button className="no-booking-history-text">
          {props.text} &nbsp;
          <ArrowRightAltIcon />
        </Button>
      </Link>
    </div>
  );
};

export default NoBooking;
