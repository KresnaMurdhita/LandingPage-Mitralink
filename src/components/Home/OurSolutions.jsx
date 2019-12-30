import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import line_2_copy_4 from "../assets/line-2-copy-4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "aos/dist/aos.css";

class OurSolutions extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true
    };
    return (
      <div>
        <Container>
          <img
            src={line_2_copy_4}
            className="line_2_copy_4"
            alt="line_2_copy_4"
            data-aos="fade-down"
            data-aos-offset="500"
          />
          <Row>
            <Col>
              <p
                className="our-solutions text-center"
                data-aos="zoom-in"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                Our Solutions
              </p>
              <p
                className="Every-type-of-Indust"
                data-aos="zoom-in"
                data-aos-offset="500"
                data-aos-duration="750"
              >
                Every type of Industry has its own unique characteristic. We
                would like to offer our customer the best solution that fit
                their business that has been customized for their specific needs
              </p>
            </Col>
          </Row>
        </Container>
        <div className="container" id="carousel">
          <Slider {...settings}>
            <div>
              <img src={require("../assets/rectangle-copy-7.png")} alt="test" />
            </div>
            <div>
              <img src={require("../assets/rectangle-copy-8.png")} alt="test" />
            </div>
            <div>
              <img src={require("../assets/rectangle-copy-9.png")} alt="test" />
            </div>
            <div>
              <img src={require("../assets/rectangle-copy-8.png")} alt="test" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default OurSolutions;
