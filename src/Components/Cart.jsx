import React from 'react';
import { MdDelete } from "react-icons/md";

const Cart = ({ cartItems, handleClearCart, setCartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const removeItem = (id) => {
    const newCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(newCartItems);
  }

  return (
    <div className='container mx-auto py-6 px-4 lg:px-0'>
      <h3 className='text-5xl text-center'>YOUR CART</h3>
      <div className='flex flex-col mt-10'>
        {cartItems.length === 0 ? (
          <p className='text-center text-2xl'>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div className='flex flex-col lg:flex-row justify-between items-center border-b py-4' key={item.id}>
              <div className='flex gap-6 items-center mb-4 lg:mb-0'>
                <img className='h-[100px] w-[100px] object-cover' src={item.image} alt={item.name} />
                <div>
                  <h2 className='text-2xl font-bold'>{item.name}</h2>
                  <p className='opacity-80'>${item.price}</p>
                  <p className='opacity-80'>Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className='text-2xl font-bold flex items-center gap-4'>
                ${item.price * item.quantity}
                <MdDelete className='cursor-pointer' onClick={() => removeItem(item.id)} />
              </div>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
          <div className='mt-6 text-right'>
            <p className='text-3xl font-bold'>Total: ${totalPrice.toFixed(2)}</p>
            <button
              className='text-white py-2 px-3 bg-red-600 rounded-md mt-4'
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
