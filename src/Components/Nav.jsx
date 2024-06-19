import React, { useState } from 'react';
import { FaCartPlus, FaUserFriends, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = ({ cartItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = cartItems.length;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-4 lg:px-0">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13e6eaaad5828372464f73a1a4.svg" alt="Logo" className="h-8" />
          <button onClick={toggleMenu} className="text-gray-800 lg:hidden focus:outline-none" aria-label="Toggle menu">
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        <div className={`w-full lg:flex lg:items-center lg:gap-10 lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row lg:gap-10 mt-4 lg:mt-0">
            <li className="text-lg">
              <Link to="/" className="block py-2 lg:py-0 text-gray-800 hover:text-gray-600">Home</Link>
            </li>
            <li className="text-lg">
              <Link to="/about" className="block py-2 lg:py-0 text-gray-800 hover:text-gray-600">About</Link>
            </li>
            <li className="text-lg">
              <Link to="/products" className="block py-2 lg:py-0 text-gray-800 hover:text-gray-600">Products</Link>
            </li>
          </ul>

          <div className="flex flex-col lg:flex-row lg:gap-6 items-center mt-4 lg:mt-0 lg:ml-auto">
            <Link to="/cart" className="flex items-center gap-2 relative text-lg lg:text-2xl">
              <h3>Cart</h3>
              <FaCartPlus />
              <div className="absolute -top-3 -right-3 bg-orange-400 text-white rounded-full flex items-center justify-center w-5 h-5 text-xs font-bold">
                {cartCount}
              </div>
            </Link>
            <ul className="flex gap-4 items-center mt-4 lg:mt-0">
              <li className="text-lg lg:text-2xl">
                <Link to="/login" className="text-gray-800 hover:text-gray-600">Login</Link>
              </li>
              <li className="text-lg lg:text-2xl">
                <FaUserFriends className="text-gray-800" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
