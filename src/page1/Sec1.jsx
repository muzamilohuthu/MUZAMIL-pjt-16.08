import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import YouTube from 'react-youtube';
import { FaPlay } from '@react-icons/all-files/fa/FaPlay';

import sec1rightimg from './images/sec1rightsideimg-min.jpeg';

import sec1icon1 from './images/sec1icon1-min.png';
import sec1icon2 from './images/sec1icon2-min.png';
import sec1icon3 from './images/sec1icon3-min.png';

const Sec1 = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const youtubeOptions = {
    width: '100%',
    height: '400',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={6} className='sec1col1 ps-5'>
            <h1>
              <span>Empowering</span> Minds, <br />
              Enriching <span>Futures</span>
            </h1>
            <p className='fs-5 pt-3'>
              We are committed to providing you with an exceptional <br />
              learning experience that is both interactive and engaging
            </p>
            <div className='pt-5'>
              <button className='sec1button1 fs-5 pt-3 pb-3 ps-5 pe-5 font-weight-bold'>
                Join for free
              </button>{' '}
              &nbsp;&nbsp;&nbsp;
              <button className='sec1button2' onClick={openModal}>
                <i>
                  <FaPlay />
                </i>{' '}
                &nbsp; Watch how it works
              </button>
            </div>
          </Col>
          <Col md={6}>
            <img src={sec1rightimg} className='sec1rightimg' alt='classroomimg' />
          </Col>
        </Row>
      </Container>

      <Container className='cardcner position-absolute w-75'>
        <Row className='cardrow fs-5'>
          <Col className='cardcol1'>
            <i>
              <img src={sec1icon1} alt='' />
            </i>
            <h6>Discover</h6>
            <p>Empowering educators and captivating students.</p>
          </Col>
          <Col className='cardcol2'>
            <i>
              <img src={sec1icon2} alt='imgfor' />
            </i>
            <h6>Mentor</h6>
            <p>Guiding you towards success  and helping you reach your full.</p>
          </Col>
          <Col className='cardcol3'>
            <i>
              <img src={sec1icon3} alt='' />
            </i>
            <h6>Learn</h6>
            <p>Unlock potential with personalized learning experience</p>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className='video-wrapper w-100'>
            <YouTube videoId='0gDojUKgZcc' opts={youtubeOptions} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={closeModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Sec1;
