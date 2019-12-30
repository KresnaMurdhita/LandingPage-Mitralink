import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";
import shape_4 from "../assets/shape_4.png";
import shape_3 from "../assets/shape_3.png";
import path from "../assets/path.png";
import twitter_logo_silhouette from "../assets/twitter-logo-silhouette.png";
import linked from "../assets/linked.png";
import facebook from "../assets/facebook.png";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Row>
          <Col md={3} className="logo-footer_column">
            <img src={logo} alt="logo" className="logo-footer" />
          </Col>
          <Col md={9} className="rectangle_footer">
            <Row>
              <Col md={3}>
                <Row>
                  <Col md={12} className="hospitality">
                    <p className="text-white">
                      PT. Mitralink Solusi - Hospitality Business Solution
                    </p>
                  </Col>
                  <Col md={12}>
                    <Row>
                      <Col md={3} className="shape_4">
                        <img
                          src={shape_4}
                          alt="shape_4"
                          className="shape_4_img"
                        />
                      </Col>
                      <Col md={9} className="column_footer">
                        <p className="text-white">www.mitralink-sinergi.com</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={12}>
                    <Row>
                      <Col md={3} className="shape_3">
                        <img
                          src={shape_3}
                          alt="shape_3"
                          className="shape_3_img"
                        />
                      </Col>
                      <Col md={9} className="column_footer">
                        <p className="text-white">
                          Berca Building, 4th Floor, Suite 402-403 Jl. Palmerah
                          Utara No. 14 A, Jakarta Barat 111480 - Indonesia
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={12}>
                    <Row>
                      <Col md={3} className="path">
                        <img src={path} alt="path" className="path_img" />
                      </Col>
                      <Col md={9} className="column_footer">
                        <p className="text-white">+62 (21)536 739 58</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col md={3}>
                <Row>
                  <Col md={12} className="hospitality">
                    <h5>PRODUCTS</h5>
                  </Col>
                  <Col md={12}>
                    <br />
                  </Col>
                  <Col md={12} className="products_footer_column">
                    <p className="text-white">Front Office</p>
                  </Col>
                  <Col md={12} className="products_footer_column">
                    <p className="text-white">Back Office</p>
                  </Col>
                  <Col md={12} className="products_footer_column">
                    <p className="text-white">Market Place</p>
                  </Col>
                  <Col md={12} className="products_footer_column">
                    <p className="text-white">Membership</p>
                  </Col>
                  <Col md={12} className="products_footer_column">
                    <p className="text-white">Human Resource</p>
                  </Col>
                </Row>
              </Col>
              <Col md={3} className="hospitality">
                <Row>
                  <Col md={12}>
                    <h5>SOLUTION</h5>
                  </Col>
                  <Col md={12}>
                    <br />
                  </Col>
                  <Col md={12}>
                    <p className="text-white">Table Service</p>
                  </Col>
                  <Col md={12}>
                    <p className="text-white">Quick Serve Restaurant</p>
                  </Col>
                  <Col md={12}>
                    <p className="text-white">Delivery</p>
                  </Col>
                  <Col md={12}>
                    <p className="text-white">Spa / Karaoke</p>
                  </Col>
                </Row>
              </Col>
              <Col md={3}>
                <Row>
                  <Col md={12} className="hospitality">
                    <h5>FOLLOW US</h5>
                  </Col>
                  <Col md={12}>
                    <br />
                  </Col>
                  <Col md={4} className="logo_column_twitter">
                    <img
                      src={twitter_logo_silhouette}
                      alt="twitter-logo-silhouette"
                      className="twitter-logo-silhouette"
                    />
                  </Col>
                  <Col md={4} className="logo_column_linked">
                    <img src={linked} alt="linked" className="linked" />
                  </Col>
                  <Col md={4} className="logo_column_facebook">
                    <img src={facebook} alt="facebook" className="facebook" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
