import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import sec5icon1 from './images/sec5icon1-min.png'
import sec5icon2 from './images/sec5icon2-min.jpg'
import sec5icon3 from './images/sec5icon3-min.jpg'


function Sec5() {
  return (
    <div className='sec5container pt-5 pb-5'>
        <Container fluid>
      <Row>
        <Col>
        <div className='sec5text text-center w-50 m-auto'>
            <h1 className='fs-1 b fwb '> All-In-One For <span className='o'>Your Child</span></h1>
            <p>Guide you towards success and helping you reach your full potential</p>
        </div></Col>
      </Row>
    </Container>

    <Container className='w-75 text-center  sec5cardcontainer'>

      <Row className='sec5card pt-5'>
        <Col className='sec5col pb-5'>  
        <img src={sec5icon1} alt="img"/>
        <h2 className='b'>Timely updating on your child</h2>
        <p className='pt-3'>Our mentors keep you updated on the progress made by our child so far.</p>
        </Col>
        <Col className='sec5col '>  
        <img src={sec5icon2} alt="img"/>
        <h2 className='b'>Timely updating on your child</h2>
        <p className='pt-3'>Our mentors keep you updated on the progress made by our child so far.</p>
        </Col>
        <Col className='sec5col '>  
        <img src={sec5icon3} alt="img" />
        <h2 className='b'>Timely updating on your child</h2>
        <p className='pt-3'>Our mentors keep you updated on the progress made by our child so far.</p>
        </Col>
      </Row>
    </Container>

        
      
    </div>
  )
}

export default Sec5
