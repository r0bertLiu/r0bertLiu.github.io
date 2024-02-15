import React from 'react';
import {Container} from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <footer>
          <p className="powerby">
            Build with  
            <a href="https://react-bootstrap.github.io/"> react-bootstrap </a>
            by 
            <a href="https://github.com/r0bertLiu"> r0bertLiu</a>
            <button className="back-button float-right" onClick={() => window.scrollTo(0, 0)}>
              <i className="material-icons myIcon">expand_less</i>
            </button>
          </p>
          <div>
            Pictures Source: https://unsplash.com/
          </div>
        </footer>
      </Container>
    );
  }
}


export default Footer;
