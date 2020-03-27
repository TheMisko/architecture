import React from "react";

const Clients = () => {
  const clients = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTbvoZVa-FdRmlMF2N7RDHmVspc1ElQJDOwWuqItDSqFoqn-Yn&s",
    "https://i.pinimg.com/originals/26/d6/dc/26d6dc8352e7f148898bb40e36518dba.png",
    "https://cdn.dribbble.com/users/1516872/screenshots/5260318/plaenty_logo.png",
    "https://www.freelogodesign.org/Content/img/logo-samples/attorney.png",
    "https://cdn.shopifycloud.com/hatchful-web/assets/5d6266e7bbcdb8fb017c10000ead2fd3.png",
    "https://i0.wp.com/logospecialist.net/wp-content/uploads/2018/09/Lettermark-Logo-Design.png?fit=810%2C287&ssl=1",
    "https://cdn.shopifycloud.com/hatchful-web/assets/5d6266e7bbcdb8fb017c10000ead2fd3.png",
    "https://png.pngtree.com/png-clipart/20190630/original/pngtree-monogram-initial-dp-logo-design-png-image_4154948.jpg",
    "https://cdn.dribbble.com/users/1546446/screenshots/4865910/supporta_dribbble_shot_white_background_reupload.png",
    "https://i.pinimg.com/originals/26/d6/dc/26d6dc8352e7f148898bb40e36518dba.png"
  ];

  return (
    <div className="au-text">
      <div>
        <h1>
          Some of the Clients <br /> we work with.
        </h1>{" "}
      </div>
      <div className="clients-logo">
        {clients.map(client => (
          <img src={client} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
