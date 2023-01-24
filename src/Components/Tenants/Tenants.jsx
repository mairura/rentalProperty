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
        <h3><span className="underline">Minimum Living Cost </span>Takes Care of Everything</h3>
        <div className="sample">
          <div className="sample_pic">
            <img src={House} alt="sample house" />
          </div>
          <div className="house_att">
            <div className="house_prop">
              <img src={Vector} alt="coin" />
              <p>Pay As Little As Possible</p>
            </div>
            <div className="house_prop">
              <img src={HouseIcon} alt="house" />
              <p>Enjoy Wisdom Of Community</p>
            </div>
            <div className="house_prop">
              <img src={LayerIcon} alt="layer" />
              <p>
                Let's Somebody Else
                <br /> Take Care Of Landlord
              </p>
            </div>
            <div className="house_prop">
              <img src={EnvIcon} alt="env" />
              <p>Enjoy Peaceful Environment</p>
            </div>
            <div className="house_prop">
              <img src={SafeIcon} alt="sec" />
              <p>
                Stay Safe! <br /> Save Money
              </p>
            </div>
            <div className="house_prop">
              <img src={PayIcon} alt="sec" />
              <p>Pay For What You Use!</p>
            </div>
          </div>
        </div>
      </div>
      <Decor />
    </div>
  );
};

export default Tenants;
