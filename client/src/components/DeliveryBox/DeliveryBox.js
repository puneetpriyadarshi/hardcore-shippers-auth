import React from "react";
import "./DeliveryBox.scss";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const DeliveryBox = (props) => {
  // const [color, setColor] = React.useState("");
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
      <div className="product-delivery-status">
        <div
          className={`circle content-recieved ${
            props.status === "pending" && "blue-status"
          } ${props.status === "ongoing" && "blue-status"} ${
            props.status === "delivered" && "green-status"
          } ${props.status === "cancelled" && "red-status"}`}
        ></div>
        <div
          className={`line ${props.status === "ongoing" && "blue-status"} ${
            props.status === "delivered" && "green-status"
          } ${props.status === "cancelled" && "red-status"}`}
        ></div>
        <div
          className={`circle content-route ${
            props.status === "ongoing" && "blue-status"
          } ${props.status === "delivered" && "green-status"} ${
            props.status === "cancelled" && "red-status"
          }`}
        ></div>
        <div
          className={`line ${props.status === "delivered" && "green-status"} ${
            props.status === "cancelled" && "red-status"
          }`}
        ></div>
        <div
          className={`circle content-delivered ${
            props.status === "delivered" && "green-status"
          } ${props.status === "cancelled" && "red-status"}`}
        ></div>
      </div>
    </div>
  );
};

export default DeliveryBox;
