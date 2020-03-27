import React from "react";

const HpdSlider = index => {
  console.log(index.index);
  const slike = [
    "https://media.gq.com/photos/5b6b1d966515980b722b526a/master/w_1600%2Cc_limit/The-Brutal-Wonders-Of-The-Architecture-World-GQ-Style-Fall-2018_13.jpg",
    "https://arcspace.com/wp-content/uploads/CropUp/-/media/930633/01_stoller.jpg",
    "https://cdn.vox-cdn.com/thumbor/elu3ZET3BhThJseL405rhiLBosQ=/0x0:3000x2380/1200x800/filters:focal(849x819:1329x1299)/cdn.vox-cdn.com/uploads/chorus_image/image/65776027/ezra_stoller_heller_house.0.jpg",
    "https://dnsarchitectsinc.com/wp-content/uploads/2019/07/architecture-black-and-white-boardwalk-262367.jpg",
    "https://i.pinimg.com/originals/4f/53/eb/4f53eb17c1b5feea5b656ab6abf2fd8f.jpg"
  ];

  return (
    <div className="slider">
      {" "}
      <img src={slike[index.index]} />
    </div>
  );
};

export default HpdSlider;
