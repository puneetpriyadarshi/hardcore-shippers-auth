import { Button } from "@mui/material";
import React from "react";
import Dialog from "@mui/material/Dialog";

import BookDriverDialog from "../BookDriverDialog/BookDriverDialog";

const DriverTableContent = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <tr className="list-table-body">
      <td className="list-body-item list-table-body-item">{props.name}</td>
      <td className="list-body-item list-table-body-age">{props.age}</td>
      <td className="list-body-item list-table-body-experience">
        {props.experience}
      </td>
      <td className="list-body-item list-table-body-age">
        <Button onClick={handleClickOpen}>Book Now</Button>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <BookDriverDialog
            handleCancel={handleCancel}
            handleBook={() => {}}
            sourceState1={props.sourceState1}
            sourceCity1={props.sourceCity1}
            destinationState1={props.destinationState1}
            destinationCity1={props.destinationCity1}
            sourceState2={props.sourceState2}
            sourceCity2={props.sourceCity2}
            destinationState2={props.destinationState2}
            destinationCity2={props.destinationCity2}
            sourceState3={props.sourceState3}
            sourceCity3={props.sourceCity3}
            destinationState3={props.destinationState3}
            destinationCity3={props.destinationCity3}
          />
        </Dialog>
      </td>
    </tr>
  );
};

export default DriverTableContent;
