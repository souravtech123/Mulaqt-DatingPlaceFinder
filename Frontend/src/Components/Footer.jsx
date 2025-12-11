import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-400 to-red-400 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Mulaqat</h2>
          <p className="text-pink-100 text-sm">
          Bas ek mulaqat sab kuch badal deti hai.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li className="hover:text-pink-200 cursor-pointer">Home</li>
            <li className="hover:text-pink-200 cursor-pointer">Places</li>
            <li className="hover:text-pink-200 cursor-pointer">Booking</li>
            <li className="hover:text-pink-200 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
          <p className="text-pink-100">Email: support@datespot.com</p>
          <p className="text-pink-100">Phone: +91 98765XXXX</p>
          <div className="flex gap-4 mt-3 text-2xl">
            <span className="cursor-pointer hover:text-pink-200">📸</span>
            <span className="cursor-pointer hover:text-pink-200">🐦</span>
            <span className="cursor-pointer hover:text-pink-200">📘</span>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center mt-6 text-pink-200 text-sm">
        © {new Date().getFullYear()} Mulaqat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
