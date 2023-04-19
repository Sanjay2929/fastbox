import React from "react";
import { Container } from "react-bootstrap";
import airtable from "../Assets/img/svg/airtable.svg";
import sketch from "../Assets/img/svg/sketch.svg";
import dribble from "../Assets/img/svg/dribble.svg";
import slack from "../Assets/img/svg/slack.svg";
import livechat from "../Assets/img/svg/livechat.svg";
import gitlab from "../Assets/img/svg/gitlab.svg";
import Slider from "react-slick";

const Websites = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1500,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
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
      <div className=" bg_lightGreen">
        <Container className=" py-4 mb-5">
          <Slider {...settings}>
            <div className="py-5 px-5">
              <img className="w-100" src={airtable} alt="img" />
            </div>
            <div className="py-5 px-5">
              <img className="w-100" src={sketch} alt="img" />
            </div>
            <div className="py-5 px-5">
              <img className="w-100" src={dribble} alt="img" />
            </div>
            <div className="py-5 px-5">
              <img className="w-100" src={slack} alt="img" />
            </div>
            <div className="py-5 px-5">
              <img className="w-100" src={livechat} alt="img" />
            </div>
            <div className="py-5 px-5">
              <img className="w-100" src={gitlab} alt="img" />
            </div>
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default Websites;
