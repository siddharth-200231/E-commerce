import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import { UserContext } from './Context';
import { Routes,Route } from 'react-router-dom';
import Products from './Products';
import About from './About';

function App() {
  const { data } = useContext(UserContext);

  // Extract unique categories
  const categories = Array.isArray(data) 
    ? [...new Set(data.map(item => item.category))] 
    : [];

  return (
    <div className='flex h-screen w-screen'>
      <nav className='w-[15%] p-3'>
        <div className='flex flex-col items-start space-y-4'>
          <Link 
            to="/create" 
            className='w-full py-2 px-4 border rounded border-blue-700 text-blue-700 hover:bg-blue-50 transition-colors'
          >
            Add New Product
          </Link>
          <hr className='w-full border-gray-300' />
          <h1 className='text-xl font-semibold mb-3'>Category Filter</h1>
          <ul className='w-full space-y-2'>
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <li key={index} className='flex items-center text-gray-800'>
                  <span className='block rounded-full w-3 h-3 bg-zinc-400 mr-3'></span>
                  {category}
                </li>
              ))
            ) : (
              <li className='text-gray-800'>No categories available</li>
            )}
          </ul>
        </div>
      </nav>

      <main className='flex-1 p-4 overflow-auto'>
      <nav className='flex p-4 mb-4 text-lg font-medium justify-center bg-sky-100 shadow-md'>
  <Link
    to="/products"
    className="text-gray-700 px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-all duration-200"
  >
    Products
  </Link>
  <Link
    to="/about"
    className="text-gray-700 px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-all duration-200"
  >
    About
  </Link>
</nav>


  <Routes>
    <Route path='/products' element={<Products/>}></Route>
    <Route path='/about' element={<About/>}></Route>
  </Routes>
 
</main>

    </div>
  );
}

export default App;
