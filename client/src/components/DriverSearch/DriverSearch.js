import React, { useState } from "react";
import "../DriverTable/DriverTable.scss";
import "./DriverSearch.scss";
import { state } from "../../data/state";
import { data } from "../../data/city-state";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { driverData } from "../../data/driver-data";
import DriverTableHead from "../DriverTable/DriverTableHead";
import DriverTableHeading from "../DriverTable/DriverTableHeading";
import DriverTableContent from "../DriverTable/DriverTableContent";
import NothingTable from "./NothingTable";

const DriverSearch = (props) => {
  const [sourceState, setSourceState] = useState("");
  const [destinationState, setDestinationState] = useState("");
  const { register, handleSubmit } = useForm();
  const [detail, setDetail] = useState({
    sourceState: "DEFAULT",
    sourceCity: "DEFAULT",
    destinationCity: "DEFAULT",
    destinationState: "DEFAULT",
  });

  const onSubmit = (data) => {
    setDetail({
      sourceState: data.sourceState,
      sourceCity: data.sourceCity,
      destinationCity: data.destinationCity,
      destinationState: data.destinationState,
    });
  };

  const selectSourceState = (e) => {
    setSourceState(e.target.value);
  };
  const selectDestinationState = (e) => {
    setDestinationState(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="driver-search">
        <div className="source-search search-home">
          <label htmlFor="">Source</label>
          <div className="search-input">
            <select
              {...register("sourceState")}
              id="sourceState"
              onChange={selectSourceState}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Select source state
              </option>
              {state.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="search-input">
            <select
              {...register("sourceCity")}
              id="sourceCity"
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Select source city
              </option>
              {data
                .filter((item) => item.state === sourceState)
                .map((item) => (
                  <option value={item.name}>{item.name}</option>
                ))}
            </select>
          </div>
        </div>
        <div className="destination-search search-home">
          <label htmlFor="">Destination</label>
          <div className="search-input">
            <select
              {...register("destinationState")}
              id="destinationState"
              onChange={selectDestinationState}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Select destination state
              </option>
              {state.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="search-input">
            <select
              {...register("destinationCity")}
              id="destinationCity"
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Select destination city
              </option>
              {data
                .filter((item) => item.state === destinationState)
                .map((item) => (
                  <option value={item.name}>{item.name}</option>
                ))}
            </select>
          </div>
        </div>
        <div className="submit-search">
          <Button type="submit" variant="contained">
            Search
          </Button>
        </div>
      </form>
      <div className="list-drivers-search search-driver list-table">
        <DriverTableHeading heading="List of drivers based on above search" />
        {driverData.filter(
          (data) =>
            (data.route1.sourceState === detail.sourceState &&
              data.route1.sourceCity === detail.sourceCity &&
              data.route1.destinationState === detail.destinationState &&
              data.route1.destinationCity === detail.destinationCity) ||
            (data.route2.sourceState === detail.sourceState &&
              data.route2.sourceCity === detail.sourceCity &&
              data.route2.destinationState === detail.destinationState &&
              data.route2.destinationCity === detail.destinationCity) ||
            (data.route3.sourceState === detail.sourceState &&
              data.route3.sourceCity === detail.sourceCity &&
              data.route3.destinationState === detail.destinationState &&
              data.route3.destinationCity === detail.destinationCity)
        ).length === 0 ? (
          <NothingTable text="Nothing in search result" />
        ) : (
          <table>
            <DriverTableHead />
            {driverData
              .filter(
                (data) =>
                  (data.route1.sourceState === detail.sourceState &&
                    data.route1.sourceCity === detail.sourceCity &&
                    data.route1.destinationState === detail.destinationState &&
                    data.route1.destinationCity === detail.destinationCity) ||
                  (data.route2.sourceState === detail.sourceState &&
                    data.route2.sourceCity === detail.sourceCity &&
                    data.route2.destinationState === detail.destinationState &&
                    data.route2.destinationCity === detail.destinationCity) ||
                  (data.route3.sourceState === detail.sourceState &&
                    data.route3.sourceCity === detail.sourceCity &&
                    data.route3.destinationState === detail.destinationState &&
                    data.route3.destinationCity === detail.destinationCity)
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
    </>
  );
};

export default DriverSearch;
