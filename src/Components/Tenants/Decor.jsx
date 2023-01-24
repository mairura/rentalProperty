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
    },
    {
      name: "Kilimani Super Large",
      desc: "Private Room",
      price: "Ksh30000/night",
      image: houseB,
    },
    {
      name: "Kilimani Super Large",
      desc: "Private Room",
      price: "Ksh30000/night",
      image: houseC,
    },
  ];
  return (
    <div>
      <div className="properties_container">
        <div className="header">
          <div className="property_head">
            <h3>List of Properties</h3>
          </div>
          <div>
            <button>View All Property</button>
          </div>
        </div>
        <div className="properties">
          {houses.map((house, index) => (
            <div key={index}>
              {/* <div>{house.image}</div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Decor;
