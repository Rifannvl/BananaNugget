import React from "react";

export default function About() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-yellow-600 mb-6">
        About BananaNugget
      </h1>

      <div className="flex flex-col md:flex-row items-center mb-6">
        <img
          src="https://picsum.photos/500" // Replace with your image path
          alt="Banana Nugget Store"
          className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-4 md:mb-0"
        />
        <div className="md:ml-6">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to <span className="font-bold">BananaNugget</span>, where
            every bite is a taste of happiness! We specialize in crafting
            delicious banana nuggets that are perfect for snacks, desserts, or
            any time cravings.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is to bring joy and flavor to your day with our unique
            recipes made from the freshest ingredients. Founded in [Year], we
            pride ourselves on our commitment to quality and customer
            satisfaction.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Whether you're a long-time fan or a first-time visitor, we invite
            you to explore our delightful menu and experience the magic of
            banana nuggets. Thank you for being part of our delicious journey!
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-yellow-500 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Quality: We use only the best ingredients.</li>
          <li>Creativity: Our flavors are unique and exciting.</li>
          <li>Satisfaction: Your happiness is our priority.</li>
        </ul>
      </div>
    </div>
  );
}
