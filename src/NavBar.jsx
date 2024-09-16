import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='w-full p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg flex justify-between items-center'>
      {/* Logo */}
      <div className='flex items-center'>
        <Link to="/" className='text-white text-2xl font-bold'>
          MyStore
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className='text-white text-2xl sm:hidden'
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu Links */}
      <div className={`flex-col sm:flex-row sm:flex sm:space-x-6 mt-4 sm:mt-0 absolute sm:relative sm:bg-transparent bg-white sm:text-white text-black left-0 w-full sm:w-auto transform sm:transform-none transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <Link
          to="/"
          className="block sm:inline-block px-4 py-2 rounded-md hover:bg-white hover:text-purple-600 transition-transform duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/products"
          className="block sm:inline-block px-4 py-2 rounded-md hover:bg-white hover:text-purple-600 transition-transform duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Products
        </Link>
        <Link
          to="/about"
          className="block sm:inline-block px-4 py-2 rounded-md hover:bg-white hover:text-purple-600 transition-transform duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/signup"
          className="block sm:inline-block px-4 py-2 bg-white text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-transform duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
