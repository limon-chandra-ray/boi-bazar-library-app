

import React from 'react';

const DonateCard = ({ item }) => {
  const { name, image, description, category, author } = item;

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-6 max-w-sm mx-auto">
      <img
        className="w-full h-48 object-cover rounded-lg mb-4"
        src={image}
        alt={name}
      />
      <div className="text-white">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-sm mb-2">Category: {category}</p>
        <p className="text-sm mb-4">Author: {author}</p>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default DonateCard;