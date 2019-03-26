/*
  Component Description: Homepage that has some pictures for motivation
  Future Updates: Add more images, use material UI to design.
*/

import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
 
class Home extends Component {
  render() {

    const imageDesign= {
      paddingTop: "50px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"

    };

    const bottomImage = {
      paddingBottom : "50px"
    };

    return (
        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <img 
              style = {imageDesign}
              src={ require('../images/pic_1.png') } 
              alt="mark twain"
              />
            </Col>
          </Row>
          <Row>
          <Col>
              <img 
              style = {{...imageDesign,...bottomImage}} //apply multiple styles to one image
              src={ require('../images/pic_2.jpg') } 
              alt="arnold"
              />
            </Col>
          </Row>
        </Container>
    );
  }
}
 
export default Home;