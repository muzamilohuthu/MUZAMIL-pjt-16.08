import React from 'react'
import blogimg1 from  '../page1/images/blogimg1-min.png'
import blogimg2 from  '../page1/images/blogimg2-min.png'
import blogimg3 from  '../page1/images/blogimg3-min.png'

import {Row ,Container , Col} from 'react-bootstrap'
import Sec7 from '../page1/Sec7'

function Blog() {
  return (
    <div style={{paddingTop:`85px`}} className='blogcontainer'>
   
      <Container className='blogcontainer'>
        
        <h1 className='b text-center p-5'><span className='o' >Blog</span> Educt.</h1>
      <Row  className='blogrow'>
        <Col className='blogcol1'>
        <img src={ blogimg1 } alt="aboutus img" />
        </Col>
        <Col className='blogcol2'>
        <h2>What is React.js?</h2>
        <p>Today, front-end frameworks and libraries
           are becoming an essential part of the modern web development stack.
            React.js is a front-end library that has gradually become the go-to
             framework for modern web development within the JavaScript community. <br />
             <br />
            For those who are new to web development, or trying to figure out what
               all the fuss is about, let’s look at React, how it works, and what makes 
               it different from other JavaScript frameworks......</p>
               <div className="btnsubmit aboutusbtn">
               <a href="https://blog.hubspot.com/website/react-js" target='_blank' rel="noreferrer"><button>Read More</button></a>
               </div>
        </Col>
      </Row>
      <Row className='blogrow'>
        <Col className='blogcol2'>
        <h2>How to Add CSS to HTML ?</h2>
        <p> If you’re building a website, HTML is your best friend. With it, you create all
           of your page content, including headings, paragraphs, images, tables, forms,
           lists, and so on. However, you can’t control how these elements look on the page, 
           at least not with HTML alone. That’s why we have CSS. <br />
           <br />
           CSS determines how the contents of a web page look when
            shown in browser. It can be used for a huge range of stylistic 
            purposes, from changing colors and animating elements to determining 
             layout of your page.......</p>
               <div className="btnsubmit aboutusbtn">
               <a href="https://blog.hubspot.com/website/add-css-to-html" target='_blank' rel="noreferrer" ><button>Read More</button></a>
               </div>
        </Col>
        <Col className='blogcol1'>
        <img src={ blogimg2 } alt="aboutus img" />
        </Col>
      </Row>

      <Row  className='blogrow'>
        <Col className='blogcol1'>
        <img src={ blogimg3 } alt="aboutus img" />
        </Col>
        <Col className='blogcol2'>
        <h2>What’s Figma ?</h2>
        <p>Last year, Adobe announced it had entered a definitive agreement to acquire Figma,
           the newest leader in web-first collaborative design, for a total of $20 billion. <br />
             <br />
             Adobe’s mission is to change the world with enhanced digital experiences, and
              Figma seeks to make design accessible to all with visual collaboration. These 
              two companies combined have the power to change the UX design space from here on,
               but how will they fare after the acquisition is complete?......</p>
               <div className="btnsubmit aboutusbtn">
               <a href="https://blog.hubspot.com/website/adobe-figma-buyout" target='_blank' rel="noreferrer" ><button>Read More</button></a>
               </div>
        </Col>
      </Row>
  
    </Container>
   
    <div>< Sec7 /> </div>
    </div>
  )
}

export default Blog
