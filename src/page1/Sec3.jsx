import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
 
import s3img1 from './images/sec3img1-min.jpeg';
import s3img2 from './images/sec3img2-min.jpg';
import s3img3 from './images/sec3img3-min.jpg';

import s3icon1 from './images/sec3icon1-min.jpg'

import { HiOutlineArrowRight } from "@react-icons/all-files/hi/HiOutlineArrowRight";

function Sec3() {
  return (
    <div>
      <Container>
      <Row >
        
        <Col className='sec3bigimg pb-2' >
        <img className='sec3heightaj h-100 mt-2' src={s3img1} alt="img"/>
        <img className='sec3icon ' src={s3icon1} alt="" /> 

        </Col>

        <Col classNams3img1e='sec3small '> 
       
        <img className='sec3smallimg w-75 mt-2 mb-2 ' src={s3img2} alt="img" />
       
        <img className='sec3smallimg w-75 mt-3   ' src={s3img3} alt="img" />
        
        </Col>
     
        <Col className='sec3content '  >
        <p className='fs-5'  > <em>-</em><em>-</em><em>-</em><em>-</em><em>-</em><em>-</em><em>-</em><em>-</em><em>-</em><em>-</em><em>-</em><em>-</em><em>-</em><em>-</em><em>-</em><em>-</em><em>-</em><em>-</em><em>-</em><em>-</em>  ABOUT</p>
        <h1 className='fs-1'> <span style={{color:`#FF8C00`}}>Who</span>  We Are ?</h1>
        <p className='fs-5 pt-4'>Welcom to our education website, where we belive that learning is a lifelong journey that should be accessible to all</p>
        <p className='fs-5 pt-2'>Our mission is to provide high-quality education resources and support to individuals of all ages,backgroungs, and abilities.</p>
        {/* <button className="rounded-pill hover-1 ps-5 pe-5 pt-2 pb-2 mt-5">know more  </button>  */}
        
        <button className="sec3btnmoving mt-5">Know More
        <span className='btnsec3span'>
          <HiOutlineArrowRight/>
        </span>
      </button>

        </Col>
      </Row>
   
    </Container>
    </div>
  )
}

export default Sec3





    
