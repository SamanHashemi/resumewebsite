import { Component } from "react";
import React from 'react';
import "./MyNavbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../img/MiddleSchoolS.png";
import {Navbar, Nav} from  'react-bootstrap';

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
    }
}

export default MyNavbar