import React from "react";
import { Container, Nav } from "react-bootstrap";
import logo from "../Assets/img/png/logo.png";
import fastbox from "../Assets/img/png/Fast-box.png";
import Greenbutton from "./Greenbutton";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <Container className="containerxxxl">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src={logo} alt="logo" />
              <img src={fastbox} alt="fastbox" />
            </div>
            <ul className="d-flex align-items-center gap_71">
              <li>
                <a className="fsize_20 fw_400 clr_gray" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="fsize_20 fw_400 clr_gray" href="#">
                  Tracking
                </a>
              </li>
              <li>
                <a className="fsize_20 fw_400 clr_gray" href="#">
                  Shipping
                </a>
              </li>
              <li>
                <a className="fsize_20 fw_400 clr_gray" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a className="fsize_20 fw_400 clr_gray" href="#">
                  Support
                </a>
              </li>
            </ul>
            <ul className="d-flex align-items-center gap_38">
              <li>
                <a className="fsize_20 fw_400 clr_gray" href="#">
                  Signin
                </a>
              </li>
              <li>
                <Greenbutton />
              </li>
            </ul>
          </div>
        </Container>
      </Nav>
    </div>
  );
};

export default Navbar;
