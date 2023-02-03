import React from "react";
import "./tenants.css";
import houseA from "../../Assets/houseA.png";
import houseB from "../../Assets/houseB.png";
import houseC from "../../Assets/houseC.png";
import houseD from "../../Assets/houseD.png";
import houseE from "../../Assets/houseE.png";
import houseF from "../../Assets/houseF.png";

const Decor = () => {
  const houses = [
    {
      name: "Kilimani Super Large",
      desc: "Private Room",
      price: "Ksh30000/night",
      image: houseA,
      shower: 2,
      beds: 2,
      rooms: 3,
    },
    {
      name: "Kilimani Super Large",
      desc: "Private Room",
      price: "Ksh30000/night",
      image: houseB,
      shower: 2,
      beds: 2,
      rooms: 3,
    },
    {
      name: "Kilimani Super Large",
      desc: "Private Room",
      price: "Ksh30000/night",
      image: houseC,
      shower: 2,
      beds: 2,
      rooms: 3,
    },
  ];
  return (
    <div>
      <div className="properties_container">
        <div className="header">
          <div className="property_head">
            <h3>
              <span className="underline">List of</span>&nbsp;Properties
            </h3>
          </div>
          <div>
            <button>View All Property</button>
          </div>
        </div>
        <div className="properties">
          {houses.map((house, index) => (
            <div key={index}>
              <img src={house.image} alt="house" />
              <h3>{house.name}</h3>
              <p>{house.desc}</p>
              <b>{house.price}</b>
              <div className="ammenities">
                <p>{house.shower}</p>
                <p>{house.beds}</p>
                <p>{house.rooms}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Decor;
