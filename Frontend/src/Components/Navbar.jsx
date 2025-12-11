import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-pink-600">Mulaqat</h1>

        {/* Menu Items */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-pink-600 cursor-pointer">Home</li>
          <li className="hover:text-pink-600 cursor-pointer">Places</li>
          <li className="hover:text-pink-600 cursor-pointer">About</li>
          <li className="hover:text-pink-600 cursor-pointer">Contact</li>
        </ul>

        {/* Button */}
        <button className="hidden md:block bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
          Login
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer">
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
