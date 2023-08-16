import React, { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AdminAuthentication/Auth';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

import { MdAdminPanelSettings } from 'react-icons/md';

import alarmSound from '../page1/images/erro.mp3';

function Adminlogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const audioRef = useRef(null);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();

      // Predefined username and password
      const predefinedUsername = 'admin';
      const predefinedPassword = '123';

      if (username === predefinedUsername && password === predefinedPassword) {
        // Perform login action
        alert('Login successful');
        setUser({ username });
        navigate('/page1');
      } else {
        // Display an error message or handle invalid login
        playAlarmSound(); // Play the alarm sound
        alert('Invalid credentials');
      }
    },
    [username, password, setUser, navigate]
  );

  const playAlarmSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="formfullcontainer">
      <div className="formcontainer">
        <i>
          <MdAdminPanelSettings />
        </i>
        <Form onSubmit={handleLogin}>
          <h1>Admin Login</h1>
          <FloatingLabel controlId="floatingInput" label="User name" className="mb-3">
            <Form.Control
              type="username"
              placeholder="mohamed"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
          <br />
          <div className="loginbtn">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </div>
      <audio ref={audioRef} src={alarmSound} />
    </div>
  );
}

export default Adminlogin;




