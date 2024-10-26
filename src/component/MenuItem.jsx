import React from "react";

export default function MenuItem({ name, description, price, image }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-lg font-semibold">{price}</p>
      </div>
    </div>
  );
}
