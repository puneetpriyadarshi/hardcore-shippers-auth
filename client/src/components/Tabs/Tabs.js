import React, { useState } from "react";
import "./Tabs.scss";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      <div
        className={`tab-item deliver-tab ${activeTab === 0 && "active-tab"}`}
        onClick={() => {
          setActiveTab(0);
          props.deliveredFilter();
        }}
      >
        <div className="text-tab">Delivered</div>
      </div>
      <div
        className={`tab-item cancel-tab ${activeTab === 1 && "active-tab"}`}
        onClick={() => {
          setActiveTab(1);
          props.cancelledFilter();
        }}
      >
        <div className="text-tab">Cancelled</div>
      </div>
    </div>
  );
};

export default Tabs;
