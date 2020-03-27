import React, { useState } from "react";
import ReactMapGl from "react-map-gl";

const MapBox = () => {
  const token =
    "pk.eyJ1IjoidGhlbWlza28iLCJhIjoiY2sxaHh5aTM5MDBwazNkbW5zcGZ2emJ1aCJ9.IxF9Bk89byq_yOvqK6sBDA";
  const [viewport, setViewport] = useState({
    latitude: 43.3320868,
    longitude: 21.9343209,
    width: "100vw",
    height: "40vh",
    zoom: 15
  });

  return (
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={token}
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
      mapStyle="mapbox://styles/themisko/ck1hymggs1jl81cnpktd04685"
    ></ReactMapGl>
  );
};

export default MapBox;
