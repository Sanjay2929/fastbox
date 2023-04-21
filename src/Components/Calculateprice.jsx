import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import calculatemen from '../Assets/img/png/calculatemen.png'
import Greenbutton from './Greenbutton'


const Calculateprice = () => {
  return (
    <div>
        <Container/>
        <Row/>
        <Col/>
        <Container className='containerxxxl my-5 pt-5'>
            <Row className='bg_lightGreen bradius_46 p-sm-5 pb-3 px-3 position-relative'>
                <Col lg={6} className='pe-sm-5 pt-3'>
                    <p className='ff_Anybody fw_700 fsize_48 clr_almost_black'>Calculate your price</p>
                    <p className='ff_Read_Hat_text fw_400 fsize_22 clr_light_gray w_492'>Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.</p>
                    <div className='position_absolute bottom-0'>
                        <img className='w_75' src={calculatemen} alt="calculatmen" />
                    </div>
                </Col>
                <Col lg={6} className='bg_white bradius_46 p-sm-5 p-3'>
                    <div>
                        <span className='cal_icon_box'>
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.975 9.52233H26.125V7.125H23.75V9.52233H14.25V7.125H11.875V9.52233H9.06347C8.0142 9.52233 7.16348 10.3731 7.16348 11.4223V28.975C7.16348 30.0243 8.0142 30.875 9.06347 30.875H28.975C30.0243 30.875 30.875 30.0243 30.875 28.975V11.4223C30.875 10.3731 30.0243 9.52233 28.975 9.52233ZM28.5 28.5H9.5V16.625H28.5V28.5ZM28.5 14.25H9.5V11.875H28.5V14.25Z" fill="white"/>
                                <path d="M20.425 19H18.05V21.375H20.425V19Z" fill="white"/>
                                <path d="M25.175 19H22.8V21.375H25.175V19Z" fill="white"/>
                                <path d="M20.425 23.75H18.05V26.125H20.425V23.75Z" fill="white"/>
                                <path d="M15.675 23.75H13.3V26.125H15.675V23.75Z" fill="white"/>
                            </svg>
                        </span>
                        <span className='ff_Anybody fw_700 fsize_22 clr_almost_black ps-4'>Booking Date</span>
                        <div className='d-flex justify-content-between pt-4 border-bottom pb-2'>
                            <input type='text' placeholder='Enter Booking date' className='ff_Read_Hat_text fw_500 fsize_18 clr_light_gray border-0 outline_none'/>
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.975 2.52233H19.125V0.125H16.75V2.52233H7.25V0.125H4.875V2.52233H2.06347C1.0142 2.52233 0.163475 3.37305 0.163475 4.42233V21.975C0.163475 23.0243 1.0142 23.875 2.06347 23.875H21.975C23.0243 23.875 23.875 23.0243 23.875 21.975V4.42233C23.875 3.37305 23.0243 2.52233 21.975 2.52233ZM21.5 21.5H2.5V9.625H21.5V21.5ZM21.5 7.25H2.5V4.875H21.5V7.25Z" fill="white"/>
                                    <path d="M13.425 12H11.05V14.375H13.425V12Z" fill="white"/>
                                    <path d="M18.175 12H15.8V14.375H18.175V12Z" fill="white"/>
                                    <path d="M13.425 16.75H11.05V19.125H13.425V16.75Z" fill="white"/>
                                    <path d="M8.675 16.75H6.3V19.125H8.675V16.75Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <span className='cal_icon_box'>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 5.5L22.875 5.375C21.875 4.375 20.375 3.75 19 3.75H11C9.625 3.75 8.25 4.375 7.125 5.375L7 5.5L4.875 8.5C4.125 9.625 3.75 10.875 3.75 12.125V21.25C3.75 24 6 26.25 8.75 26.25H21.25C24 26.25 26.25 24 26.25 21.25V12.125C26.25 10.875 25.875 9.625 25.125 8.5L23 5.5ZM6.875 10L8.875 7.125C9.5 6.5 10.25 6.25 11 6.25H18.875C19.625 6.25 20.375 6.5 21 7.125L23.125 10H17.875H12.125H6.875ZM16.625 12.5V15.625L15.5 15.125C15.375 15 15.125 15 15 15C14.875 15 14.625 15 14.5 15.125L13.375 15.625V12.5H16.625ZM23.75 21.25C23.75 22.625 22.625 23.75 21.25 23.75H8.75C7.375 23.75 6.25 22.625 6.25 21.25V12.5H10.875V17.5C10.875 17.875 11.125 18.375 11.5 18.5C11.875 18.75 12.25 18.75 12.625 18.625L15 17.625L17.375 18.625C17.5 18.75 17.75 18.75 17.875 18.75C18.125 18.75 18.375 18.625 18.5 18.5C18.875 18.25 19.125 17.875 19.125 17.5V12.5H23.75V21.25Z" fill="white"/>
                        </svg>

                        </span>
                        <span className='ff_Anybody fw_700 fsize_22 clr_almost_black ps-4'>Type of Parcel</span>
                        <div className='pt-4 border-bottom pb-2'>
                            <select name="Parcel type" className='w-100 ff_Read_Hat_text fw_500 fsize_18 clr_light_gray border-0 outline_none'>
                                <option value="select parcel type">Select Parcel type</option>
                                <option value="Book">Book</option>
                                <option value="Phone">Phone</option>
                                <option value="Pen">Pen</option>
                            </select>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <span className='cal_icon_box'>
                            <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 29.0625C11.6084 29.0591 11.2219 28.9739 10.8651 28.8125C10.5083 28.6511 10.1892 28.4169 9.92813 28.125C6.50625 24.375 0.750003 17.2406 0.750003 12.525C0.70741 9.49719 1.86824 6.57625 3.97757 4.40364C6.08689 2.23104 8.97225 0.984398 12 0.9375C15.0278 0.984398 17.9131 2.23104 20.0224 4.40364C22.1318 6.57625 23.2926 9.49719 23.25 12.525C23.25 17.2125 17.4938 24.3281 14.0719 28.1344C13.81 28.4246 13.4905 28.657 13.1337 28.8168C12.777 28.9766 12.3909 29.0603 12 29.0625ZM12 2.8125C9.47032 2.86179 7.06329 3.91163 5.30611 5.73207C3.54892 7.55252 2.58483 9.99516 2.625 12.525C2.625 15.4688 5.87813 20.8313 11.325 26.8781C11.4125 26.9689 11.5173 27.041 11.6333 27.0903C11.7493 27.1396 11.874 27.165 12 27.165C12.126 27.165 12.2507 27.1396 12.3667 27.0903C12.4827 27.041 12.5875 26.9689 12.675 26.8781C18.1219 20.8313 21.375 15.4688 21.375 12.525C21.4152 9.99516 20.4511 7.55252 18.6939 5.73207C16.9367 3.91163 14.5297 2.86179 12 2.8125Z" fill="white"/>
                                <path d="M12 17.8125C10.8875 17.8125 9.79995 17.4826 8.87492 16.8645C7.94989 16.2464 7.22892 15.3679 6.80318 14.3401C6.37744 13.3123 6.26604 12.1813 6.48309 11.0901C6.70013 9.99898 7.23586 8.9967 8.02253 8.21003C8.8092 7.42336 9.81148 6.88763 10.9026 6.67059C11.9938 6.45354 13.1248 6.56494 14.1526 6.99068C15.1804 7.41642 16.0589 8.13739 16.677 9.06242C17.2951 9.98745 17.625 11.075 17.625 12.1875C17.625 13.6793 17.0324 15.1101 15.9775 16.165C14.9226 17.2199 13.4918 17.8125 12 17.8125ZM12 8.4375C11.2583 8.4375 10.5333 8.65744 9.91661 9.06949C9.29993 9.48155 8.81928 10.0672 8.53545 10.7524C8.25163 11.4377 8.17736 12.1917 8.32206 12.9191C8.46675 13.6465 8.8239 14.3147 9.34835 14.8392C9.8728 15.3636 10.541 15.7208 11.2684 15.8654C11.9958 16.0101 12.7498 15.9359 13.4351 15.6521C14.1203 15.3682 14.706 14.8876 15.118 14.2709C15.5301 13.6542 15.75 12.9292 15.75 12.1875C15.75 11.1929 15.3549 10.2391 14.6517 9.53585C13.9484 8.83259 12.9946 8.4375 12 8.4375Z" fill="white"/>
                            </svg>
                        </span>
                        <span className='ff_Anybody fw_700 fsize_22 clr_almost_black ps-4'>Destination</span>
                        <div className='pt-4 d-flex justify-content-between'>
                            <select name="To" className='w_45 ff_Read_Hat_text fw_500 fsize_18 clr_light_gray border-0 outline_none border-bottom pb-2'>
                                <option value="From">To</option>
                                <option value="Hisar">Hisar</option>
                                <option value="Agroha">Agroha</option>
                                <option value="Jind">Jind</option>
                            </select>
                            <select name="From" className='w_45 ff_Read_Hat_text fw_500 fsize_18 clr_light_gray border-0 outline_none border-bottom pb-2'>
                                <option value="From">From</option>
                                <option value="Hisar">Hisar</option>
                                <option value="Agroha">Agroha</option>
                                <option value="Jind">Jind</option>
                            </select>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <Greenbutton Green_text="Calculate"/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Calculateprice