import React, { useState } from 'react';
import { CartProvider } from '../src/page2/Cartcontext';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Rootlayout from './components/Rootlayout';
import Contact from './page2/Contact';
import Home from './page1/Home';
import Aboutus from './page2/Aboutus';
import Signup from './page1/Signupf';
import Login from './page1/Login';
import Careers from './page2/Careers';
import Blog from './page2/Blog';

import Pagenotfound from './page2/Pagenotfound';
import Cart from './page2/Cart';
import Dlcard1 from './page3/Dlcard1';
import Dlcard2 from './page3/Dlcard2';
import Dlcard3 from './page3/Dlcard3';
import Dlcard4 from './page3/Dlcard4';
import Dlcard5 from './page3/Dlcard5';
import Dlcard6 from './page3/Dlcard6';
import Dlcard7 from './page3/Dlcard7';
import Dlcard8 from './page3/Dlcard8';
import Dlcard9 from './page3/Dlcard9';
import Adminlogin from './Admin/Adminlogin';
import Page1 from './Adminpages/Page1';
import Page2 from './Adminpages/Page2';
import Page3 from './Adminpages/Page3';
import Page4 from './Adminpages/Page4';
import Page5 from './Adminpages/Page5';
import Page6 from './Adminpages/Page6';

import { AuthProvider, RequireAuth } from "../src/AdminAuthentication/Auth";
import Unauthorized from './AdminAuthentication/Unauthorised';



function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    // Check if the item already exists in the cart
    const itemExists = cartItems.some((item) => item.name === newItem.name);

    if (!itemExists) {
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };


  return (
     <CartProvider>
    <AuthProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Rootlayout cartItemsCount={cartItems.length} />}>
            <Route index element={<Home />} />
      <Route path="aboutus" element={<Aboutus />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="careers" element={<Careers />}/>
      <Route path="blog" element={<Blog />}/>
      <Route path="cart" element={<Cart  cartItems={cartItems} removeFromCart={removeFromCart} />}/>
      <Route path="signup" element={<Signup />}/>
      <Route path="login" element={<Login />}/>
      <Route path="*" element={<Pagenotfound />}/>

      <Route path="/unauthorized" element={<Unauthorized/>} />

      <Route path="admin" element={<Adminlogin />}/>
      <Route element={<RequireAuth/>}>
      <Route path='/page1'  element= {<Page1  />}/>
      <Route path='/page2' element={<Page2 />}></Route>
      <Route path='/page3' element={<Page3/>}></Route>
      <Route path='/page4' element={<Page4/>}></Route>
      <Route path='/page5' element={<Page5/>}></Route>
      <Route path='/page6' element={<Page6 />}></Route>
      </Route>
       
      <Route path="dlcard1" element={<Dlcard1 addToCart={addToCart}/>}/>
      <Route path="dlcard2" element={<Dlcard2 addToCart={addToCart}/>}/>
      <Route path="dlcard3" element={<Dlcard3 addToCart={addToCart}/>}/>
      <Route path="dlcard4" element={<Dlcard4 addToCart={addToCart}/>}/>
      <Route path="dlcard5" element={<Dlcard5 addToCart={addToCart}/>}/>
      <Route path="dlcard6" element={<Dlcard6 addToCart={addToCart}/>}/>
      <Route path="dlcard6" element={<Dlcard6 addToCart={addToCart}/>}/>
      <Route path="dlcard7" element={<Dlcard7 addToCart={addToCart}/>}/>
      <Route path="dlcard8" element={<Dlcard8 addToCart={addToCart}/>}/>
      <Route path="dlcard9" element={<Dlcard9 addToCart={addToCart}/>}/>


    </Route>
    </Routes>
    
    </BrowserRouter>
    </AuthProvider>
    </CartProvider>
  );
}

export default App;





// // import {  Route,  Router,  Routes} from "react-router-dom";
// import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './page1/Home';
// import Navbarr from './page1/Nav';
// // import Rootlayout from "./components/Rootlayout";

// function App() {
//   return (
//     <div>
//     <div><Navbarr/></div>
//   <div><Home/></div>
//   </div>

//   );
// }

// export default App;
