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
        <Container className='containerxxxl ' id='locations'>
            <div>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49.5937 51.0938L42.3437 71.0313C42.1661 71.5097 41.8464 71.9224 41.4274 72.2137C41.0084 72.5051 40.5103 72.6613 40 72.6613C39.4896 72.6613 38.9915 72.5051 38.5725 72.2137C38.1536 71.9224 37.8338 71.5097 37.6562 71.0313L30.4062 51.0938C30.2796 50.7501 30.0799 50.438 29.8209 50.1791C29.562 49.9201 29.2499 49.7204 28.9062 49.5938L8.96872 42.3438C8.49028 42.1662 8.07765 41.8464 7.78626 41.4275C7.49487 41.0085 7.33868 40.5104 7.33868 40C7.33868 39.4897 7.49487 38.9916 7.78626 38.5726C8.07765 38.1536 8.49028 37.8339 8.96872 37.6563L28.9062 30.4063C29.2499 30.2797 29.562 30.08 29.8209 29.821C30.0799 29.562 30.2796 29.2499 30.4062 28.9063L37.6562 8.96878C37.8338 8.49034 38.1536 8.07771 38.5725 7.78632C38.9915 7.49493 39.4896 7.33875 40 7.33875C40.5103 7.33875 41.0084 7.49493 41.4274 7.78632C41.8464 8.07771 42.1661 8.49034 42.3437 8.96878L49.5937 28.9063C49.7203 29.2499 49.92 29.562 50.179 29.821C50.438 30.08 50.7501 30.2797 51.0937 30.4063L71.0312 37.6563C71.5097 37.8339 71.9223 38.1536 72.2137 38.5726C72.5051 38.9916 72.6613 39.4897 72.6613 40C72.6613 40.5104 72.5051 41.0085 72.2137 41.4275C71.9223 41.8464 71.5097 42.1662 71.0312 42.3438L51.0937 49.5938C50.7501 49.7204 50.438 49.9201 50.179 50.1791C49.92 50.438 49.7203 50.7501 49.5937 51.0938V51.0938Z" stroke="#6FCF97" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <Row>
                <Col lg={7} className=' py-5'>
                        <p className='ff_Anybody fw_700 fsize_48 clr_dark_green'>Follow your shipment via GPS</p>
                        <p className='ff_Read_Hat_text fw_400 fsize_22 clr_light_gray w_810 pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate..</p>
                        <div className='mt-5'>
                            <Greenbutton Green_text="Learn More"/>
                        </div>
                </Col>
                <Col lg={5}>
                    <div className='position_absolute h-100 w_50  top-0 mt-5 mt-lg-0'>
                        <img src={map} alt="GPS" className='w-100 h-100' />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Gps