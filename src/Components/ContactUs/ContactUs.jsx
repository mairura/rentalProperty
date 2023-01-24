import React from "react";
import "./contactus.css";

const ContactUs = () => {
  return (
    <div className="contactus_page">
      <h3>
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </h3>
      <div className="contactus_form">
        <h3>Add A New Property</h3>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter Name" />
          <label>Address</label>
          <input type="text" placeholder="Address" />
          <label>Unit Number</label>
          <input type="text" placeholder="Enter Unit" />
          <label>City</label>
          <select>
            <option value="">Select City</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Nakuru">Nakuru</option>
            <option value="Kajiado">Kajiado</option>
          </select>
          <label>State</label>
          <select>
            <option value="">Select State</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Nakuru">Nakuru</option>
            <option value="Rongai">Rongai</option>
          </select>
          <label>Room Type</label>
          <select>
            <option value="">Select Room</option>
            <option value="Nairobi">1BR</option>
            <option value="Nakuru">2BR</option>
            <option value="Kajiado">3BR</option>
          </select>
          <label>Price</label>
          <input type="text" placeholder="Enter Price" />
          <label>State</label>
          <input type="text" placeholder="Select State" />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
