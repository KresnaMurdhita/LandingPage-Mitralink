import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import rectangle_2 from "../assets/rectangle_2.png";
import rectangle_3 from "../assets/rectangle_3.png";
import line from "../assets/line-2-copy-2.png";
import line_2 from "../assets/line-2-copy-3.png";
import AOS from "aos";
import "aos/dist/aos.css";

class AboutUs extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }
  render() {
    return (
      <Container className="content">
        <Row>
          <Col md={2}></Col>
          <Col md={5} className="rectangle_2">
            <img
              src={rectangle_2}
              id="rectangle_2"
              alt="rectangle_2"
              data-aos="flip-up"
              data-aos-offset="600"
            />
          </Col>
          <Col md={5} className="rectangle_3">
            <img
              src={rectangle_3}
              id="rectangle_3"
              alt="rectangle_3"
              data-aos="fade-up"
              data-aos-offset="600"
            />
          </Col>
          <Col className="font">
            <Row>
              <Col md={12}>
                <p
                  className="aboutus"
                  data-aos="fade-up"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="800"
                  data-aos-duration="500"
                >
                  ABOUT US
                </p>
              </Col>
              <Col md={6}>
                <p
                  className="We-bring-new-meaning"
                  data-aos="fade-up"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="800"
                  data-aos-duration="500"
                >
                  We bring new meaning in partnership, so we only always focus
                  in one specific field and be the best in it
                </p>
              </Col>
              <Col md={6}></Col>
              <Col md={2}>
                <img
                  src={line}
                  alt="line"
                  data-aos="fade-up"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="800"
                  data-aos-duration="2000"
                />
              </Col>
              <Col md={8}>
                <p
                  className="Mitrasys-Bisnis-Sine"
                  data-aos="fade-up"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="800"
                  data-aos-duration="500"
                >
                  Mitrasys Bisnis Sinergi was officially founded in 1999 by
                  computer professional s with hospitality industry background.
                  After succeeded as a major solution provider in hospitality
                  industry with more than 14 years using proven and world class
                  products, we decided to merge the company with Epiqure
                  Indonesia that have owned complete product series in
                  Hospitality System Solution into Mitralink Solusi in 2013{" "}
                </p>
              </Col>
            </Row>
          </Col>
          <img
            src={line_2}
            className="ml-auto"
            id="line_2"
            alt="line_2"
            data-aos="fade-up"
            data-aos-offset="700"
          />
        </Row>
      </Container>
    );
  }
}

export default AboutUs;
