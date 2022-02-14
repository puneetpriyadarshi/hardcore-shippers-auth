import React from "react";

const DriverTableHead = () => {
  return (
    <tr className="list-table-header">
      <th className="list-head-item list-table-header-item">Name Of Driver</th>
      <th className="list-head-item list-table-header-age">Age (in years)</th>
      <th className="list-head-item list-table-header-experience">
        Experience (in years)
      </th>
      <th className="list-head-item list-table-header-age">Action</th>
    </tr>
  );
};

export default DriverTableHead;
