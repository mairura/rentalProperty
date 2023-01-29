import React from "react";
import "./footer.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { quotes } from "../../icons";

const Footer = () => {
  return (
    <div className="footer_container">
      <div>
        <AliceCarousel
          mdisableButtonsControls
          autoPlay
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          controlsStrategy="responsive"
        >
          {quotes}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
          pellentesque est. Curabitur at odio sit amet libero vulputate
          efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
          faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
          fringilla finibus.
        </AliceCarousel>
      </div>
    </div>
  );
};

export default Footer;
