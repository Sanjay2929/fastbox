import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import adam from '../Assets/img/png/adam.png'
import sofia from '../Assets/img/png/sofia.png'
import marfile from '../Assets/img/png/marfile.png'

const Clients = () => {
  return (
    <div>
        <Container/>
        <Row/>
        <Col/>
        <Container className='containerxxxl pt-5' id='support'>
            <div className='text-center pt-5'>
                <p className='ff_Anybody fw_700 fsize_48 clr_dark_green'>What our Clients Say</p>
                <p  className='ff_Read_Hat_text fw_400 fsize_22 clr_light_gray pt-2'>Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <Row className='py-5'>
                <Col lg={4}>
                    <div className='d-flex gap-5 align-items-center clients_bg mt-3'>
                        <img src={adam} alt="Adam Sumit" />
                        <span  className='ff_Anybody fw_700 fsize_22 clr_almost_black'>
                            Adam Smith
                        </span>
                            <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2.11133L14 14.1113L2 26.1113" stroke="#3CBD96" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                    </div>
                    <div className='d-flex gap-5 align-items-center clients_bg mt-4'>
                        <img src={sofia} alt="Sofia Caralino" />
                        <span  className='ff_Anybody fw_700 fsize_22 clr_almost_black'>
                           Sofia Caralino
                        </span>
                        <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2.11133L14 14.1113L2 26.1113" stroke="#3CBD96" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='d-flex gap-5 align-items-center clients_bg mt-4'>
                        <img src={marfile} alt="Marfie Motcast" />
                        <span  className='ff_Anybody fw_700 fsize_22 clr_almost_black'>
                            Marfie Motcast
                        </span>
                        <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2.11133L14 14.1113L2 26.1113" stroke="#3CBD96" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </Col>
                <Col lg={8}>
                    <div className='mt-3 p-3 d-flex flex-column justify-content-center h-100 align-items-center clients_detalis_bg'>
                        <svg width="54" height="36" viewBox="0 0 54 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.875 0.611328C6.65454 0.611328 0.75 6.51587 0.75 13.7363V35.6113H22.625V13.7363H5.125C5.125 8.88281 9.02148 4.98633 13.875 4.98633V0.611328ZM44.5 0.611328C37.2795 0.611328 31.375 6.51587 31.375 13.7363V35.6113H53.25V13.7363H35.75C35.75 8.88281 39.6465 4.98633 44.5 4.98633V0.611328ZM5.125 18.1113H18.25V31.2363H5.125V18.1113ZM35.75 18.1113H48.875V31.2363H35.75V18.1113Z" fill="#5F8985"/>
                        </svg>
                        <p className='ff_Read_Hat_text fw_400 fsize_22 clr_light_gray pt-5 w_903'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p className='ff_Anybody fw_700 fsize_22 clr_dark_green pt-4'>Web Developer</p>
                        <div className='d-flex gap-2 pt-3'>
                            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 0.111328L19.5922 10.8216H31.2169L21.8123 17.4409L25.4046 28.1511L16 21.5318L6.59544 28.1511L10.1877 17.4409L0.783095 10.8216H12.4078L16 0.111328Z" fill="#FFC859"/>
                            </svg>
                            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 0.111328L19.5922 10.8216H31.2169L21.8123 17.4409L25.4046 28.1511L16 21.5318L6.59544 28.1511L10.1877 17.4409L0.783095 10.8216H12.4078L16 0.111328Z" fill="#FFC859"/>
                            </svg>
                            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 0.111328L19.5922 10.8216H31.2169L21.8123 17.4409L25.4046 28.1511L16 21.5318L6.59544 28.1511L10.1877 17.4409L0.783095 10.8216H12.4078L16 0.111328Z" fill="#FFC859"/>
                            </svg>
                            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 0.111328L19.5922 10.8216H31.2169L21.8123 17.4409L25.4046 28.1511L16 21.5318L6.59544 28.1511L10.1877 17.4409L0.783095 10.8216H12.4078L16 0.111328Z" fill="#FFC859"/>
                            </svg>
                            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 0.111328L19.5922 10.8216H31.2169L21.8123 17.4409L25.4046 28.1511L16 21.5318L6.59544 28.1511L10.1877 17.4409L0.783095 10.8216H12.4078L16 0.111328Z" fill="#FFC859"/>
                            </svg>
                        </div>
                    </div>
                </Col>
            </Row>          
        </Container>
    </div>
  )
}

export default Clients