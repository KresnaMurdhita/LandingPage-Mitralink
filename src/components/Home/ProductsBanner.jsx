import React, { Component } from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import image1 from "../assets/rectangle.png";

class ProductsBanner extends Component {
  render() {
    return (
      <Carousel className="slide">
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption className="">
            <Container className="text-left">
              <Row>
                <Col>
                  <h1 className="ProductsBanner">PRODUCTS</h1>
                </Col>
              </Row>
              <Row>
                <Col md={5}>
                  <p className="infrasys">
                    Infrasys International Ltd. pioneered the development of the
                    risk-free, cost-effective and flexible POS solution for food
                    and beverage industry. Our professional skills, sincere
                    attitude and innovative ideas.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="outline-warning" className="ReadMe">
                    <b className="ReadMeCaption">Read Me</b>
                  </Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="Third slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      // <img src={line2} alt="line" />
    );
  }
}

export default ProductsBanner;
