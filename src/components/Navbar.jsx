// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_.png"; // Adjust path if needed

export default function Navbar() {
  return (
    <nav className="bg-white px-4 py-4 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Suds Laundry" className="h-8 w-8" />
          <span className="text-xl font-semibold text-cyan-600">Suds Laundry</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 font-medium text-gray-700">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/order" className="hover:text-blue-600">Order</Link>
        
       
        <Link to="/services" className="hover:text-blue-600">Service</Link>
        <Link to="/locations" className="hover:text-blue-600">Location</Link>
          <Link to="/signin" className="hover:text-blue-600">Sign In</Link>
        </div>

        {/* Optional Mobile Button */}
        <div className="md:hidden text-cyan-600 text-2xl font-bold">
          ☰
        </div>
      </div>
    </nav>
  );
}
