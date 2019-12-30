import React, { Component } from "react";
import rectangle_7 from "../assets/rectangle_7.png";
import line_2_copy_9 from "../assets/line-2-copy-9.png";
import AOS from "aos";
import "aos/dist/aos.css";

class ContactUs extends Component {
  componentDidMount() {
    AOS.init({ duration: 1000 });
  }
  render() {
    return (
      <div>
        <img
          src={rectangle_7}
          alt="rectangle_7"
          className="rectangle_7"
          data-aos="zoom-in-down"
          data-aos-offset="800"
          data-aos-duration="500"
        />
        <div
          className="container"
          data-aos="fade-down"
          data-aos-offset="800"
          data-aos-duration="1000"
        >
          <img
            src={line_2_copy_9}
            alt="line-2-copy-9"
            className="line-2-copy-9"
          />
        </div>
      </div>
    );
  }
}

export default ContactUs;
