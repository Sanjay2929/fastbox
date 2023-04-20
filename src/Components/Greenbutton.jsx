import React from "react";
import { Button } from "react-bootstrap";

const Greenbutton = (props) => {
  return (
    <>
      <Button className="ff_Read_Hat_text fsize_20 fw_400 padding_10_27 bg_green border-0">
        {props.Green_text}
      </Button>
    </>
  );
};

export default Greenbutton;
