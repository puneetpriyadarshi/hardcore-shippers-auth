import React from "react";

const DriverRoutes = (props) => {
  return (
    <div className="driver-route">
      <label htmlFor="">Driver Routes</label>
      <div className="driver-route-detail">
        {props.sourceState1}({props.sourceCity1}) to {props.destinationState1}(
        {props.destinationCity1})
      </div>
      <div className="driver-route-detail">
        {props.sourceState2}({props.sourceCity2}) to {props.destinationState2}(
        {props.destinationCity2})
      </div>
      <div className="driver-route-detail">
        {props.sourceState3}({props.sourceCity3}) to {props.destinationState3}(
        {props.destinationCity3})
      </div>
    </div>
  );
};

export default DriverRoutes;
