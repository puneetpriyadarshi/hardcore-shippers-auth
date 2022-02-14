import React from "react";
import { driverData } from "../../data/driver-data";
import DriverTableHead from "../DriverTable/DriverTableHead";
import DriverTableHeading from "../DriverTable/DriverTableHeading";
import DriverTableContent from "../DriverTable/DriverTableContent";
import NothingTable from "../DriverSearch/NothingTable";

const LocalDriverTable = () => {
  return (
    <div
      className="list-drivers-search local-driver list-table"
      style={{ marginTop: "50px" }}
    >
      <DriverTableHeading heading="List of drivers based on your locality" />
      {driverData.filter(
        (data) =>
          (data.route1.sourceState === "Bihar" &&
            data.route1.sourceCity === "Patna") ||
          (data.route2.sourceState === "Bihar" &&
            data.route2.sourceCity === "Patna") ||
          (data.route3.sourceState === "Bihar" &&
            data.route3.sourceCity === "Patna")
      ).length === 0 ? (
        <NothingTable text="No drivers found in your region" />
      ) : (
        <table>
          <DriverTableHead />
          {driverData
            .filter(
              (data) =>
                (data.route1.sourceState === "Bihar" &&
                  data.route1.sourceCity === "Patna") ||
                (data.route2.sourceState === "Bihar" &&
                  data.route2.sourceCity === "Patna") ||
                (data.route3.sourceState === "Bihar" &&
                  data.route3.sourceCity === "Patna")
            )
            .map((item) => {
              return (
                <DriverTableContent
                  key={item.id}
                  name={item.name}
                  age={item.age}
                  experience={item.experience}
                  sourceState1={item.route1.sourceState}
                  sourceCity1={item.route1.sourceCity}
                  destinationState1={item.route1.destinationState}
                  destinationCity1={item.route1.destinationCity}
                  sourceState2={item.route2.sourceState}
                  sourceCity2={item.route2.sourceCity}
                  destinationState2={item.route2.destinationState}
                  destinationCity2={item.route2.destinationCity}
                  sourceState3={item.route3.sourceState}
                  sourceCity3={item.route3.sourceCity}
                  destinationState3={item.route3.destinationState}
                  destinationCity3={item.route3.destinationCity}
                />
              );
            })}
        </table>
      )}
    </div>
  );
};

export default LocalDriverTable;
