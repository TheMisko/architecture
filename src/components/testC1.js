import React from "react";
import Nav from "../components/nav";
const TestC1 = () => {
  const info = [
    {
      url:
        "https://arcspace.com/wp-content/uploads/CropUp/-/media/930633/01_stoller.jpg",
      name: "Cotswolds bungalow",

      location: "Cotswolds bungalow",
      program: "Home bungalow",
      time: "01/09/2014",
      space: "1300m²",
      client: "Charlie Luxton Design"
    },
    {
      url:
        "https://cdn.vox-cdn.com/thumbor/elu3ZET3BhThJseL405rhiLBosQ=/0x0:3000x2380/1200x800/filters:focal(849x819:1329x1299)/cdn.vox-cdn.com/uploads/chorus_image/image/65776027/ezra_stoller_heller_house.0.jpg",
      name: "Matchbox houses",
      location: "Matchbox houses",
      program: "Home",
      time: "11/09/2019",
      space: "720.0 m²",
      client: "Avanto Architects"
    },
    {
      url:
        "https://arcspace.com/wp-content/uploads/CropUp/-/media/930633/01_stoller.jpg",
      name: "Stratos Research Center",
      location: "Stratos Research Center",
      program: "Research Center",
      time: "13/02/2017",
      space: "+2500m²",
      client: "Randerberg Municipality"
    },
    {
      url:
        "https://dnsarchitectsinc.com/wp-content/uploads/2019/07/architecture-black-and-white-boardwalk-262367.jpg",
      name: "Bangalore International Centre",
      location: "Bangalore International Centre",
      program: "Public space",
      time: "Completed 2010",
      space: "4420.0 m²",
      client: "The Bangalore International Centre (BIC)"
    },
    {
      url:
        "http://www.jpjouve.com/wp-content/uploads/2016/10/20161016-jp-jouve-black-white-cityscape-paris-Notre-Dame-de-lEsp%C3%A9rance-1-HQ-WQ.jpg",
      name: "Wayne State University",
      location: "Wayne State University",
      program: "Detroit University",
      time: "13/02/2017",
      space: "125000.0 ft²",
      client: "City of Detroit"
    }
  ];

  return (
    <>
      {" "}
      <Nav />
      <div className="mobile-projects-container">
        {info.map(info => (
          <div className="mobile-project">
            <img src={info.url} /> <h1>{info.name}</h1>
            <div className="m-p-info">
              <p id="m-p">Location: </p> <p>{info.location}</p>
            </div>
            <div className="m-p-info">
              <p id="m-p">Program: </p> <p>{info.program}</p>
            </div>
            <div className="m-p-info">
              <p id="m-p">Started: </p> <p>{info.time}</p>
            </div>
            <div className="m-p-info">
              <p id="m-p">Space: </p> <p>{info.space}</p>
            </div>
            <div className="m-p-info">
              <p id="m-p">Client: </p> <p>{info.client}</p>
            </div>
            <p>
              Lorem ipsum is a dummy text oginated in late 1500s becouse i hate
              jews.
            </p>
            <h3>More</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default TestC1;
