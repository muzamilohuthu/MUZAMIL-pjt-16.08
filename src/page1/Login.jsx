import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import logoimg from './images/brandlogo-min.png';

import { GiCancel } from "react-icons/gi";

import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useNavigate();

  const [, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8000/login', data);
      if (response.data === 'exist') {
        history('/', { state: { id: data.email } });
      } else if (response.data === 'notexist') {
        // document.getElementById('emailerromsg').innerHTML=" email not been signup "
        alert('user id not been signup')
      } else if (response.data === 'incorrectpassword') {
        // document.getElementById('passwordermes').innerHTML=' Incorrect password ';
        alert(' Incorrect password')
      } else {
        alert('Invalid email or password');
      }
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
      alert('An error occurred');
    }
  };

  return (
    <div >
      <div className='whitespace2'></div>
      <Navbar.Brand href="#">
          <img className="ps-5" src={logoimg} alt="logo" />
          <NavLink to='/'><h5 className="logoname">Educt.</h5></NavLink>
        </Navbar.Brand>
        <NavLink to={'/'}><button className='backtohomebutton'><GiCancel /></button></NavLink>
      
      <div  className='formstyle'>
      
      <h1>Login</h1>
      
      <Form onSubmit={handleSubmit(onSubmit)} >
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
          <span id='emailerromsg'>  </span>
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
          {errors.password && <span >{errors.password.message}</span>}
          <span id='passwordermes'></span>
        </FloatingLabel>
        <br />
        <div className='btnsubmit '>
         <Button type="submit">Submit</Button>
        </div>
      </Form>
      <br />
      <p className='ortext'>OR</p>
      <br />
      <p>Create an account<Link to="/signup">Signup</Link></p>
      </div>
    </div>
  );
};

export default Login;
