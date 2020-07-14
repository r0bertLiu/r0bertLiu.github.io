import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class SectionTemplate extends React.Component {
  render() {
    return (
      <Container>
        <Row>
        <Col lg={4} className="textssa">
          {this.props.leftsection}
        </Col>
        <Col lg={8}>
          {this.props.rightsection}
        </Col>
        </Row>
      </Container>
    );
  }
}

export default SectionTemplate;