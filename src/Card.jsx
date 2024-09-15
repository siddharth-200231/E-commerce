import React from 'react';

function Card({ title, price, category, description, image }) {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg p-4 m-4 bg-gradient-to-r from-white to-gray-100 hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
      <img className="w-full h-32 object-contain rounded-lg mb-4" src={image} alt={title} />
      <div className="p-2">
        <div className="font-bold text-xl mb-2 truncate">{title}</div>
        <p className="text-gray-700 text-sm mb-3 truncate">{description}</p>
        <div className="flex justify-between items-center">
          <span className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-xs font-semibold">{category}</span>
          <span className="text-gray-900 text-lg font-bold">${price}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
