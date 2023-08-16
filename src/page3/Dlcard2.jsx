import React, { useState } from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';
import { FaShoppingCart } from 'react-icons/fa';
import { IoIosCheckmarkCircle } from "react-icons/io";

import card2 from '../page1/images/sec4img2-min.jpg';
import pimg2 from '../page1/images/sec4pimg1-min.jpg';


function Dlcard2({ addToCart }) {
  const [showNotification, setShowNotification] = useState(false);
  const handleAddToCart = () => {
    const newItem = {
      image: card2,
      category:'Develop ',
      name: `Learn React...`,
      tutor:'Jai Bross',
      amount: 799,
    };

    addToCart(newItem);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };
  return (
    <div className='padtop120px'>
    <Container>
      <Row>
        <Col><img src={card2} alt="image1" className='page3dcardcol1' />
        <button className='dlcardbutton1' onClick={handleAddToCart}>Add To  <FaShoppingCart/></button>
        <button className='dlcardbutton2'>Buy Now  &#8377; </button>  
        </Col>
        <Col className='page3dcardcol2'>
         <h3 className='o'>Develop</h3>
         <h1 className='b'>Learn React...</h1>
         <p>React is an open-source JavaScript library used for building user interfaces for web applications. It was developed by Facebook and was released in 2013. React allows developers to create reusable UI components and provides a declarative syntax for describing how the UI should look at any given point in time.</p>
         <p><span>4.5</span>
        <span className='o'>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        </span>
        <span>(16325)</span>  <span className='o fs-3 fwb'> &nbsp; &#8377; 799 </span> </p>

        <Row className='mt-3 '>
            <Col className='imgandnamecard' ><img src={pimg2} alt="img" /><br />
            <div>
            <span className='b mt-5 fwb'> Jai Bross </span><br />
             <span> 2002 Enrolled </span>  
             </div>
            </Col>
        </Row>
        </Col>
      </Row>
      </Container>
      {showNotification && (
        <div className='notification'>
         <i><IoIosCheckmarkCircle /></i> Item added to cart < FaShoppingCart />
        </div>
      )}
      <br />
      <Container className='dlcardcontainer2'>
      <Row>
        <Col>
        <h1>If you're interested in learning React, here are some key points to consider:</h1>
        <ol>
            <li><p>Declarative and component-based: React follows a declarative programming paradigm, which means you describe what you want your UI to look like, and React takes care of updating the UI to match the desired state. React organizes UI elements into reusable components, allowing developers to build complex UIs by composing smaller, self-contained pieces.</p>
            </li>
            <li><p>Virtual DOM: React utilizes a virtual DOM (Document Object Model) to efficiently update and render UI components. Instead of directly manipulating the actual DOM, React creates an in-memory representation of the DOM and computes the minimum number of changes needed to update the real DOM. This approach improves performance and reduces unnecessary re-rendering of components.</p></li>
            <li><p>JSX: JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. JSX makes it easier to define the structure and appearance of React components. It combines the power of JavaScript and HTML, allowing you to embed JavaScript expressions and logic directly into your UI code.</p></li>
            <li><p>Component lifecycle and state management: React provides lifecycle methods that allow you to hook into different phases of a component's life, such as initialization, rendering, updating, and unmounting. These lifecycle methods give you control over when certain actions should be performed, such as fetching data or updating the UI.React also introduces the concept of "state" to manage dynamic data within components. State represents the mutable data that can change over time and trigger UI updates. By managing state effectively, you can create interactive and responsive UIs.</p></li>
           <li><p>React hooks: Introduced in React 16.8, hooks are a way to add state and other React features to functional components. They allow you to use features such as state management, side effects, and context without the need for class components. Hooks provide a simpler and more intuitive way to work with state and lifecycle functionalities.</p></li>
           <li><p>React Router: React Router is a popular library that provides routing capabilities to React applications. It enables you to create different routes for your application, allowing navigation between different pages or views. React Router helps in building single-page applications (SPAs) with multiple views while maintaining a smooth user experience.</p></li>

        
        </ol>
        <p>To get started with React, it's recommended to have a solid understanding of JavaScript fundamentals, including ES6 features like arrow functions, destructuring, and modules. Once you have a good grasp of JavaScript, you can dive into learning React by following tutorials, building small projects, and exploring the official React documentation. Practice and hands-on experience are crucial for gaining proficiency in React development.</p>
       
        </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Dlcard2
