import React from 'react'
import { Card } from 'react-bootstrap';
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import card1 from '../page1/images/sec4img1-min.jpg';
import card2 from '../page1/images/sec4img2-min.jpg';
import card3 from '../page1/images/sec4img3-min.jpg';
import card4 from '../page1/images/sec4img4-min.jpg';
import card5 from '../page1/images/sec4img5-min.jpg';
import card6 from '../page1/images/sec4img6-min.jpg';
import card7 from '../page1/images/sec4img7-min.jpg';
import card8 from '../page1/images/sec4img8-min.jpg';
import card9 from '../page1/images/sec4img9-min.jpg';

import pimg1 from '../page1/images/sec4pimg2-min.jpg';
import pimg2 from '../page1/images/sec4pimg1-min.jpg';
import pimg3 from '../page1/images/sec4pimg3-min.jpg';
import pimg4 from '../page1/images/sec4pimg4-min.jpg';
import pimg5 from '../page1/images/sec4pimg5-min.jpg';
import pimg6 from '../page1/images/sec4pimg6-min.jpg';
import pimg7 from '../page1/images/sec4pimg7-min.jpg';
import pimg8 from '../page1/images/sec4pimg8-min.jpg';
import pimg9 from '../page1/images/sec4pimg9-min.jpg';

import Sec7 from '../page1/Sec7';

function Careers() {
  return (
    <div style={{paddingTop:`120px`}}>
      
      <Container>
      <h1 className='fs-1 b fwb ms-2'>Our  Most <span className='o'>Popular </span>Class</h1>
      <br />
    <Container>
    <Row>
      <Col>  <Card className='sec4card'>
      <Card.Img variant="top" className='p-2' src={card1} />
      <Card.Body>
        <span className='o'>Design</span>
        <Card.Title className='b fs-3 '>Figma UI UX Design.. </Card.Title>
        <Card.Text>
         Use Figma to get a job in UI Design ,
         User interface ,User Experience Design
        </Card.Text>
        <span>4.5</span>
        <span className='o'>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        </span>
        <span>(16365)</span>

       
        <Row className='mt-3' >
            <Col><img  className='br' src={pimg1} alt="img" /></Col>
            <Col ><span className='b mt-5 fwb'> Jane Cooper </span><br />
                2001 Enrolled</Col>
            <Col className='o fs-3 fwb'>&#8377; 999
            <NavLink to={'/dlcard1'}> <button className='sec4addcartbutton'>Read  More</button></NavLink> </Col>
        </Row>
     
      </Card.Body>
    </Card></Col>
      <Col> <Card className='sec4card'>
      <Card.Img variant="top" className='p-2' src={card2} />
      <Card.Body>
         <span className='o'>Develop</span>
        <Card.Title className='b fs-3'>Learn React...</Card.Title>
        <Card.Text>
        React is an open-source JavaScript
         library used for building user
        </Card.Text>
        <span>4.3</span>
        <span className='o'>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        </span>
        <span>(12365)</span>

       
        <Row className='mt-3 '>
            <Col ><img className='br'  src={pimg2} alt="img" /></Col>
            <Col ><span className='b mt-5 fwb'>  Jai Bross </span><br />
                2002 Enrolled</Col>
                <Col className='o fs-3 fwb'>&nbsp; &#8377; 799
                <NavLink to={'/dlcard2'}> <button className='sec4addcartbutton'>Read  More</button></NavLink> </Col>
        </Row>
     
      </Card.Body>
    </Card></Col>
      <Col> <Card className='sec4card' >
      <Card.Img variant="top" className='p-2' src={card3} />
      <Card.Body>
        <span className='o'>Design</span>
        <Card.Title className='fs-3 b '>HTML AND CSS Design..</Card.Title>
        <Card.Text>
        HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are ...
        </Card.Text>
        <span>4.3</span>
        <span className='o'>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        </span>
        <span>(12365)</span>

       
        <Row className='mt-3 '>
            <Col ><img className='br'  src={pimg3} alt="img" /></Col>
            <Col ><span className='b mt-5 fwb'> Jane Cooper </span><br />
                2005 Enrolled</Col>
                <Col className='o fs-3 fwb'>&#8377; 599
                <NavLink to={'/dlcard3'}> <button className='sec4addcartbutton'>Read  More</button></NavLink> </Col>
        </Row>
      </Card.Body>
    </Card></Col>
    </Row>
  </Container>
   
  <Container  className='mt-5'>
   
   <Row>
     <Col> <Card className='sec4card'>
      <Card.Img variant="top" className='p-2' src={card4} />
      <Card.Body>
        <span className='o'>Design</span>
        <Card.Title className='b fs-3 '>Figma UI UX Design.. </Card.Title>
        <Card.Text>
         Use Figma to get a job in UI Design ,
         User interface ,User Experience Design
        </Card.Text>
        <span>4.7</span>
        <span className='o'>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        </span>
        <span>(69852)</span>

       
        <Row className='mt-3 '>
            <Col ><img className='br' src={pimg4} alt="img" /></Col>
            <Col ><span className='b mt-5 fwb'> Mark b </span><br />
                2001 Enrolled</Col>
                <Col className='o fs-3 fwb'>&#8377; 899
                <NavLink to={'/dlcard4'}> <button className='sec4addcartbutton'>Read  More</button></NavLink> </Col>
        </Row>
     
      </Card.Body>
    </Card></Col>
     <Col> <Card className='sec4card'>
      <Card.Img variant="top" className='p-2' src={card5} />
      <Card.Body>
         <span className='o'>Develop</span>
        <Card.Title className='b fs-3'>Learn React...</Card.Title>
        <Card.Text>
        React is an open-source JavaScript
         library used for building user
        </Card.Text>
        <span>4.9</span>
        <span className='o'>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        </span>
        <span>(65412)</span>

       
        <Row className='mt-3 '>
            <Col ><img className='br' src={pimg5} alt="img" /></Col>
            <Col ><span className='b mt-5 fwb'> Jhon Jio  </span><br />
                2005 Enrolled</Col>
                <Col className='o fs-3 fwb'>&#8377; 899
                <NavLink to={'/dlcard5'}> <button className='sec4addcartbutton'>Read  More</button></NavLink> </Col>
        </Row>
     
      </Card.Body>
    </Card></Col>
     <Col><Card className='sec4card' >
      <Card.Img variant="top" className='p-2' src={card6} />
      <Card.Body>
        <span className='o'>Design</span>
        <Card.Title className='fs-3 b '>HTML AND CSS Design..</Card.Title>
        <Card.Text>
        HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are ...
        </Card.Text>
        <span>4.3</span>
        <span className='o'>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        </span>
        <span>(89745)</span>

       
        <Row className='mt-3 '>
            <Col ><img className='br'  src={pimg6} alt="img" /></Col>
            <Col><span className='b mt-5 fwb'> Jack Boss </span><br />
                2001 Enrolled</Col>
                <Col className='o fs-3 fwb'>&#8377; 499
                <NavLink to={'/dlcard6'}> <button className='sec4addcartbutton'>Read  More</button></NavLink> </Col>
        </Row>
      </Card.Body>
    </Card></Col>
   </Row>
 </Container>

 <Container className='mt-5 mb-5'>
   
   <Row>
     <Col>  <Card className='sec4card'>
      <Card.Img variant="top" className='p-2' src={card7} />
      <Card.Body>
        <span className='o'>Design</span>
        <Card.Title className='b fs-3 '>Figma UI UX Design.. </Card.Title>
        <Card.Text>
         Use Figma to get a job in UI Design ,
         User interface ,User Experience Design
        </Card.Text>
        <span>4.6</span>
        <span className='o'>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        </span>
        <span>(65412)</span>

       
        <Row className='mt-3 '>
            <Col ><img className='br'  src={pimg7} alt="img" /></Col>
            <Col><span className='b mt-5 fwb'> Dan Lok </span><br />
                2003 Enrolled</Col>
                <Col className='o fs-3 fwb'>&#8377; 499
                <NavLink to={'/dlcard7'}> <button className='sec4addcartbutton'>Read  More</button></NavLink> </Col>
        </Row>
     
      </Card.Body>
    </Card></Col>
     <Col> <Card className='sec4card'>
      <Card.Img variant="top" className='p-2' src={card8}  height={`276.26px`}/>
      <Card.Body>
         <span className='o'>Develop</span>
        <Card.Title className='b fs-3'>Learn React...</Card.Title>
        <Card.Text>
        React is an open-source JavaScript
         library used for building user
        </Card.Text>
        <span>4.5</span>
        <span className='o'>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        </span>
        <span>(45123)</span>

       
        <Row className='mt-3 '>
            <Col ><img className='br'  src={pimg8} alt="img" /></Col>
            <Col><span className='b mt-5 fwb'> Roman </span><br />
                2005 Enrolled</Col>
                <Col className='o fs-3 fwb'>&#8377; 799
                <NavLink to={'/dlcard8'}> <button className='sec4addcartbutton'>Read  More</button></NavLink> </Col>
        </Row>
     
      </Card.Body>
    </Card></Col>
     <Col> <Card className='sec4card' >
      <Card.Img variant="top" className='p-2' src={card9} />
      <Card.Body>
        <span className='o'>Design</span>
        <Card.Title className='fs-3 b '>HTML AND CSS Design..</Card.Title>
        <Card.Text>
        HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are ...
        </Card.Text>
        <span>4.3</span>
        <span className='o'>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        <span ><AiFillStar/></span>
        </span>
        <span>(85123)</span>

       
        <Row className='mt-3 '>
            <Col ><img className='br'  src={pimg9} alt="img" /></Col>
            <Col><span className='b mt-5 fwb'> Lofty Rob </span><br />
                2002 Enrolled</Col>
                <Col className='o fs-3 fwb'>&#8377; 699
                <NavLink to={'/dlcard9'}> <button className='sec4addcartbutton'>Read  More</button></NavLink> </Col>
        </Row>
      </Card.Body>
    </Card></Col>
   </Row>
 </Container>

    
 </Container>
       <div className='whitespace'></div>
       <div><Sec7/></div>
    </div>
  )
}

export default Careers
