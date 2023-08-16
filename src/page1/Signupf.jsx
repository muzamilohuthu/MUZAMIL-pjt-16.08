
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';


import { Navbar } from 'react-bootstrap';
import logoimg from './images/brandlogo-min.png';
import { GiCancel } from "react-icons/gi";


const Signup = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [, setIsSubmitted] = useState(false);
  const history = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await axios.post('http://localhost:8000/signup', {
        name: data.name,
        email: data.email,
        password: data.password,
        phoneNumber: data.phoneNumber
      })
        .then(res => {
          if (res.data === 'exist') {
            alert('User already exists');
          } else if (res.data === 'notexist') {
            history('/', { state: { id: data.email } });
          }
        })
        .catch(e => {
          alert('Wrong details');
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }

    setIsSubmitted(true);
  };

  const password = watch('password');

  return (
    <div >
      <div className='whitespace2'></div>
      <Navbar.Brand href="#">
          <img className="ps-5" src={logoimg} alt="logo" />
          <NavLink to='/'><h5 className="logoname">Educt.</h5></NavLink>
        </Navbar.Brand>
        <NavLink to={'/'}><button className='backtohomebutton'><GiCancel /></button></NavLink>
      <div className="formstyle">
        <h1>Sign Up</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FloatingLabel controlId="name" label="Name" className="inputfieldform">
            <Form.Control
              type="text"
              placeholder="Enter your Name"
              {...register('name', {
                required: '*Name is required',
                pattern: {
                  value: /^[A-Za-z\s]*$/,
                  message: '*only alphabets',
                },
              })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </FloatingLabel>
          <br />

          <FloatingLabel controlId="email" label="Email">
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

          <FloatingLabel controlId="password" label="Password">
            <Form.Control
              type="password"
              placeholder="Enter your password"
              {...register('password', {
                required: '*Password is required',
                minLength: {
                  value: 8,
                  message: '*Password must have at least 8 characters',
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </FloatingLabel>
          <br />

          <FloatingLabel controlId="confirmPassword" label="Confirm Password">
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              {...register('confirmPassword', {
                required: '*Confirm Password is required',
                validate: (value) =>
                  value === password || '*Passwords do not match',
              })}
            />
            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
          </FloatingLabel>
          <br />

          <FloatingLabel controlId="phoneNumber" label="Phone Number">
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              {...register('phoneNumber', {
                required: '*Phone Number is required',
                pattern: {
                  value: /^\d{10}$/,
                  message: '*Invalid phone number format',
                },
              })}
            />
            {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
          </FloatingLabel>
          <br />

          <div className="btnsubmit">
            <Button type="submit">Submit</Button>
          </div>
          <p className='ortext'>OR</p>
         <p>already have an account <NavLink to='/login'>login </NavLink></p>
        </Form>

      </div>

    </div>
  );
};

export default Signup;
