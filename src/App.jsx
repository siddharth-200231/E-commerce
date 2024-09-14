import React from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';

function App() {
  return (
    <div className='flex h-screen w-screen'>
      <nav className='w-full sm:w-1/4 md:w-1/5 lg:w-1/6 h-full bg-gray-100 p-5 shadow-md'>
        <div className='flex flex-col items-start space-y-4'>
          <Link to="/create" className='w-full py-2 px-4 border rounded border-blue-700 text-blue-700 hover:bg-blue-50 transition-colors'>
            Add New Product
          </Link>
          <hr className='w-full border-gray-300' />
          <h1 className='text-xl font-semibold mb-3'>Category Filter</h1>
          <ul className='w-full space-y-2'>
            <li className='flex items-center text-gray-800'>
              <span className='block rounded-full w-3 h-3 bg-zinc-400 mr-3'></span>
              Cat 1
            </li>
            <li className='flex items-center text-gray-800'>
              <span className='block rounded-full w-3 h-3 bg-zinc-400 mr-3'></span>
              Cat 2
            </li>
            <li className='flex items-center text-gray-800'>
              <span className='block rounded-full w-3 h-3 bg-zinc-400 mr-3'></span>
              Cat 3
            </li>
          </ul>
        </div>
      </nav>

      <main className='flex-1 p-4 overflow-auto'>
        <Cards />
      </main>
    </div>
  );
}

export default App;
