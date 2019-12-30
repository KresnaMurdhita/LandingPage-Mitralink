import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo_cashlez from "../assets/logo-cashlez.png";
import genex_profilelogo from "../assets/genex-profilelogo.png";
import infrasyss from "../assets/infrasyss.png";
import banner_cadena from "../assets/banner-cadena-300-x-124.png";
import logo_2 from "../assets/logo_2.png";
import AOS from "aos";
import "aos/dist/aos.css";

class OurPartners extends Component {
  componentDidMount() {
    AOS.init({ duration: 1000 });
  }
  render() {
    return (
      <div>
        <p
          className="text-center our-partners"
          data-aos="zoom-in"
          data-aos-offset="800"
          data-aos-duration="500"
        >
          OUR PARTNERS
        </p>
        <Container>
          <Row data-aos="zoom-in" data-aos-offset="800" data-aos-duration="500">
            <Col md className="logo_cashlez_column">
              <img
                src={logo_cashlez}
                alt="logo_cashlez"
                className="logo_cashlez"
              />
            </Col>
            <Col md className="genex_profilelogo_column">
              <img
                src={genex_profilelogo}
                alt="genex_profilelogo"
                className="genex_profilelogo"
              />
            </Col>
            <Col md className="infrasyss_column">
              <img src={infrasyss} alt="infrasyss" className="infrasyss" />
            </Col>
            <Col md className="banner_cadena_column">
              <img
                src={banner_cadena}
                alt="banner_cadena"
                className="banner_cadena"
              />
            </Col>
            <Col md className="logo_2_column">
              <img src={logo_2} alt="logo_2" className="logo_2" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default OurPartners;
