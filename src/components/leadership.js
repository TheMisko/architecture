import React from "react";

const Leadership = () => {
  const url1 =
    "https://media.gettyimages.com/photos/smart-businesswoman-portrait-picture-id163752605?s=612x612";
  const url2 =
    "https://media.gettyimages.com/photos/chief-executive-portrait-picture-id163676842?s=612x612";
  return (
    <div className="leadership-container">
      <h1>Company Leadership</h1>
      <div className="leadership-item">
        <div>
          <img src={url1} />
          <h5>Project Director</h5> <h2>Rose Sorensen</h2>
        </div>
        <div>
          {" "}
          <img src={url2} />
          <h5>Lead Architect</h5> <h2>Matthew Flesland</h2>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
