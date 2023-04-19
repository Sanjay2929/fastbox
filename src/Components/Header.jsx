import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Mencycle from "../Assets/img/png/cyclemen.png";
import Navbar from "./Navbar";
import green_bg_spot from "../Assets/img/png/hero_bg_green_spot.png";
import greenstar from '../Assets/img/png/green_star.png'
import orangestar from "../Assets/img/png/orange_star.png";


const Header = () => {
  return (
    <>
      <header className=" d-flex min-vh-100  flex-column overflow_x_hidden bg_hero">
        <Navbar />
        <div className=" position-absolute top-0 Z_index_negative3 d-md-block d-none ">
          <img src={green_bg_spot} alt="img" />
        </div>
        <section className="d-flex flex-column flex-grow-1 justify-content-center position-relative ">
          <div className=" cyclist">
            <img className=" Width_100" src={Mencycle} alt="delivery boy" />
          </div>
          <div className=" position-absolute greenstar">
            <img src={greenstar} alt="star" />
          </div>
          <div className="position-absolute orangestar">
            <img src={orangestar} alt="star" />
          </div>
          <Container className=" py-5 position-relative z-1">
            <Row className="py-lg-5">
              <Col lg={8} className="pb-5">
                <h2 className="fsize_90 fw_700 ff_Anybody clr_dark_green">
                  Largest and reliable courier service{" "}
                </h2>
                <h2 className="fsize_80 fw_700 ff_Anybody clr_dark_green pb-5">
                  in your city
                </h2>
                <p className="fw_400 fsize_25 clr_light_gray ff_Read_Hat_text pb-5 mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate cillum
                  dolore
                  <span className="d-sm-block">eu fugiat nulla pariatur.</span>
                </p>
                <div className="mt-3 border-0 max_w661 d-flex justify-content-between bg_extra_lightGreen border_radious10 flex-column flex-sm-row">
                  <input
                    className=" padding_33_38 border-0  w-75 bg-transparent tracking_number fsize_20 fw_400 clr_light_gray ff_Read_Hat_text"
                    type="number "
                    placeholder="Enter Tracking Number"
                  />
                  <Button className="fw_500 fsize_30 ff_Poppins text-white padding_30_65 bg_green border-0  border_radious10">
                    Check
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </header>
    </>
  );
};

export default Header;
