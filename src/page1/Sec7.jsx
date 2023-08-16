import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaVimeoV } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';



function Sec7() {
  return (
    <div className='sec7backgroundcolor'>
    <div className='sec7container'>
        <Container>
      <Row className='sec7row1'>
      <Col className='sec7row1col1'><h1>Subscribe Newsletter</h1></Col>
        <Col className='sec7row1col2'>
         <label className='sec7lable'>
          <input type="email" placeholder='Enter your email'  className='sec7input'/>
          <button className='sec7button'>Subscribe Now</button>
         </label> 
         </Col> 
      
      </Row>
  
      <Row  className='sec7row2'>
        <Col>
        <Row  className='sec7row2row1'>
        <Col><button className='sec7row2col1button'>About Us</button> </Col> 
        <Col> <button className='sec7row2col1button'>Discover</button></Col> 
        <Col> <button className='sec7row2col1button'>Explore</button></Col> 
        <Col> <button className='sec7row2col1button'>Books</button></Col> 
        <Col> </Col>
        </Row>
        </Col>/
         <Col className='sec7row2col2'>  <a href="https://www.facebook.com/" target='blank'><FaFacebookSquare/></a> 
         <a href="https://twitter.com/i/flow/login?lang=en" target='blank'><FaTwitter/></a> 
         <a href="https://vimeo.com/log_in" target='blank'><FaVimeoV/></a>
          <a href="https://www.youtube.com/" target='blank'><FaYoutube/></a></Col>
      </Row>
      <hr />
      <Row className='sec7row3'>
        <Col className='sec7row3col1'><a href="/copyrights">&#169; 2023 Vishesh Patel. All rights reserved. </a></Col>
      
         <Col className='sec7row3col2'>
          <Row><Col></Col> <Col><a href="/terms">Terms of service </a></Col><Col><a href="/privacy"> Privacy Policy</a></Col> </Row> 
          
          </Col>
      </Row>
    </Container>

      
    </div>
    </div>
  )
}

export default Sec7
