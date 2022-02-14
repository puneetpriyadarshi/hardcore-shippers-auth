import React, { useState } from "react";
import DeliveryBox from "../../../components/DeliveryBox/DeliveryBox";
import PageHeading from "../../../components/Heading/PageHeading";
import NavBar from "../../../components/NavBar/NavBar";
import NoBooking from "../../../components/NoBooking/NoBooking";
import Tabs from "../../../components/Tabs/Tabs";

import { orderData } from "../../../data/order-data";

import "./HistoryDealer.scss";

const HistoryDealer = () => {
  const [activeTab, setActiveTab] = useState("delivered");
  const deliveredFilter = () => {
    setActiveTab("delivered");
  };
  const cancelledFilter = () => {
    setActiveTab("cancelled");
  };

  return (
    <div>
      <NavBar identity="dealer" />
      <PageHeading heading="History" />
      {orderData.filter((order) => order.dealerName === "Mr. Suresh").length ===
      0 ? (
        <NoBooking
          identity="dealer"
          text=" No Booking till date. Go to Home Page for Booking"
        />
      ) : (
        <>
          <Tabs
            deliveredFilter={deliveredFilter}
            cancelledFilter={cancelledFilter}
          />
          <div className="mapping-history">
            {orderData
              .filter(
                (name) =>
                  name.dealerName === "Mr. Suresh" && name.status === activeTab
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
        </>
      )}
    </div>
  );
};

export default HistoryDealer;
