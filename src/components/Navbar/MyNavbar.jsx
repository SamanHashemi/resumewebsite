import { Component } from "react";
import React from 'react';
import "./MyNavbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../img/MiddleSchoolS.png";
import Scroll from 'react-scroll'
import { Link } from "react-scroll";
import {Parallax, animateScroll as scroll } from 'react-spring/renderprops-addons';
import {Navbar, Nav, NavDropdown} from  'react-bootstrap';



const anchor = document.querySelector('#about_page')

class MyNavbar extends Component{
  container = React.createRef();
    constructor (props) {
        super(props);
        this.state = {
            open: false
        };
        
      }
      componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
      }
      componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
      }
      handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            open: false,
          });
        }
      };
      handleButtonClick = () => {
        this.setState(state => {
          return {
            open: !state.open,
          };
        });
      };
      //TODO: Stop jumping from page clicked to rather than currenty location
      //TODO: Change Navbar spacing
      //TODO: Make navbar transparent until scroll
    render(){
      return(
        <>
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="light">
          <Navbar.Brand className="nav-logo">
            <img
              src={logo}
              className="nav-logo"
              alt="Logo"
              onClick={() => this.props.parallax.scrollTo(0)}
            />
          </Navbar.Brand>
          <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse className="ml-auto" id="responsive-navbar-nav">

            <Nav className="ml-auto">

              <Nav.Link className="ml-auto mynav-item" id="mynav-item" onClick={() => this.props.parallax.scrollTo(this.props.aboutOffset)}>
                  About
              </Nav.Link>

              <Nav.Link className="ml-auto mynav-item" id="mynav-item" onClick={() => this.props.parallax.scrollTo(this.props.projectOffset)}>
                  Projects
              </Nav.Link>

              <Nav.Link className="ml-auto mynav-item" id="mynav-item" onClick={() => this.props.parallax.scrollTo(this.props.skillsOffset)}>
                  Skills
              </Nav.Link>

              <Nav.Link className="ml-auto mynav-item" id="mynav-item" onClick={() => this.props.parallax.scrollTo(this.props.musicOffset)}>
                  Music/Art
              </Nav.Link>

              <Nav.Link  className="ml-auto mynav-item" id="mynav-item" onClick={() => this.props.parallax.scrollTo(this.props.contactOffset)}>
                  Contact
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </>
      )
        if(this.props.navbarMobile){
          return(
              <nav className="nav" id="navbar">
              <div className="nav-content">
                <img
                  src={logo}
                  className="nav-logo"
                  alt="Logo"
                  onClick={() => this.props.parallax.scrollTo(0)}
                />
                <ul className="nav-items">
                  <li className="nav-item">
                    <Link
                      // activeClass="active"
                      onClick={() => this.props.parallax.scrollTo(this.props.aboutOffset)}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      // activeClass="active"
                      onClick={() => this.props.parallax.scrollTo(this.props.projectOffset)}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      // activeClass="active"
                      onClick={() => this.props.parallax.scrollTo(this.props.skillsOffset)}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Skills
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      // activeClass="active"
                      onClick={() => this.props.parallax.scrollTo(this.props.musicOffset)}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Music/Art
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      // activeClass="active"
                      onClick={() => this.props.parallax.scrollTo(this.props.contactOffset)}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          )
        }
      else{
        return(
          <>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                className="nav-logo"
                alt="Logo"
                onClick={() => this.props.parallax.scrollTo(0)}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#features">
                  <Link
                    // activeClass="active"
                    onClick={() => this.props.parallax.scrollTo(this.props.aboutOffset)}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About
                  </Link>
                </Nav.Link>
                <Nav.Link href="#pricing">
                  <Link
                    // activeClass="active"
                    onClick={() => this.props.parallax.scrollTo(this.props.projectOffset)}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Projects
                  </Link>
                </Nav.Link>
                <Nav.Link href="#pricing">
                  <Link
                    // activeClass="active"
                    onClick={() => this.props.parallax.scrollTo(this.props.skillsOffset)}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Skills
                  </Link>
                </Nav.Link>
                <Nav.Link href="#pricing">
                  <Link
                        // activeClass="active"
                        onClick={() => this.props.parallax.scrollTo(this.props.musicOffset)}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Music/Art
                  </Link>
                </Nav.Link>
                <Nav.Link href="#pricing">
                  <Link
                    // activeClass="active"
                    onClick={() => this.props.parallax.scrollTo(this.props.contactOffset)}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </>
        )
      }
    }
}

export default MyNavbar