import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import MenuItem from "../component/MenuItem";

const sampleItems = [
  {
    name: "Banana Nugget Original 1",
    description: "Kelezatan pisang yang digoreng dengan tepung renyah.",
    price: "Rp 15.000",
    image: "path/to/banana-nugget-original1.jpg", // Update this path accordingly
  },
  {
    name: "Banana Nugget Original 2",
    description: "Pisang yang digoreng dengan tepung renyah dan bumbu spesial.",
    price: "Rp 15.000",
    image: "path/to/banana-nugget-original2.jpg",
  },
  {
    name: "Banana Nugget Coklat 1",
    description: "Pisah goreng dengan coklat leleh yang lezat.",
    price: "Rp 18.000",
    image: "path/to/banana-nugget-coklat1.jpg",
  },
  {
    name: "Banana Nugget Keju 1",
    description: "Gorengan pisang dengan taburan keju yang gurih.",
    price: "Rp 20.000",
    image: "path/to/banana-nugget-keju1.jpg",
  },
  {
    name: "Banana Nugget Stroberi 1",
    description: "Rasa stroberi segar yang menyegarkan.",
    price: "Rp 18.000",
    image: "path/to/banana-nugget-stroberi1.jpg",
  },
];

export default function Menu() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Menu Item</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleItems.map((item) => (
          <MenuItem
            key={item.name}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>

      {/* Button for All Menu */}
      <div className="text-center mt-10">
        <Link
          to="/menu"
          className="bg-yellow-500 text-white text-xl font-semibold py-2 px-4 rounded"
        >
          All Menu
        </Link>
      </div>
    </div>
  );
}
