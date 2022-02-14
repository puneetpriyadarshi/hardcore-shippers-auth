import { Button } from "@mui/material";
import React from "react";
import "./BookDriverDialog.scss";

const BookDriverDialog = (props) => {
  return (
    <div className="book-driver-dialog">
      <div className="title">Book Driver</div>
      <label htmlFor="">Nature Of Material</label>
      <div className="material-name">HouseHold</div>
      <label htmlFor="">Weight Of Material</label>
      <div className="material-number">Weight</div>
      <label htmlFor="">Quantity Of Material</label>
      <div className="material-number">Quantity</div>
      <label htmlFor="">Select Route</label>
      <select name="" id="">
        <option value="">
          {props.sourceState1}({props.sourceCity1}) to {props.destinationState1}
          ({props.destinationCity1})
        </option>
        <option value="">
          {props.sourceState2}({props.sourceCity2}) to {props.destinationState2}
          ({props.destinationCity2})
        </option>
        <option value="">
          {props.sourceState3}({props.sourceCity3}) to {props.destinationState3}
          ({props.destinationCity3})
        </option>
      </select>

      <div className="button-group">
        <Button
          variant="contained"
          className="book-dialog"
          onClick={props.handleBook}
        >
          Book Now{" "}
        </Button>
        <Button
          variant="outlined"
          className="cancel-dialog"
          onClick={props.handleCancel}
        >
          cancel
        </Button>
      </div>
    </div>
  );
};

export default BookDriverDialog;
