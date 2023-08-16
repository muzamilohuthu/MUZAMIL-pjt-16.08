import React, { useState } from 'react';


import { useForm } from 'react-hook-form';
import { Container, Row, Col, FloatingLabel, Form, Button } from 'react-bootstrap';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationArrow } from 'react-icons/fa';
import { BsFillPhoneFill } from "react-icons/bs";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaVimeoV } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

import axios from 'axios';

import { IoIosCheckmarkCircle } from "react-icons/io";
import { GiCancel } from "react-icons/gi";


import { CSSTransition } from 'react-transition-group';

// import FormData from './mongoforcontactus';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } , reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await axios.post('http://localhost:8000/contact', {
        name: data.name,
        email: data.email,
        message: data.message
      });
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
      // Handle the error condition, such as displaying an error message
    }
  };
    
  const handleCancel = () => {
    reset(); // Reset the form fields
    setIsSubmitted(false); // Set isSubmitted state to false
  };
  const [isShown, setIsShown] = React.useState(false);

  React.useEffect(() => {
    setIsShown(true);
  }, []);
  
  return (
    <div className='contactusfulldiv'>
        <CSSTransition
              in={isShown}
              timeout={1000}
              classNames="image"
              unmountOnExit
            >
      <Container className='contactuscontainer ' >
        <Row className='contactusrow '>
          <Col className='contactuscol1'>
            <Row>
              <h2>
                <i><BsFillTelephoneFill /></i> CALL US
              </h2>
              <p>6369368025, 1 (234) 987-654</p>
            </Row>
            <br />
            <Row>
            <h2>
              <i><FaLocationArrow /></i>
              Location
            </h2>
            <p>30,Vallal Nagar,Karumbukkadai,<br />Coimbatore-641008.
            </p>
            </Row>
            <br />
            <Row>
              <h2> <i><BsFillPhoneFill /></i> Social media</h2>
              <p><i> <a href="https://www.facebook.com/" target='blank'><FaFacebookSquare/></a></i>
               <i><a href="https://twitter.com/i/flow/login?lang=en" target='blank'><FaTwitter/></a> </i> 
               <i><a href="https://vimeo.com/log_in" target='blank'><FaVimeoV/></a></i>
               <i><a href="https://www.youtube.com/" target='blank'><FaYoutube/></a></i></p>
              
            </Row>
          </Col>  
          <Col className='contactuscol2'>
            <br />
            <h1>CONTACT US</h1>
            <br />
            <div className="contact-form">
      {isSubmitted ? (
        <div className='contactsuccessmessage'>
          <button onClick={handleCancel}><GiCancel /></button>
          <i><IoIosCheckmarkCircle /></i>
          <h3>Thank you!</h3>
          <p>Your submission has been sent.</p>
        </div>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FloatingLabel controlId="name" label="Name" style={{ width: '80%' ,margin:'auto' }}>
            <Form.Control
              type="text"
              placeholder="Enter your Name"
              {...register('name', {
                required: '*Name is required',
                pattern: {
                  value: /^[A-Za-z\s]*$/,
                  message: '*Only alphabets are allowed',
                },
              })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </FloatingLabel>
          <br />

          <FloatingLabel controlId="email" label="Email" style={{ width: '80%' ,margin:'auto' }}>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              {...register('email', {
                required: '*Email is required',
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                  message: '*Invalid email address',
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </FloatingLabel>
          <br />

          <Form.Group controlId="message" style={{ width: '80%' ,margin:'auto' }}>
            <Form.Control
              as="textarea"
              placeholder="Type your message"
              style={{ height: '150px' }}
              {...register('message', {
                required: '*Message is required',
              })}
            />
            {errors.message && <span>{errors.message.message}</span>}
          </Form.Group>
          <br />

          <div className="contactusformsubmit">
                <Button type="submit">Submit</Button>
              </div>
        </Form>
      )}
    </div>
          </Col>
        </Row>
      </Container>
      </CSSTransition>
      <div className='whitespace'></div>
   
    </div>
  );
}

export default Contact;
