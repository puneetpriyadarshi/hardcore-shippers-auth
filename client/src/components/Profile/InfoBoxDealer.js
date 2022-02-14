import React from "react";
import { dealerData } from "../../data/dealer-data";
import InputStructure from "./InputStructure";

const InfoBoxDealer = () => {
  return (
    <>
      {dealerData
        .filter((data) => data.userName === "ramesh")
        .map((dealer) => {
          return (
            <div className="dealer-info">
              <InputStructure label="Name" detail={dealer.name} />
              <InputStructure label="Phone" detail={dealer.phone} />
              <InputStructure
                label="Nature of material"
                detail={dealer.natureOfMaterial}
              />
              <InputStructure />
              <InputStructure
                label="Weight of Material (in Kg)"
                detail={dealer.weightOfMaterial}
              />
              <InputStructure
                label="Quantity of Material"
                detail={dealer.quantityOfMaterial}
              />
              <InputStructure label="State" detail={dealer.sourceState} />
              <InputStructure label="City" detail={dealer.sourceCity} />
            </div>
          );
        })}
    </>
  );
};

export default InfoBoxDealer;
