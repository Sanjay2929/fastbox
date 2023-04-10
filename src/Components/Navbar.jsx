import React from "react";
import { Container, Nav } from "react-bootstrap";
import logo from "../Assets/img/png/logo.png";
import fastbox from "../Assets/img/png/Fast-box.png";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <Container>
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <img src={logo} alt="logo" />
              <img src={fastbox} alt="fastbox" />
            </div>
            <ul className="d-flex">
              <li>Home</li>
              <li>Tracking</li>
              <li>Shipping</li>
              <li>Locations</li>
              <li>Support</li>
            </ul>
              <ul className="d-flex">
                <li>Signin</li>
                <li>Register</li>
              </ul>
          </div>
        </Container>
      </Nav>
    </div>
  );
};

export default Navbar;
