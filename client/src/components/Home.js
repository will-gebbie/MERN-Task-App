import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
 
class Home extends Component {
  render() {
    return (
        <Container>
          <Row>
            <Col>
              <img 
              width={400}
              height={400}
              src={ require('../images/pic_1.png') } 
              alt="mark twain"
              />
            </Col>
            <Col>
              <img 
              width = {400}
              height = {400}
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