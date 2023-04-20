import React, { useState } from 'react'
import { Container, Nav } from 'react-bootstrap';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Reactnavbar = () => {
  const [first, setfirst] = useState(true)
  function clickshow(){
    setfirst(!first)
  }

  if(!first){
    document.body.classList.add('overflow-hidden')
  }else{
    document.body.classList.remove('overflow-hidden')
  }
  return (
    <div className='bg-info'> 
      <Container/>
      <Nav/>

      <Container>
        <Nav>
          <div className='d-flex justify-content-between w-100'>
            <p>logo</p>            
            <ul className={first ? 'd-flex gap-5 nav_show':'nav_show left_0'}>
              <li><a href="">HOme</a></li>
              <li><a href="">HOme</a></li>
              <li><a href="">HOme</a></li>
              <li><a href="">HOme</a></li>
              <li><a href="">HOme</a></li>
            </ul>
            <div className='d-md-none z_index_2'>
              <h3 onClick={clickshow}><HiOutlineMenuAlt3/></h3>
            </div>
          </div>
          <div className=' min-vh-100'></div>
          <div className=' min-vh-100'>adsfkj</div>
          <div className=' min-vh-100'>kdkfa</div>
        </Nav>
      </Container>
     </div>
  )
}

export default Reactnavbar 