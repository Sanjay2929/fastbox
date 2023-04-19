import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Ourspecialties() {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <div>
        <Container/>
        <Row/>
        <Col/>

        <Container className='containerxxxl mt-5'>
            <Row>
                <Col className='text-end'>
                    <p className='ff_Anybody fw_700 fsize_48 clr_dark_green '>Our Specialties</p>
                </Col>
                <Col>
                    <p className='ff_Read_Hat_text fw_400 fsize_22 clr_light_gray px-5 w_492 '>Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.</p>
                </Col>
            </Row>
            <Row className='pt-5 mt-3'>
                <Col lg={4}>
                    <div className='Our_Specialties_box d-flex gap-5'>
                        <div>
                            <p className='ff_Poppins fw_700 fsize_45 clr_c1e_green'>01</p>
                        </div>
                        <div>
                            <p className='ff_Anybody fw_700 fsize_22 clr_almost_black mb-2'>Easy to order</p>
                            <p className='ff_Read_Hat_text fw_400 fsize_18 clr_light_gray'>Stacks is a production-ready library of stackable content blocks built in React Native</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='Our_Specialties_box d-flex gap-5'>
                        <div>
                            <p className='ff_Poppins fw_700 fsize_45 clr_c1e_green'>02</p>
                        </div>
                        <div>
                            <p className='ff_Anybody fw_700 fsize_22 clr_almost_black mb-2'>Cash on delivery</p>
                            <p className='ff_Read_Hat_text fw_400 fsize_18 clr_light_gray'>Stacks is a production-ready library of stackable content blocks built in React Native</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='Our_Specialties_box d-flex gap-5'>
                        <div>
                            <p className='ff_Poppins fw_700 fsize_45 clr_c1e_green'>03</p>
                        </div>
                        <div>
                            <p className='ff_Anybody fw_700 fsize_22 clr_almost_black mb-2'>Live tracking</p>
                            <p className='ff_Read_Hat_text fw_400 fsize_18 clr_light_gray'>Stacks is a production-ready library of stackable content blocks built in React Native</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Ourspecialties