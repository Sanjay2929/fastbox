import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import van from "../Assets/img/png/fastbox_van.png";
import Greenbutton from "./Greenbutton"

const Network = () => {
  return (
    <>
      <section className="py-4 my-2 position-relative">
        <div className="van_bg position-absolute top-0 start-0 "></div>
        <Container className="py-5">
          <Row className=" align-items-center py-5 justify-content-between">
            <Col lg={5}>
              <img
                className=" position-relative z_index_1 w-100 van_fastbox"
                src={van}
                alt="van"
              />
            </Col>
            <Col lg={6}>
              <h3 className="fsize_48 ff_Anybody clr_dark_green fw_700 pb-5 mb-0">
                We Have the largest Network
              </h3>
              <p className="fsize_22 clr_light_gray ff_Read_Hat_text fw_400   mb-0">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="pt-5">
                <Greenbutton />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Network;
