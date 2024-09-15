import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import { UserContext } from './Context';
import { Routes,Route } from 'react-router-dom';
import Products from './Products';
import About from './About';
import Login from './Signup';
import SignUp from './Signup';

import { FaPlus,FaBox, FaInfoCircle, FaUserPlus } from 'react-icons/fa';



function App() {
  const { data } = useContext(UserContext);

  // Extract unique categories
  const categories = Array.isArray(data) 
    ? [...new Set(data.map(item => item.category))] 
    : [];

  return (
    <div className='flex h-screen w-screen'>
       <nav className='w-[20%] p-4 bg-white shadow-lg rounded-lg'>
      <div className='flex flex-col items-start space-y-6'>
        {/* Add New Product Button */}
        <Link
          to="/create"
          className='flex items-center w-full py-2 px-4 border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors duration-200'
        >
          <FaPlus className="mr-2" />
          Add New Product
        </Link>

        <hr className='w-full border-gray-300' />

        {/* Category Filter Header */}
        <h1 className='text-xl font-semibold text-gray-900'>Category Filter</h1>

        {/* Category List */}
        <ul className='w-full space-y-3'>
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <li
                key={index}
                className='flex items-center text-gray-700 hover:bg-gray-100 px-2 py-1 rounded-lg cursor-pointer transition-all duration-200'
              >
                <span className='block rounded-full w-3 h-3 bg-blue-400 mr-3'></span>
                {category}
              </li>
            ))
          ) : (
            <li className='text-gray-700'>No categories available</li>
          )}
        </ul>
      </div>
    </nav>

      <main className='flex-1 p-4 overflow-auto'>
      <nav className="flex items-center p-4 mb-4 text-lg font-medium justify-between bg-gradient-to-r from-sky-200 to-sky-400 shadow-xl border border-gray-200 rounded-lg sticky top-0 z-50">
  {/* Left-aligned Links */}
  <div className="flex space-x-6">
    <Link
      to="/products"
      className="flex items-center text-gray-700 px-4 py-2 rounded-md hover:bg-blue-300 hover:text-blue-900 hover:scale-105 transform transition-all duration-300"
    >
      <FaBox className="mr-2" />
      Products
    </Link>
    <Link
      to="/about"
      className="flex items-center text-gray-700 px-4 py-2 rounded-md hover:bg-blue-300 hover:text-blue-900 hover:scale-105 transform transition-all duration-300"
    >
      <FaInfoCircle className="mr-2" />
      About
    </Link>
  </div>

  {/* Right-aligned Sign Up Button */}
  <Link
    to="/signup"
    className="flex items-center py-2 px-6 bg-red-500 text-white rounded-full hover:bg-cyan-900 hover:scale-105 transform transition-all duration-300"
  >
    <FaUserPlus className="mr-2" />
    Sign Up
  </Link>
</nav>

  <Routes>
    <Route path='/products' element={<Products/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
  </Routes>
 
</main>

    </div>
  );
}

export default App;
