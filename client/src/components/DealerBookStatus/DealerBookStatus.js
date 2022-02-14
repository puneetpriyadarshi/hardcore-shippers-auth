import React from "react";
import DriverTableHeading from "../DriverTable/DriverTableHeading";
import "./DealerBookStatus.scss";
import { orderData } from "../../data/order-data";
import DeliveryBox from "../DeliveryBox/DeliveryBox";
import NoOrder from "../../media/Nothing/no-order.svg";

const DealerBookStatus = () => {
  return (
    <div className="dealer-booking-status">
      <div className="heading-status">
        <DriverTableHeading heading="Booking Status" />
      </div>
      {orderData.filter(
        (name) =>
          name.dealerName === "Mr. Suresh" &&
          (name.status === "ongoing" || name.status === "pending")
      ).length === 0 ? (
        <div className="empty-table nothing-status">
          <div className="empty-image">
            <img src={NoOrder} alt="No Order" />
          </div>
          <div className="empty-text">Nothing is currently Booked</div>
        </div>
      ) : (
        <div className="dealer-booking-lists mapping-history">
          {orderData
            .filter(
              (name) =>
                name.dealerName === "Mr. Suresh" &&
                (name.status === "ongoing" || name.status === "pending")
            )
            .map((order) => {
              return (
                <DeliveryBox
                  identity="dealer"
                  natureOfMaterial={order.natureOfMaterial}
                  weightOfMaterial={order.weightOfMaterial}
                  quantityOfMaterial={order.quantityOfMaterial}
                  sourceState={order.sourceState}
                  sourceCity={order.sourceCity}
                  destinationState={order.destinationState}
                  destinationCity={order.destinationCity}
                  driverName={order.driverName}
                  status={order.status}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default DealerBookStatus;
