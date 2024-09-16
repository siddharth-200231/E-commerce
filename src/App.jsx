import React, { useContext, useState } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { FaPlus, FaBox, FaInfoCircle, FaUserPlus, FaHome } from 'react-icons/fa';
import Products from './Products';
import About from './About';
import Signup from './Signup';
import Home from './Home';
import { UserContext } from './Context';
import Cards from './Cards';

function App() {
  const { data } = useContext(UserContext);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const location = useLocation(); // Get the current route

  // Extract unique categories including 'All'
  const categories = Array.isArray(data)
    ? ['All', ...new Set(data.map(item => item.category))]
    : [];

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'All'
    ? data
    : data.filter(item => item.category === selectedCategory);

  return (
    <div className='flex flex-col h-screen w-screen'>
      <nav className='w-full p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg rounded-b-lg'>
        <div className='flex justify-between items-center'>
          {/* Add New Product Button */}
          <Link
            to="/create"
            className='flex items-center py-2 px-4 border border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200 shadow-md'
          >
            <FaPlus className="mr-2" />
            Add New Product
          </Link>

          <div className="flex space-x-6">
            <Link
              to="/"
              className="flex items-center text-white px-4 py-2 rounded-md hover:bg-white hover:text-purple-600 transition-transform duration-300 transform hover:scale-105"
            >
              <FaHome className="mr-2" />
              Home
            </Link>
            <Link
              to="/products"
              className="flex items-center text-white px-4 py-2 rounded-md hover:bg-white hover:text-purple-600 transition-transform duration-300 transform hover:scale-105"
            >
              <FaBox className="mr-2" />
              Products
            </Link>
            <Link
              to="/about"
              className="flex items-center text-white px-4 py-2 rounded-md hover:bg-white hover:text-purple-600 transition-transform duration-300 transform hover:scale-105"
            >
              <FaInfoCircle className="mr-2" />
              About
            </Link>
          </div>

          <Link
            to="/signup"
            className="flex items-center py-2 px-6 bg-white text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-transform duration-300 transform hover:scale-105 shadow-md"
          >
            <FaUserPlus className="mr-2" />
            Sign Up
          </Link>
        </div>
      </nav>

      <div className='flex-1 flex overflow-hidden'>
        {/* Conditionally render the sidebar based on the route */}
        {location.pathname === '/products' && (
          <aside className='w-[20%] p-4 bg-white shadow-lg rounded-lg overflow-y-auto'>
            <div className='flex flex-col items-start space-y-6'>
              <hr className='w-full border-gray-300' />
              <h1 className='text-xl font-semibold text-gray-900'>Category Filter</h1>

              <ul className='w-full space-y-3'>
                {categories.length > 0 ? (
                  categories.map((category, index) => (
                    <li
                      key={index}
                      onClick={() => setSelectedCategory(category)}
                      className={`flex items-center text-gray-700 px-2 py-1 rounded-lg cursor-pointer transition-all duration-200 shadow-md ${selectedCategory === category ? 'bg-purple-500 text-white' : 'hover:bg-purple-500 hover:text-white'}`}
                    >
                      <span className={`block rounded-full w-3 h-3 mr-3 ${selectedCategory === category ? 'bg-white' : 'bg-blue-400'}`}></span>
                      {category}
                    </li>
                  ))
                ) : (
                  <li className='text-gray-500 italic'>No categories available</li>
                )}
              </ul>
            </div>
          </aside>
        )}

        <main className='flex-1 p-4 overflow-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Cards products={filteredProducts} />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
