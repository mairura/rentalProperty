import React from "react";
import "./tenants.css";
import Vector from "../../Assets/Vector.png";
import House from "../../Assets/sample_house.png";
import HouseIcon from "../../Assets/Vector_house.png";
import LayerIcon from "../../Assets/Vector_landlord.png";
import EnvIcon from "../../Assets/Vector_env.png";
import SafeIcon from "../../Assets/Vector_safe.png";
import PayIcon from "../../Assets/Vector_pay.png";
import Decor from "./Decor";

const Tenants = () => {
  return (
    <div className="tenants_container">
      <div className="about">
        <h3>
          <span className="underline">Minimum Living Cost </span>Takes Care of
          Everything
        </h3>
        <div className="sample">
          <div className="sample_pic">
            <img src={House} alt="sample house" />
          </div>
          <div className="house_att">
            <div className="house_prop">
              <img src={Vector} alt="coin" />
              <h4>Pay As Little As Possible</h4>
            </div>
            <div className="house_prop">
              <img src={HouseIcon} alt="house" />
              <h4>Enjoy Wisdom Of Community</h4>
            </div>
            <div className="house_prop">
              <img src={LayerIcon} alt="layer" />
              <h4>Let's Somebody Else Take Care Of Landlord</h4>
            </div>
            <div className="house_prop">
              <img src={EnvIcon} alt="env" />
              <h4>Enjoy Peaceful Environment</h4>
            </div>
            <div className="house_prop">
              <img src={SafeIcon} alt="sec" />
              <h4>Stay Safe! Save Money</h4>
            </div>
            <div className="house_prop">
              <img src={PayIcon} alt="sec" />
              <h4>Pay For What You Use!</h4>
            </div>
          </div>
        </div>
      </div>
      <Decor />
    </div>
  );
};

export default Tenants;
