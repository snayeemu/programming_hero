import React from "react";
import DeviceDetail from "../DeviceDetails/DeviceDetail";

const Device = (props) => {
  return (
    <div>
      <h3>I have a device: {props.name}</h3>
      <DeviceDetail price={props.price}></DeviceDetail>
    </div>
  );
};

export default Device;
