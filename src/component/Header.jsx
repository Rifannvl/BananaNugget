import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-yellow-500 p-4 fixed top-0 min-w-full  z10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">BananaNugget</h1>
        <button
          className="block lg:hidden text-white focus:outline-none font-bold"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
        {/* Navigasi Desktop */}
        <nav className="hidden lg:flex space-x-4">
          <Link to="/" className="text-white hover:text-yellow-200 font-bold">
            Beranda
          </Link>
          <Link
            to="/menu"
            className="text-white hover:text-yellow-200 font-bold"
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-yellow-200 font-bold"
          >
            Tentang Kami
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-yellow-200 font-bold"
          >
            Kontak
          </Link>
        </nav>
      </div>

      {/* Menu Samping untuk Mobile */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-90 transform transition-transform duration-300 
                    ${
                      isMenuOpen ? "translate-x-0" : "translate-x-full"
                    } lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <button className="text-white text-2xl" onClick={toggleMenu}>
            ✖
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="text-white hover:text-yellow-200 font-bold text-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="text-white hover:text-yellow-200 font-bold text-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-yellow-200 font-bold text-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-yellow-200 font-bold text-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
