import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import logo from '../assets/logo192.png';
import styles from './styles/NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar className={styles.NavBar} fixed="top" expand="sm">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} width="50px" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* ml-auto stands for margin left auto, which will push the component to the left
                mr-auto stands for margin right auto, whcih will push the component tot the right
                text-left will display the items on the left-hand side if the nav is small and collapsed,
                set onece it is exapnded with text-left it will appear on the lef-hand side*/}
            <Nav className="ml-auto text-left">
              <NavLink to="/" exact className={styles.NavLink} activeClassName={styles.Active}><i className="fas fa-home"></i>Home</NavLink>
              <NavLink to="/signin" exact className={styles.NavLink} activeClassName={styles.Active}><i className="fas fa-sign-in-alt"></i>Sign-in</NavLink>
              <NavLink to="/signup" exact className={styles.NavLink} activeClassName={styles.Active}><i className="fas fa-user-plus"></i>Sign-up</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
