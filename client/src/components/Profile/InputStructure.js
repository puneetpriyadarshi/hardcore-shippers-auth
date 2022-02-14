import React from "react";

const InputStructure = (props) => {
  return (
    <div className="input-structure-profile">
      <label htmlFor="">{props.label}</label>
      <div className="input-structure-detail">{props.detail}</div>
    </div>
  );
};

export default InputStructure;
