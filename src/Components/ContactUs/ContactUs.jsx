import React from "react";
import "./contactus.css";

const ContactUs = () => {
  return (
    <div className="contactus_page">
      <h4>
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </h4>
      <div className="contactus_form">
        <h3>Add A New Property</h3>
        <div className="contactus_container">
          <form>
            <div className="name">
              <div>
                <label>Name</label>
                <input type="text" placeholder="Enter Name" />
              </div>
              <div>
                <label>City</label>
                <select>
                  <option value="">Select City</option>
                  <option value="Nairobi">Nairobi</option>
                  <option value="Nakuru">Nakuru</option>
                  <option value="Kajiado">Kajiado</option>
                </select>
              </div>
              <div>
                <label>Price</label>
                <input type="text" placeholder="Enter Price" />
              </div>
            </div>
          </form>
          {/* //////////////////// */}
          <form>
            <div className="name">
              <div>
                <label>Address</label>
                <input type="text" placeholder="Address" />
              </div>
              <div>
                <label>State</label>
                <select>
                  <option value="">Select State</option>
                  <option value="Nairobi">Nairobi</option>
                  <option value="Nakuru">Nakuru</option>
                  <option value="Rongai">Rongai</option>
                </select>
              </div>
              <div>
                <label>Room Type</label>
                <select>
                  <option value="">Select Room</option>
                  <option value="Nairobi">1BR</option>
                  <option value="Nakuru">2BR</option>
                  <option value="Kajiado">3BR</option>
                </select>
              </div>
            </div>
          </form>
          {/* /////////////////////////// */}
          <form>
            <div className="name">
              <div>
                <label>Unit Number</label>
                <input type="text" placeholder="Enter Unit" />
              </div>
              <div>
                <label>State</label>
                <input type="text" placeholder="Select State" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
