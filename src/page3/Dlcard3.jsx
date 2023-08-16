import React, { useState } from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';
import { FaShoppingCart } from 'react-icons/fa';
import { IoIosCheckmarkCircle } from "react-icons/io";

import card3 from '../page1/images/sec4img3-min.jpg';
import pimg3 from '../page1/images/sec4pimg3-min.jpg';



function Dlcard3({ addToCart }) {
  const [showNotification, setShowNotification] = useState(false);
  const handleAddToCart = () => {
    const newItem = {
      image: card3,
      category:'Design ',
      name: `HTML AND CSS Design...`,
      tutor:'Lee Cooper',
      amount: 599,
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
        <Col><img src={card3} alt="image1 " className='page3dcardcol1' />
        <button className='dlcardbutton1' onClick={ handleAddToCart }>Add To  <FaShoppingCart/></button>
        <button className='dlcardbutton2' >Buy Now  &#8377; </button>  
        </Col>
        <Col className='page3dcardcol2'>
         <h3 className='o'>Design</h3>
         <h1 className='b'>HTML AND CSS Design..</h1>
         <p>
HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are fundamental technologies used to create and design web pages. HTML provides the structure and content of a webpage, while CSS is responsible for its visual presentation.</p>
         <p><span>4.3</span>
        <span className='o'>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        </span>
        <span>(16325)</span>  <span className='o fs-3 fwb'> &nbsp; &#8377; 599 </span> </p>

        <Row className='mt-3 '>
            <Col className='imgandnamecard' ><img src={pimg3} alt="img" /><br />
            <div>
            <span className='b mt-5 fwb'> Lee Cooper </span><br />
             <span> 2005 Enrolled </span>  
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
        <p>
HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are the foundational technologies used for creating and styling web pages. Here's an overview of HTML and CSS:</p>
        <h1>HTML:</h1>
        <ol>
            <li><p>Document structure: HTML provides a hierarchical structure for organizing content on a web page. Elements such as headings, paragraphs, lists, images, links, and forms are defined using HTML tags.</p></li>
            <li><p>"Semantic markup: HTML offers a wide range of semantic elements that give meaning to the content. Examples . Semantic markup improves accessibility, search engine optimization, and code readability."</p></li>
            <li><p>Hyperlinks: HTML enables the creation of hyperlinks using the  (anchor) element. By specifying the destination URL with the href attribute, you can link to other web pages, sections within the same page, or external resources.</p></li>
          
        </ol>
        <h1>CSS:</h1>
        <ol>
            <li><p>Style rules: CSS works by applying style rules to HTML elements. A style rule consists of a selector and a declaration block. The selector targets specific HTML elements, and the declaration block contains one or more property-value pairs that define the desired styles.</p>
            </li>
            <li><p>Selectors: CSS offers a variety of selectors to target elements based on their tag names, classes, IDs, attributes, or relationships with other elements. Selectors allow you to specify which elements should be styled.</p></li>
             <li><p>Properties and values: CSS properties define the aspects of an element's appearance, such as color, font-size, margin, padding, background, and border. Property values specify the specific settings for those properties, such as colors, sizes, positions, and more.</p></li>
        
        </ol>
        
        
        
        </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Dlcard3

