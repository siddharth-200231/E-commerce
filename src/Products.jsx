import React from 'react';
import Cards from './Cards';

function Products({ products }) {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 text-center my-8">Our Products</h2>
      <Cards products={products} />
    </div>
  );
}

export default Products;
