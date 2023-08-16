import { Link } from "react-router-dom";
import {  Button} from 'react-bootstrap';

import authimg from '../page1/images/unauthorized.jpg';

const Unauthorized = () => (
  <div className="unauthorizedpagecontainer">

    {/* <h1>Unauthorized page</h1>
    <p>You don't have permission to access this page.</p> */}
    <img src={ authimg } alt="Unauthorized img " />
    
    <br />
    <div className="unauthorizedpagebtndiv">
     <span style={{fontSize:`12px`}}>Go back to  </span><Button className="unauthorizedpagebtn">
        <Link to="/admin" className="unauthorizedpagebtnlink"> login Page</Link></Button>
        </div>
  </div>
);

export default Unauthorized;
