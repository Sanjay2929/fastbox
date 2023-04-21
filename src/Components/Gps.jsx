import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import map from '../Assets/img/png/map.webp'
import Greenbutton from './Greenbutton'

const Gps = () => {
  return (
    <div className='position-relative overflow-hidden mt_100 mb-5'>
        <Container/>
        <Row/>
        <Col/>
        <Container className='containerxxxl '>
            <Row>
                <Col lg={7} className=' py-5'>
                        <p className='ff_Anybody fw_700 fsize_48 clr_dark_green'>Follow your shipment via GPS</p>
                        <p className='ff_Read_Hat_text fw_400 fsize_22 clr_light_gray w_810 pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate..</p>
                        <div className='mt-5'>
                            <Greenbutton Green_text="Learn More"/>
                        </div>
                </Col>
                <Col lg={5}>
                    <div className='position_absolute h-100 w_50  top-0'>
                        <img src={map} alt="GPS" className='w-100 h-100' />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Gps