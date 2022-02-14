import React from "react";
import "./PageHeading.scss";

const PageHeading = (props) => {
  return (
    <div className="heading">
      <h1>{props.heading}</h1>
    </div>
  );
};

export default PageHeading;
