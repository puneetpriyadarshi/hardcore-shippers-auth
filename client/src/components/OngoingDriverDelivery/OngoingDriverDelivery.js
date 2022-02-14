import React from "react";
import { orderData } from "../../data/order-data";
import DriverHomeBox from "../DriverHomeBox/DriverHomeBox";
import NoOngoing from "../../media/Nothing/no-order.svg";
import "./NoDealers.scss";

const OngoingDriverDelivery = () => {
  return (
    <>
      {orderData.filter(
        (name) => name.driverName === "Mr. Ramesh" && name.status === "ongoing"
      ) === 0 ? (
        <div className="no-order">
          <div className="no-order-image">
            <img src={NoOngoing} alt="Nothing" />
          </div>
          <div className="no-order-text">No Ongoing Deliveries</div>
        </div>
      ) : (
        <div className="mapping-history">
          {" "}
          {orderData
            .filter(
              (name) =>
                name.driverName === "Mr. Ramesh" && name.status === "ongoing"
            )
            .map((order) => {
              return (
                <DriverHomeBox
                  identity="driver"
                  natureOfMaterial={order.natureOfMaterial}
                  weightOfMaterial={order.weightOfMaterial}
                  quantityOfMaterial={order.quantityOfMaterial}
                  sourceState={order.sourceState}
                  sourceCity={order.sourceCity}
                  destinationState={order.destinationState}
                  destinationCity={order.destinationCity}
                  dealerName={order.dealerName}
                  status={order.status}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default OngoingDriverDelivery;
