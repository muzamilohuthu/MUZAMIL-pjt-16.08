import { CSSTransition } from 'react-transition-group';

import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaLongArrowAltRight } from 'react-icons/fa';

import { NavLink } from 'react-router-dom'; 

import aboutusimg1 from  '../page1/images/aboutusimg2-min.png'
import aboutusimg2 from  '../page1/images/aboutusimg1-min.png'

import Sec7 from '../page1/Sec7';

function Aboutus() {
  const [isShown, setIsShown] = React.useState(false);

  React.useEffect(() => {
    setIsShown(true);
  }, []);

  return (
    <div style={{ paddingTop: `120px` }}>
      <Container className="aboutuscontainer">
        <Row>
          <Col>
            <CSSTransition
              in={isShown}
              timeout={1000}
              classNames="fade"
              unmountOnExit
            >
              <h1 className="b">Creating Technical leaders and offering students a Holistic Learning Experience.</h1>
            </CSSTransition>
            <CSSTransition
              in={isShown}
              timeout={2000}
              classNames="fade"
              unmountOnExit
            >
              <p>Settling as the No.1 IT Training online course is not a pride for us. Sowing thorough and deep IT learning to our Aspirants and cherish ourselves by their Master Growth.</p>
            </CSSTransition>

            <div className="btnsubmit aboutusbtn">
              <CSSTransition
                in={isShown}
                timeout={3000}
                classNames="fade"
                unmountOnExit
              >
                <NavLink to="/contact">
                  <button className="">
                    Enquiry Now <FaLongArrowAltRight />
                  </button>
                </NavLink>
              </CSSTransition>
            </div>
          </Col>
          <Col>
            <CSSTransition
              in={isShown}
              timeout={1000}
              classNames="image"
              unmountOnExit
            >
              <img src={aboutusimg1} alt="aboutus img" className="aboutusimg1" />
            </CSSTransition>
          </Col>
        </Row>
      </Container>

      <Container className='aboutuscontainer2 '>
        
        <h1 className='b text-center p-5'><span className='o' >about</span> Educt.</h1>
      <Row>
        <Col>
        <img src={aboutusimg2} alt="aboutus img" className="aboutusimg1" />
        </Col>
        <Col>
        <p>Educt , a true leader in Training and Software 
          Development since 2008, serves its dedicated commitment for
           the flourishing student community. We started this IT training
            institute in Coimbatore to fulfill students’ developing careers. We now feel we’ve
             touched that milestone placing 2000+ students in IT as software developers. 
             This is possible only because of our trusted students and passionate trainers behind us.
             </p>
             <p>Our Trainers are well-qualified and experienced from the IT industry 
              training the respective courses practically to students. Educt 
              has kept the trainers and tutors accessible at any time by the students. 
              Students can experience the learning methodology and online classes as per 
              their flexible & available timings. Our well-trained mentors are well
               connected with HR’s in relevant IT companies and they arrange for placement
                opportunities on behalf of the training campus itself. This makes our Educt 
                 the best software training institute in Coimbatore.</p>
        </Col>
      </Row>
  
    </Container>
    <div className='whitespace'></div>
    <div><Sec7/></div>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1837480599506!2d77.0095252751492!3d11.024836489139453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858d6984f4bb7%3A0x4eb0f5060c1a4719!2sNschool%20Academy!5e0!3m2!1sen!2sin!4v1690367627326!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}


export default Aboutus