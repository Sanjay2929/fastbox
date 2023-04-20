import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import calender from "../Assets/img/png/calender.png";
import delivery_plan from "../Assets/img/png/delivery_plan.png";
import packing_box from "../Assets/img/png/packing_box.png";
import calentransport_truckder from "../Assets/img/png/transport_truck.png";
import Slider from "react-slick";


  

const FastBoxWork = () => {
  var sliderfast = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-sm-5">
        <Container className="pt-4">
          <Row className=" justify-content-center py-sm-5 pt-4 align-items-center">
            <Col xl={5}>
              <h3 className="fsize_48 ff_Anybody clr_dark_green fw_700 mb-0">
                How Fast box works
              </h3>
            </Col>
            <Col xl={5}>
              <p className="fsize_22 clr_light_gray ff_Read_Hat_text fw_400 mb-0">
                Duis aute irure dolor in reprehenderit in voluptate cillum
                dolore eu fugiat nulla pariatur.
              </p>
            </Col>
          </Row>
          <div className="py-sm-5 my-3  position-relative white_box">
            <Slider {...sliderfast} className=" my-5 slider_box">
              <div className="d-flex flex-column align-items-center process_work  position-relative px-xxl-5 px-4">
                <div className=" d-flex justify-content-center align-items-center bg_green bx_size_115 border-radious25 mb-3">
                  {" "}
                  <img src={calender} alt="calender" />
                </div>
                <h4 className="ff_Poppins fsize_16 fw_600 clr_light_gray pt-4 pb-5">
                  Step 1
                </h4>
                <h3 className="ff_Anybody fw_700 fsize_22 clr_dark_green pb-4">
                  Booking{" "}
                </h3>
                <p className="ff_Read_Hat_text fsize_18 fw_400 clr_light_gray text-center mt-2">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <div className="d-flex flex-column align-items-center process_work position-relative px-xxl-5 px-4">
                <div className=" d-flex justify-content-center align-items-center bg_green bx_size_115 border-radious25 mb-3">
                  {" "}
                  <img src={packing_box} alt="packing_box" />
                </div>
                <h4 className="ff_Poppins fsize_16 fw_600 clr_light_gray pt-4 pb-5">
                  Step 2
                </h4>
                <h3 className="ff_Anybody fw_700 fsize_22 clr_dark_green pb-4">
                  Packing{" "}
                </h3>
                <p className="ff_Read_Hat_text fsize_18 fw_400 clr_light_gray text-center mt-2">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <div className="d-flex flex-column align-items-center process_work position-relative px-xxl-5 px-4">
                <div className=" d-flex justify-content-center align-items-center bg_green bx_size_115 border-radious25 mb-3">
                  {" "}
                  <img
                    src={calentransport_truckder}
                    alt="calentransport_truckder"
                  />
                </div>
                <h4 className="ff_Poppins fsize_16 fw_600 clr_light_gray pt-4 pb-5">
                  Step 3
                </h4>
                <h3 className="ff_Anybody fw_700 fsize_22 clr_dark_green pb-4">
                  Transportation{" "}
                </h3>
                <p className="ff_Read_Hat_text fsize_18 fw_400 clr_light_gray text-center mt-2">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <div className="d-flex flex-column align-items-center process_work position-relative px-xxl-5 px-4">
                <div className=" d-flex justify-content-center align-items-center bg_green bx_size_115 border-radious25 mb-3">
                  {" "}
                  <img src={delivery_plan} alt="delivery_plan" />
                </div>
                <h4 className="ff_Poppins fsize_16 fw_600 clr_light_gray pt-4 pb-5">
                  Step 4
                </h4>
                <h3 className="ff_Anybody fw_700 fsize_22 clr_dark_green pb-4">
                  Delivery{" "}
                </h3>
                <p className="ff_Read_Hat_text fsize_18 fw_400 clr_light_gray text-center mt-2">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </Slider>
          </div>
          <div className="white_box"> </div>
        </Container>
      </section>
    </>
  );
};

  export default FastBoxWork;
