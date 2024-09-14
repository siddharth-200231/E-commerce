import React from 'react';

function Card({ title, price, category, description, image }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-md p-3 m-3 bg-white border border-gray-200">
      <img className="w-full h-24 object-contain" src={image} alt={title} />
      <div className="p-3">
        <div className="font-bold text-lg mb-1 truncate">{title}</div>
        <p className="text-gray-600 text-sm mb-2 truncate">{description}</p>
        <div className="flex justify-between items-center">
          <span className="bg-gray-100 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">{category}</span>
          <span className="text-gray-800 text-lg font-semibold">${price}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
