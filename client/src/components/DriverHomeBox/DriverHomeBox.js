import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Button } from "@mui/material";
import "./DriverHomeBox.scss";

const DriverHomeBox = (props) => {
  return (
    <div className="delivery-box">
      <div className="product-delivery-nature">{props.natureOfMaterial}</div>
      <div className="product-delivery-number">
        {props.weightOfMaterial} Kg({props.quantityOfMaterial} pieces)
      </div>
      <div className="product-delivery-source">
        ({props.sourceState}-{props.sourceCity})
      </div>
      <ArrowDownwardIcon />
      <div className="product-delivery-destination">
        ({props.destinationState}-{props.destinationCity})
      </div>
      {props.identity === "dealer" ? (
        <div className="product-delivery-driver">
          Driver Name : {props.driverName}
        </div>
      ) : (
        <div className="product-delivery-driver">
          Dealer Name : {props.dealerName}
        </div>
      )}
      {}
      <div className="driver-side-status">
        {props.status === "pending" && (
          <div className="status-pending">
            <div className="status-info">
              Status: <span>Pending</span>
            </div>
            <Button variant="contained" className="confirm">
              Confirm
            </Button>
            <Button variant="outlined" className="cancel">
              Cancel
            </Button>
          </div>
        )}
        {props.status === "ongoing" && (
          <div className="status-ongoing">
            <div className="status-info">
              Status: <span>Ongoing</span>
            </div>
            <Button variant="contained" className="confirm">
              Delivered
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DriverHomeBox;
