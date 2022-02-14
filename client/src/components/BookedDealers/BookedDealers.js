import React from "react";
import { orderData } from "../../data/order-data";
import DriverHomeBox from "../DriverHomeBox/DriverHomeBox";

import NoPending from "../../media/Nothing/no-table.svg";

const BookedDealers = () => {
  return (
    <>
      {orderData.filter(
        (name) => name.driverName === "Mr. Ramesh" && name.status === "pending"
      ) === 0 ? (
        <div className="no-order">
          <div className="no-order-image">
            <img src={NoPending} alt="Nothing" />
          </div>
          <div className="no-order-text">No dealers booked you currently</div>
        </div>
      ) : (
        <div className="mapping-history">
          {" "}
          {orderData
            .filter(
              (name) =>
                name.driverName === "Mr. Ramesh" && name.status === "pending"
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

export default BookedDealers;
