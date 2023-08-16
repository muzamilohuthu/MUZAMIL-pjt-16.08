import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import pgnotfound from '../page1/images/pagenotfound-min.jpg';


function Pagenotfound() {
  return (
    <div style={{textAlign:`center`}}>

      <h1>Page not found !</h1>
      <br />

      <img src={ pgnotfound } alt="not found img " width={`35%`} height={`35%`}/>
      <br />
      <br />
      
      <h1>Go to  <Button variant='warning' size='lg'><NavLink to='/' style={{textDecoration:`none`}}>Home Page</NavLink> </Button> </h1>
    </div>
  )
}

export default Pagenotfound