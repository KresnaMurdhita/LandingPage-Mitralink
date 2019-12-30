import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import rectangle_4 from "../assets/rectangle_4.png";
import rectangle_copy_2 from "../assets/rectangle-copy-2.png";
import badge from "../assets/badge.png";
import worldwide from "../assets/worldwide.png";
import repair from "../assets/repair.png";
import presentation from "../assets/presentation.png";
import "aos/dist/aos.css";

class WhyUS extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={5} className="pr-0">
            <img
              src={rectangle_4}
              className="rectangle_4"
              alt="rectangle_4"
              data-aos="fade-up"
              // data-aos-offset="400"
              data-aos-duration="500"
            />
          </Col>
          <Col md={3} className="pl-0 rectangle-copy-2-1_column">
            <img
              src={rectangle_copy_2}
              className="rectangle-copy-2-1"
              alt="rectangle-copy-2-1"
              data-aos="zoom-in"
              data-aos-duration="500"
            />
          </Col>
          <Col md={4} className="card-column">
            <Row>
              <Col
                className="card-rectangle-1"
                data-aos="fade-down"
                data-aos-anchor="#example-anchor"
                data-aos-offset="1500"
                data-aos-duration="500"
              >
                {/* <Card className="card-width"> */}
                <Card.Body className="card-body">
                  <Row>
                    <Col md={5} className="badge_image_column text-center">
                      <img src={badge} alt="badge" className="badge_image" />
                    </Col>
                    <Col md={7}>
                      <p className="Product-selection-wi">
                        Product selection with best quality and competitive
                        technology
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
                {/* </Card> */}
              </Col>
              <Col
                className="card-rectangle-2"
                data-aos="fade-down"
                data-aos-anchor="#example-anchor"
                data-aos-offset="1500"
                data-aos-duration="1000"
              >
                {/* <Card className="card-width"> */}
                <Card.Body className="card-body">
                  <Row>
                    <Col md={5} className="worldwide_image_column text-center">
                      <img
                        src={worldwide}
                        alt="worldwide"
                        className="worldwide_image"
                      />
                    </Col>
                    <Col md={7}>
                      <p className="Product-selection-wi">
                        Competent Professionals in their own fields
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
                {/* </Card> */}
              </Col>
              <Col
                className="card-rectangle-3"
                data-aos="fade-down"
                data-aos-anchor="#example-anchor"
                data-aos-offset="1500"
                data-aos-duration="1500"
              >
                {/* <Card className="card-width"> */}
                <Card.Body className="card-body">
                  <Row>
                    <Col md={5} className="repair_image_column text-center">
                      <img src={repair} alt="repair" className="repair_image" />
                    </Col>
                    <Col md={7}>
                      <p className="Product-selection-wi">
                        Best after sales support
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
                {/* </Card> */}
              </Col>
              <Col
                className="card-rectangle-4"
                data-aos="fade-down"
                data-aos-anchor="#example-anchor"
                data-aos-offset="1500"
                data-aos-duration="2000"
              >
                {/* <Card className="card-width"> */}
                <Card.Body className="card-body">
                  <Row>
                    <Col
                      md={5}
                      className="presentation_image_column text-center"
                    >
                      <img
                        src={presentation}
                        alt="presentation"
                        className="presentation_image"
                      />
                    </Col>
                    <Col md={7}>
                      <p className="Product-selection-wi">
                        Best Service & Maintenance Provider
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
                {/* </Card> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WhyUS;
