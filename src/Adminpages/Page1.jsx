import React from 'react';
import Navbar from '../Admin_components/Navbar';
import dashimg from '../page1/images/Dashboardimg-min-2.jpg';
import { useAuth } from "../AdminAuthentication/Auth";

function Page1() {
  const { user } = useAuth();

  return (
    <div>
      <Navbar />
      <div className='leftmarginpage'>
        <h1 style={{ display: 'inline' }}>Dashboard :</h1>
        <h2 style={{ display: 'inline' }}>Hello <strong>{user?.username}</strong>!</h2>
        <img src={dashimg} alt="Dashboard img" className='dashboardimg' />
      </div>
    </div>
  );
}

export default Page1;





