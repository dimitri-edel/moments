import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import logo from '../assets/logo192.png';

const NavBar = () => {
  return (
    <div>
      <Navbar fixed="top" expand="sm">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} width="50px" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* ml-auto stands for margin left auto, which will push the component to the left
                mr-auto stands for margin right auto, whcih will push the component tot the right
                text-left will display the items on the left-hand side if the nav is small and collapsed,
                set onece it is exapnded with text-left it will appear on the lef-hand side*/}
            <Nav className="ml-auto text-left">
              <Nav.Link><i className="fas fa-home"></i>Home</Nav.Link>
              <Nav.Link><i className="fas fa-sign-in-alt"></i>Sign-in</Nav.Link>
              <Nav.Link><i className="fas fa-user-plus"></i>Sign-up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
