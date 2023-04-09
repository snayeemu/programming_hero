import React, { useEffect, useState } from "react";

const Mobile = () => {
  const [batteryPercentage, setBatteryPercentage] = useState(100);

  const batteryDown = () => {
    batteryPercentage && setBatteryPercentage(batteryPercentage - 10);
  };

  return (
    <div className="container my-5">
      <h1>
        Battery percentage:{" "}
        <span id="battery-percentage" className="text-danger">
          {batteryPercentage}
        </span>
        %
      </h1>
      <button onClick={batteryDown} className="btn btn-warning">
        Battery Down
      </button>
    </div>
  );
};

export default Mobile;
