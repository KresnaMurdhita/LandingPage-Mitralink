import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import rectangle_13 from "../assets/rectangle_13.png";
import rectangle_copy_2 from "../assets/rectangle-copy-2.png";
import AOS from "aos";
import "aos/dist/aos.css";

class OurClients extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col
              md={6}
              className="rectangle_13_column"
              data-aos="fade-up"
              data-aos-offset="800"
              data-aos-duration="1000"
            >
              <img
                src={rectangle_13}
                alt="rectangle_13"
                className="rectangle_13"
              />
            </Col>
            <Col
              md={3}
              className="rectangle-copy-2-column"
              data-aos="flip-up"
              data-aos-offset="800"
              data-aos-duration="1000"
            >
              <img
                src={rectangle_copy_2}
                alt="rectangle-copy-2"
                className="rectangle-copy-2"
              />
            </Col>
            <Col md={3}></Col>
            <Col className="font-our-client">
              <Container>
                <Row data-aos="fade-down" data-aos-duration="1000">
                  <Col md={12}>
                    <p className="our-client">OUR CLIENT</p>
                  </Col>
                  <Col md={6}></Col>
                  <Col md>
                    <p className="Our-clients-are-spre">
                      Our clients are spread in various countries such as China,
                      Hong Kong, Canada to the USA. 16 Corporate Customers, 200+
                      Brand Names, 600+ Outlets, 3500+ Terminals Installation,
                      All of them trust mitralink as their preferred technology
                      partner.
                    </p>
                  </Col>
                  {/* <Col md={2}></Col> */}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default OurClients;
