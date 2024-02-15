import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';


class ToggleIcon extends React.Component {
  render() {
    let _tail = (this.props.class === "material-icons-outlined")? "" : " myIcon";
    return (
      <i className={this.props.class + _tail} >
        {this.props.value}
      </i>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleExpand: false,
      darkMode: false,
    };
  }

  handleNavSelect = (eventKey) => {
    const navBar = document.querySelector('.navbar');
    const yOffset = -navBar.clientHeight;
    let element = document.getElementById(eventKey);
    var position = element.getBoundingClientRect();
    var y = position.top  + window.pageYOffset + yOffset ;
    window.scrollTo(0, y);

    // change toggle status as the menu close by default
    this.setState({
      toggleExpand: false,
    });
  };

  handleDarkToggleClick = () => {
    let darkModeStatus = this.state.darkMode ? false : true;
    this.setState({
      toggleExpand: false,
      darkMode: darkModeStatus,
    });
    const navBar = document.querySelector('.navbar');
    navBar.classList.toggle("bg-dark");
    navBar.classList.toggle("navbar-dark");
    navBar.classList.toggle("navbarBorder-dark");

    document.querySelectorAll(".bgClass1").forEach(element => element.classList.toggle("DarkbgClass1"));
    document.querySelectorAll(".bgClass2").forEach(element => element.classList.toggle("DarkbgClass2"));
    document.querySelectorAll(".myIcon").forEach(element => element.classList.toggle("myIconDarkMode"));
    document.querySelectorAll(".myCard").forEach(element => element.classList.toggle("myCardDarkMode"));
    document.querySelectorAll(".card-footer").forEach(element => element.classList.toggle("card-footerDarkMode"));

    // DarkMode Toggle for Home 
    let _animationText =  document.querySelector(".animationText");
    _animationText.classList.toggle("animationTextDarkMode");
    _animationText.childNodes.forEach(_span => _span.style.animation = 'none')
    let styleElemBF = document.head.appendChild(document.createElement("style"));
    let styleElemAF = document.head.appendChild(document.createElement("style"));
    let styleElemHerfLink = document.head.appendChild(document.createElement("style"));

    if (this.state.darkMode) {
      styleElemBF.innerHTML = ".animationText::before {background: black; animation: none;}";
      styleElemAF.innerHTML = ".animationText::after {background: black; animation: none;}";
      styleElemHerfLink.innerHTML = "a {color: #007bff;}"
    } else {
      styleElemBF.innerHTML = ".animationText::before {background: white; animation: none;}";
      styleElemAF.innerHTML = ".animationText::after {background: white; animation: none;}";
      styleElemHerfLink.innerHTML = "a {color: #6ee1f5;}"
    }

    // restart home Text Animation
    setTimeout(function(Mode) {
      _animationText.childNodes.forEach((_span,i) => {
        _span.style.animation = ''; // add back animation
        let delay = 0.3 + Math.abs(i - 3) * 0.1; // add back animation delay
        _span.style.animationDelay = `${delay}s`;
      });
      // add back animation for ::before and ::after element
      if (Mode) {
        styleElemBF.innerHTML = ".animationText::before {background: black; animation:'';}";
        styleElemAF.innerHTML = ".animationText::after {background: black; animation:'';}";
      } else {
        styleElemBF.innerHTML = ".animationText::before {background: white; animation:'';}";
        styleElemAF.innerHTML = ".animationText::after {background: white; animation:'';}";
      }
    }, 1, this.state.darkMode);
  };

  renderToggleIcon() {
    // select icon
    let value = this.state.toggleExpand ? "close" : "menu";
    let className = "material-icons";
    return <ToggleIcon 
             value={value}
             class={className}
         />;
  }

  renderDarkToggleIcon() {
    let value = this.state.darkMode? "wb_sunny" : "brightness_2";
    let className = this.state.darkMode? "material-icons-outlined":  "material-icons";
    return <ToggleIcon 
             value={value}
             class={className}
         />;
  }

  onNavbarToggleClick() {
    // change toggle status
    let toggleStatus = this.state.toggleExpand ? false : true;
    this.setState({
      toggleExpand: toggleStatus,
    });
  }


  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" sticky="top" className="navbarBorder-light">
        <Container>
          <Navbar.Brand href="/" className="navBrand">r0bertLiu</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" children={this.renderToggleIcon()}  onClick={() => this.onNavbarToggleClick()} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" onSelect={this.handleNavSelect}>
              <Nav.Link href="#" eventKey="home">Home</Nav.Link>
              <Nav.Link href="#" eventKey="about">About</Nav.Link>
              <Nav.Link href="#" eventKey="experience">Experience</Nav.Link>
              <Nav.Link href="#" eventKey="projects">Projects</Nav.Link>
              <Nav.Link href="#" eventKey="education">Education</Nav.Link>
              <Nav.Link href="#" eventKey="contact">Contact</Nav.Link>
            </Nav>
            <Nav onSelect={this.handleDarkToggleClick}>
              <Nav.Link href="#">
                {this.renderDarkToggleIcon()}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;