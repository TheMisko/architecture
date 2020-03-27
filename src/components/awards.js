import React from "react";

const Awards = () => {
  const awards = [
    {
      year: "2017",
      award: "Aga Khan Award for Architecture",
      project: "Sratos Research Center"
    },
    {
      year: "2012",
      award: "Mies van der Rohe Award",
      project: "Holsten National Opera House"
    },
    {
      year: "2007",
      award: "MPIPM Award, Best future project",
      project: "Private Villa, Oslo, Norway"
    },
    {
      year: "2018",
      award: "WAN Urban Design Award",
      project: "Sprintvision, Outlet Center"
    },
    {
      year: "2019",
      award: "CRD EcoStar Award",
      project: "Integrated Watershed Management"
    },
    {
      year: "2018",
      award: "AMM Architectural Award",
      project: "Public Space Planning, Copenhagen"
    }
  ];

  return (
    <div className="awards-container">
      <div className="awards-top">
        <div className="awards-year">
          <h2>Selected Awards</h2>
          <h2>2007/2019</h2>
          {/* <h5>2012/2020</h5> */}
        </div>
        <div className="awards-p">
          {" "}
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>
      </div>
      <div className="awards-list">
        <div className="awards-info">
          <div className="awards-info-item">Year</div>
          <div className="awards-info-item">Award</div>
          <div className="awards-info-item">Project</div>
        </div>
        {awards.map(award => (
          <div className="awards-item">
            <div className="awards-info-item">{award.year}</div>
            <div className="awards-info-item">{award.award}</div>
            <div className="awards-info-item">{award.project}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
