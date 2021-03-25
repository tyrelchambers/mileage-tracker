import React from "react";
import "./Trip.css";

const Trip = ({ data, canAdd }) => {
  return (
    <div className="trip-wrapper rounded-md">
      <div className="flex flex-col">
        <p className="trip-location">{data.location}</p>
        <p className="trip-address">{data.address}</p>
      </div>
      {canAdd && (
        <div className="flex items-center">
          <i class="fas fa-plus mr-2 text-gray-800"></i>
          <p className="text-gray-800">Add</p>
        </div>
      )}
    </div>
  );
};

export default Trip;
