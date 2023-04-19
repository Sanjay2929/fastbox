import React from "react";
import { Container, Nav } from "react-bootstrap";
import logo from "../Assets/img/png/logo.png";
import fastbox from "../Assets/img/png/Fast-box.png";
import Greenbutton from "./Greenbutton";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Container className=" pt-4 ">
          <div className="d-flex  align-items-center pt-1 justify-content-between">
            <div className="d-flex align-items-center">
              <img src={logo} alt="logo" />
              <img src={fastbox} alt="fastbox" />
            </div>
            <input type="checkbox" className="d-none" id="check" />
            <label htmlFor="check" className=" d-lg-none d-flex menuIcon">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div className="d-flex align-items-center w-100 mob_view nav_left0">
              <ul className="d-flex align-items-center gap_71 mb-0 w-100 justify-content-center sm_view">
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
              <ul className="d-flex align-items-center gap_38 mb-0 sm_view">
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
          </div>
        </Container>
      </Nav>
    </>
  );
};

export default Navbar;
