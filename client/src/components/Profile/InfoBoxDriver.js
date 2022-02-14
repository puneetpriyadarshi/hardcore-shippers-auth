import React from "react";
import InputStructure from "./InputStructure";
import { driverData } from "../../data/driver-data";
import DriverRoutes from "./DriverRoutes";

const InfoBoxDriver = () => {
  return (
    <>
      {driverData
        .filter((data) => data.userName === "ramesh1")
        .map((driver) => {
          return (
            <div className="driver-info">
              <InputStructure label="Name" detail={driver.name} />
              <InputStructure label="Phone" detail={driver.phone} />
              <InputStructure label="Age (in Years)" detail={driver.age} />
              <InputStructure
                label="Transport Name"
                detail={driver.transportName}
              />
              <InputStructure
                label="Truck Number"
                detail={driver.truckNumber}
              />
              <InputStructure
                label="Truck Capacity"
                detail={driver.truckCapacity}
              />
              <InputStructure
                label="Experience (in Years)"
                detail={driver.experience}
              />
              <DriverRoutes
                sourceState1={driver.route1.sourceState}
                sourceCity1={driver.route1.sourceCity}
                destinationState1={driver.route1.destinationState}
                destinationCity1={driver.route1.destinationCity}
                sourceState2={driver.route2.sourceState}
                sourceCity2={driver.route2.sourceCity}
                destinationState2={driver.route2.destinationState}
                destinationCity2={driver.route2.destinationCity}
                sourceState3={driver.route3.sourceState}
                sourceCity3={driver.route3.sourceCity}
                destinationState3={driver.route3.destinationState}
                destinationCity3={driver.route3.destinationCity}
              />
            </div>
          );
        })}
    </>
  );
};

export default InfoBoxDriver;
