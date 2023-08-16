import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import sec6img1 from './images/sec6img1-min.png'
import sec6img2 from './images/sec6img2-min.png'
import sec6img3 from './images/sec6img3-min.jpg'
import sec6img4 from './images/sec6img4-min.jpg'

function Sec6() {
  return (
    <div>
     <Container fluid className='sec6container1'>
      <Row>
        <Col>
        <div className='sec6text text-center w-50 m-auto'>
            <h1 className='o fwb '>Latest  <span className='b'>News and Resources</span></h1>
            <p className='fs-5'>Unlock your learning potential with our educational insights and expertise.</p>
           
        </div></Col>
      </Row>
    </Container>

    <Container className='sec6con'>
      <Row>
        <Col xs={12} md={5} className='sec6leftcon'>
        <img src={sec6img1} alt="img"/>
        <p className='fwb news ft-5'>NEWS</p> 
        <br />
        <h3> 10 Tips for Effective Time Management for Students.</h3>
        <br />
        <p className='fs-5'>Learn how to balance your academic, social, and personal life with these practical time management strategies...</p>
        <br />
        <a href="https://www.behance.net/gallery/168931883/Education-Website" className='fs-4' style={{color:`grey`}}>Read more</a>
        </Col>
        <Col xs={12} md={7} className='sec6rightside'>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={5} >
                <div className='sec6smlimg'>
                <img src={sec6img2} alt="" />
                <p className=' news'>PRESS RELEASE</p> 
                </div>
                </Col>
                <Col  className='sec6hp'>
                <br />
                <h5>How to Build Strong Relationships with Students as a Teacher</h5>
                <p>his post could explore the many benefits of learning a second language, such as improved...</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
            <Row>
                <Col xs={5} >
                <div className='sec6smlimg'>
                <img src={sec6img3} alt="img" />
                <p className=' news'>NEWS</p> 
                </div>
                </Col>
                <Col className='sec6hp'>
                <br />
               <h5>The Importance of STEM Education in Today's World</h5>
                <p>This post could discuss the growing importance of STEM....</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
            <Row>
                <Col xs={5} >
                <div className='sec6smlimg'>
                <img src={sec6img4} alt="" />
                <p className=' news'>NEWS</p> 
                </div>
                </Col>
                <Col className='sec6hp'>
                <br />
                <h5>The Role of Technology in Modern Education</h5>
                <p>This post could provide practical tips on how to study effectively for exams......</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
      
    </div>
  )
}

export default Sec6

