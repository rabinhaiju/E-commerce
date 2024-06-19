import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import FeatuedProduct from './Components/FeatuedProduct';
import ProductData from './Components/ProductData';
import Login from './Components/Login';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import Singnup from './Components/Singnup';

const App = () => {
  const [cart, setCart] = useState([]);

  const AddToCart = (item) => {
    setCart((prevCart) => {
      const existingItems = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItems) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
        );
      } else {
        return [...prevCart, item];
      }
    });
  }

  const handleClearCart = () => {
    setCart([]);
  }

  const location = useLocation();
  const noFooterPaths = ['/cart'];

  return (
    <>
      <Nav cartItems={cart} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Product />} />
        <Route path='/:id' element={<FeatuedProduct />} />
        <Route path='/products/:id' element={<ProductData AddToCart={AddToCart} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart cartItems={cart} setCartItems={setCart} handleClearCart={handleClearCart} />} />
        <Route path='/signup' element={<Singnup />} />
      </Routes>
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
