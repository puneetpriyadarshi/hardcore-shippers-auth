import React from "react";
import Nothing from "../../media/Nothing/no-table.svg";
import "./NothingTable.scss";

const NothingTable = (props) => {
  return (
    <div className="empty-table">
      <div className="empty-image">
        <img src={Nothing} alt="Nothing" />
      </div>
      <div className="empty-text">{props.text}</div>
    </div>
  );
};

export default NothingTable;
