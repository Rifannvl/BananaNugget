import React from "react";
import BaseLayout from "../layout/BaseLayout";

const menuItems = [
  // Original
  ...Array.from({ length: 4 }, (_, index) => ({
    name: `Banana Nugget Original ${index + 1}`,
    description: "Kelezatan pisang yang digoreng dengan tepung renyah.",
    price: "Rp 15.000",
    image: `path/to/banana-nugget-original${index + 1}.jpg`,
    category: "Original",
  })),
  // Coklat
  ...Array.from({ length: 4 }, (_, index) => ({
    name: `Banana Nugget Coklat ${index + 1}`,
    description: "Pisah goreng dengan coklat leleh yang lezat.",
    price: "Rp 18.000",
    image: `path/to/banana-nugget-coklat${index + 1}.jpg`,
    category: "Coklat",
  })),
  // Keju
  ...Array.from({ length: 4 }, (_, index) => ({
    name: `Banana Nugget Keju ${index + 1}`,
    description: "Gorengan pisang dengan taburan keju yang gurih.",
    price: "Rp 20.000",
    image: `path/to/banana-nugget-keju${index + 1}.jpg`,
    category: "Keju",
  })),
  // Stroberi
  ...Array.from({ length: 4 }, (_, index) => ({
    name: `Banana Nugget Stroberi ${index + 1}`,
    description: "Rasa stroberi segar yang menyegarkan.",
    price: "Rp 18.000",
    image: `path/to/banana-nugget-stroberi${index + 1}.jpg`,
    category: "Stroberi",
  })),
];

export default function Gallery() {
  return (
    <BaseLayout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="border rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-lg font-semibold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}
