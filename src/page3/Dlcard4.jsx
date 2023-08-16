import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import card4 from '../page1/images/sec4img4-min.jpg';
import pimg4 from '../page1/images/sec4pimg4-min.jpg';

import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';
import { FaShoppingCart } from 'react-icons/fa';
import { IoIosCheckmarkCircle } from "react-icons/io";

function Dlcard4({ addToCart }) {
  const [showNotification, setShowNotification] = useState(false);
  const handleAddToCart = () => {
    const newItem = {
      image: card4,
      category:'Design ',
      name: `Figma UI UX Design..`,
      tutor:'Mark b',
      amount: 899,
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
        <Col><img src={card4} alt="image1" className='page3dcardcol1' />
        <button className='dlcardbutton1' onClick={handleAddToCart}>Add To  <FaShoppingCart/></button>
        <button className='dlcardbutton2'>Buy Now  &#8377; </button>  
        </Col>
        <Col className='page3dcardcol2'>
         <h3 className='o'>Design</h3>
         <h1 className='b'>Figma UI UX Design..</h1>
         <p>Figma is a cloud-based design tool used for creating user interfaces (UI) and user experiences (UX). It is widely popular among designers and design teams due to its collaborative features, versatility, and ease of use. Figma allows multiple users to work simultaneously on the same design project, enabling real-time collaboration and seamless communication.</p>
         <p><span>4.7</span>
        <span className='o'>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        </span>
        <span>(16325)</span>  <span className='o fs-3 fwb'> &nbsp; &#8377; 899 </span> </p>

        <Row className='mt-3 '>
            <Col className='imgandnamecard' ><img src={pimg4} alt="img" /><br />
            <div>
            <span className='b mt-5 fwb'> Mark b </span><br />
             <span> 2001 Enrolled </span>  
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
        <h1>Figma that make it a powerful UI/UX design tool:</h1>
        <ol>
       <li><p>Cloud-based: Figma operates entirely in the cloud, which means that designs are saved and accessible online. This allows for easy sharing and collaboration with team members, who can view and edit the designs in real-time from anywhere with an internet connection.</p></li> 
        <li><p>Multi-platform compatibility: Figma is available as a web application and also has desktop versions for macOS and Windows. The consistent user experience across platforms makes it convenient for designers to switch between devices seamlessly.</p></li>
        <li><p>Design components: Figma's design system enables the creation and management of design components. Components are reusable elements such as buttons, icons, or navigation bars that can be easily replicated and updated across multiple artboards or design files. This feature ensures consistency and efficiency in the design process.</p></li>
        <li><p>Prototyping and interactions: Figma allows designers to create interactive prototypes by adding animations, transitions, and micro-interactions to their designs. These interactive prototypes can be shared with stakeholders and users for feedback and testing. Figma's prototyping capabilities help designers visualize and communicate the user experience effectively.</p></li>
        <li><p>Design versioning and history: Figma automatically saves design files in the cloud and maintains a detailed version history. Designers can review past iterations, revert to previous versions, or compare changes made by team members. This feature facilitates collaboration and provides a safety net in case of mistakes or design regressions.</p></li>
        <li><p>Developer handoff: Figma simplifies the handoff process between designers and developers. Designers can generate design specifications, export assets, and extract CSS properties from Figma, making it easier for developers to implement the design accurately.</p></li>
        <li><p>Plugins and integrations: Figma offers a vast library of plugins created by both Figma and third-party developers. These plugins extend the functionality of Figma, allowing designers to automate tasks, integrate with other tools, access design assets, and apply design systems easily.</p></li>
        <li><p>Design libraries and style guides: Figma allows designers to create and maintain design libraries and style guides. Designers can define and document the design system, including color palettes, typography, spacing rules, and more. Design libraries help maintain consistency throughout the design process and across multiple projects.</p></li>
        <li><p>Collaboration and commenting: Figma enables seamless collaboration among team members. Designers and stakeholders can leave comments on specific elements or areas of a design, providing feedback, suggestions, or clarifications. This collaborative approach improves communication and streamlines the design review process.</p></li>
        <li><p>Design handoff and sharing: Figma makes it easy to share design files with others. Designers can invite team members or stakeholders to view, edit, or comment on designs directly within the Figma platform. Additionally, designers can create shareable links or embed designs on websites for broader sharing and presentation purposes.</p></li>

        </ol>
        <p>These features and capabilities make Figma a versatile tool for UI/UX design, providing an efficient and collaborative environment for designing, prototyping, and sharing designs.</p>
        </Col>
      </Row>
    </Container>

    </div>
  )
}

export default Dlcard4
