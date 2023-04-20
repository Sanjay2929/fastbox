import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import logo from "../Assets/img/png/logo.png";
import fastbox from "../Assets/img/png/Fast-box.png";
import Greenbutton from "./Greenbutton";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GiCrossedBones } from "react-icons/gi";

const Navbar = () => {
  const [first, setfirst] = useState(true);
  function showUl() {
    setfirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden")
  }
  else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <Nav>
        <Container className=" pt-4 ">
          <div className="d-flex  align-items-center pt-1 justify-content-between">
            <div className="d-flex align-items-center">
              <img src={logo} alt="logo" />
              <img src={fastbox} alt="fastbox" />
            </div>
            <div className=" d-lg-none z_11">
              <h2 onClick={showUl}>
                {first ? <HiOutlineMenuAlt3 /> : <GiCrossedBones />}
              </h2>
            </div>
            <div
              className={
                first
                  ? "d-flex align-items-center w-100 mob_view"
                  : " d-flex align-items-center w-100 mob_view nav_left0"
              }
            >
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
                  <Greenbutton Green_text="Register" />
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
