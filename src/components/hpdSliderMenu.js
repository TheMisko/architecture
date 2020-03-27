import React, { useState, useEffect } from "react";

const HpdSliderMenu = ({ index, setIndex }) => {
  console.log(index);
  const n = [0, 1, 2, 3, 4];
  const projectsData = [
    {
      location: "Stratos Research Center",
      program: "Research Center",
      status: "Competition 2017, Settled",
      size: "+2500m²",
      client: "Randerberg Municipality"
    },
    {
      location: "Cotswolds bungalow",
      program: "Home bungalow",
      status: "Completed 2014",
      size: "1300m²",
      client: "Charlie Luxton Design"
    },
    {
      location: "Matchbox houses",
      program: "Home",
      status: "Completed 2019",
      size: "720.0 m²",
      client: "Avanto Architects"
    },
    {
      location: "Bangalore International Centre",
      program: "Public space",
      status: "Completed 2010",
      size: "4420.0 m²",
      client: "The Bangalore International Centre (BIC)"
    },
    {
      location: "Wayne State University",
      program: "Detroit University",
      status: "Completed 2017",
      size: "125000.0 ft²",
      client: "City of Detroit"
    }
  ];
  const changeProject = index => {
    setIndex(index);
  };

  return (
    <>
      <div className="menu">
        <div className="menu-info-container">
          <div className="menu-info">
            <h2>{projectsData[index].location}</h2>
            <h5>Location :</h5>
            <p>{projectsData[index].location}</p>
            <h5>Program :</h5>
            <p>{projectsData[index].program}</p>
            <h5>Started :</h5>
            <p>{projectsData[index].status}</p>
            <h5>Space :</h5>
            <p>{projectsData[index].size}</p>
            <h5>Client :</h5>
            <p>{projectsData[index].client}</p>
          </div>
        </div>
        <div className="menu-counter">
          {n.map((n, index) => (
            <div onClick={() => changeProject(index)} className="slider-btn">
              <h5>{n}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HpdSliderMenu;
