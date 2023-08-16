import React from 'react'

function White() {
  return (
    <div className='whitespace'>
      
    </div>
  )
}

export default White


// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';

// function Cart({ cartItems, removeFromCart }) {
//   const [cartItemsState, setCartItemsState] = useState(cartItems);

//   const getTotalAmount = () => {
//     let total = 0;
//     cartItemsState.forEach((item) => {
//       total += item.amount;
//     });
//     return total;
//   };

//   const handleRemoveFromCart = (index) => {
//     removeFromCart(index);
//   };

//   const handleIncrement = (index) => {
//     const updatedCartItems = [...cartItemsState];
//     const item = updatedCartItems[index];
  
//     if (!item.originalAmount) {
//       item.originalAmount = item.amount;
//     }
  
//     item.amount += item.originalAmount;
//     setCartItemsState(updatedCartItems);
//   };
  
  

//   const handleDecrement = (index) => {
//     const updatedCartItems = [...cartItemsState];
//     const item = updatedCartItems[index];
  
//     if (!item.originalAmount) {
//       item.originalAmount = item.amount;
//     }
  
//     if (item.amount > item.originalAmount) {
//       item.amount -= item.originalAmount;
//     }
  
//     setCartItemsState(updatedCartItems);
//   };


//   return (
//     <div style={{ paddingTop: '120px' }} className='cartcontainer'>
//       <h1 className="cart-title b">Y<span className='o '>our</span>  C<span className='b'>art</span></h1>
//       {cartItemsState.map((item, index) => ( 
//         <div key={index} className="cart-item">
//           <img src={item.image} alt="item" className="item-image" />
//           <div className="item-details">
//             <span className="item-category o">{item.category}</span> <br />
//             <span className="item-name b">{item.name}</span> <br />
//             <span className="b">Tutor :  <span className='o'>{item.tutor}</span></span> <br />
//             <span className="item-amount b">Amount : <span className='item-rupees o'> &#8377; {item.amount}</span> </span>
//           </div>
//           <div className="item-buttons">
//             <Button
//               variant="danger"
//               onClick={() => handleRemoveFromCart(index)}
//               className="remove-button"
//             >
//               Remove
//             </Button>
            
//             <div className="quantity-buttons">
//               <Button
//                 variant="primary"
//                 onClick={() => handleIncrement(index)}
//                 className="increment-button"
//               >
//                 +
//               </Button>
//               <Button
//                 variant="primary"
//                 onClick={() => handleDecrement(index)}
//                 className="decrement-button"
//               >
//                 -
//               </Button>
//             </div>
//           </div>
//         </div>
//       ))}
//       <p className="total-amount b">Total Amount: <span className='total-amount-rupees o'>&#8377; {getTotalAmount()}</span></p>
//       <button className='dlcardbutton2' style={{width:`27%`}}>Buy Now  &#8377; </button>
//       <div className='whitespace'></div>
//     </div>
//   );
// }

// export default Cart;
