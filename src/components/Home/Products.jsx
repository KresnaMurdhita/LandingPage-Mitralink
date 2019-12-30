import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import rectangle_6 from "../assets/rectangle_6.png";
import rectangle_copy_14 from "../assets/rectangle-copy-14.png";
import rectangle_copy_15 from "../assets/rectangle-copy-15.png";
import rectangle_copy_16 from "../assets/rectangle-copy-16.png";
import rectangle_copy_17 from "../assets/rectangle-copy-17.png";
import AOS from "aos";
import "aos/dist/aos.css";

class Products extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }
  render() {
    return (
      <div className="container">
        <div className="products_column">
          <p className="products" data-aos="zoom-in-up" data-aos-offset="800">
            PRODUCTS
          </p>
        </div>
        <Row>
          <Col md={4} className="rectangle_6_column">
            <img
              src={rectangle_6}
              className="rectangle_6"
              alt="rectangle_6"
              data-aos="flip-up"
              data-aos-offset="800"
              data-aos-duration="1000"
            />
          </Col>
          <Col md={4} className="rectangle_copy_14_column">
            <img
              src={rectangle_copy_14}
              alt="rectangle_copy_14"
              className="rectangle_copy_14"
              data-aos="flip-down"
              data-aos-offset="800"
              data-aos-duration="1250"
            />
          </Col>
          <Col md={4} className="rectangle_copy_15_column">
            <img
              src={rectangle_copy_15}
              className="rectangle_copy_15"
              alt="rectangle_copy_15"
              data-aos="flip-up"
              data-aos-offset="800"
              data-aos-duration="1500"
            />
          </Col>
        </Row>
        <Row className="row-products">
          <Col
            md={6}
            className="rectangle_copy_16_column pr-0"
            data-aos="flip-up"
            data-aos-offset="800"
            data-aos-duration="1750"
          >
            <img
              src={rectangle_copy_16}
              className="rectangle_copy_16"
              alt="rectangle_copy_16"
            />
          </Col>
          <Col
            md={6}
            className="rectangle_copy_17_column"
            data-aos="flip-down"
            data-aos-offset="800"
            data-aos-duration="2000"
          >
            <img
              src={rectangle_copy_17}
              className="rectangle_copy_17"
              alt="rectangle_copy_17"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Products;
