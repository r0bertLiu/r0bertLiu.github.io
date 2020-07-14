import React from 'react';
import SectionTemplate from './sectionTemplate';
import { Row, Col, Card  } from 'react-bootstrap';

class Projects extends React.Component {
  renderLeftSection() {
    return <h1>Projects</h1>;
  }

  renderightSection() {
    return (
      <Row xs={1} md={2}>
        <Col className="cardCol">
          <Card className="myCard">
            <Card.Img variant="top" src="/img/link.jpg" className="responsiveImg"/>
            <Card.Body>
              <Card.Title>Seddit</Card.Title>
              <Card.Text>
                Seddit is a Reddit-like social media discussion website project which
                is a single page application(SPA) written in JavaScript and Python Flask
                REST library for API. The Successful implementation of major features 
                including login, registration, write new post, reply comment, Infinite scrolling
                upvote/downvote and etc..
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <a href="https://github.com/r0bertLiu/Seddit" target="_blank" rel="noopener noreferrer">Page Link</a>
              </small>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="cardCol">
          <Card className="myCard">
            <Card.Img variant="top" src="/img/Robotics.jpg" className="responsiveImg"/>
            <Card.Body>
              <Card.Title>Oculomotor</Card.Title>
              <Card.Text>
              This project is a useful application for Double the robot with panoramic view. 
              An iOS client side link robot and waitting operation to contol it. A PCServer 
              to send operation from keyboard, receive the panoramic live streamming sent by 
              Insta360 pro camera and use a machine learning module to do object detection. 
              A frontend brower based webpage to show the parnoramic view and data detection 
              result.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <a href="https://github.com/r0bertLiu/Oculomotor" target="_blank" rel="noopener noreferrer">Page Link</a>
              </small>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="cardCol">
          <Card className="myCard">
            <Card.Img variant="top" src="/img/layer.jpg" className="responsiveImg"/>
            <Card.Body>
              <Card.Title>Legit</Card.Title>
              <Card.Text>
              Legit realized a subset of the version control system Git 
              based on POSIX-compatible shell and Perl. The working operating 
              system is linux. Major features of Git are implemented including 
              adding file, commit, remove file, show status, switch branch 
              and etc..
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <a href="https://github.com/r0bertLiu/Legit" target="_blank" rel="noopener noreferrer">Page Link</a>
              </small>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="cardCol">
          <Card className="myCard">
            <Card.Img variant="top" src="/img/mini-game.jpg" className="responsiveImg"/>
            <Card.Body>
              <Card.Title>Hangman - little game</Card.Title>
              <Card.Text>
                A simple Hangman little game write with raw JS. Welcome to have a try~
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <a href="https://r0bertliu.github.io/HangMan/"  target="_blank" rel="noopener noreferrer">Play it now!</a>
              </small>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="cardCol">
          <Card className="myCard">
            <Card.Img variant="top" src="/img/math.jpg" className="responsiveImg"/>
            <Card.Body>
              <Card.Title>Calculator via React</Card.Title>
              <Card.Text>
                A simple Calculator implemented by React. The demo can be found
                at Codepen from the links below.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <a href="https://codepen.io/r0bertliu/pen/dyYYYeG"  target="_blank" rel="noopener noreferrer">Page Link</a>
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <SectionTemplate leftsection={this.renderLeftSection()} rightsection={this.renderightSection()} />
    );
  }
}

export default Projects;