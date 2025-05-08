import React from "react";
import washingMachine from "../assets/washing-machine.png";
import logo from "../assets/logo_.png";

export default function Header() {
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Top Navbar */}
      <nav className="bg-white px-4 py-4 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Suds Laundry" className="h-8 w-8" />
            <span className="text-xl font-semibold text-cyan-600">Suds Laundry</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6 font-medium text-gray-700">
            <a href="#home" className="hover:text-cyan-600">Home</a>
            <a href="#how-it-works" className="hover:text-cyan-600">How it works</a>

            <div className="relative group">
              <button className="hover:text-cyan-600 flex items-center gap-1">
                Services
                <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40">
                <a href="#pickup" className="block px-4 py-2 hover:bg-gray-100">Pickup</a>
                <a href="#dropoff" className="block px-4 py-2 hover:bg-gray-100">Drop-off</a>
                <a href="#laundry" className="block px-4 py-2 hover:bg-gray-100">Laundry</a>
              </div>
            </div>

            <a href="#locations" className="hover:text-cyan-600">Locations</a>
            <a href="#contact" className="hover:text-cyan-600">Contact us</a>
          </div>

          {/* Optional Mobile Button */}
          <div className="md:hidden text-cyan-600 text-2xl font-bold">
            ☰
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-4 py-12 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="max-w-xl">
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
            20% Discount for 1 Month Subscription
          </span>
          <h1 className="text-4xl font-bold mt-4 mb-2 font-sans text-gray-900">
            Laundry today or <br /> Naked tomorrow.
          </h1>
          <p className="mb-6 text-gray-700">
            Suds Laundry service will wash, dry, and fold your laundry at an affordable price. Pickup and drop-off options available!
          </p>
          <button className="bg-blue-100 hover:bg-blue-200 px-6 py-2 rounded-full font-semibold text-blue-700">
            How it works
          </button>
          <div className="flex gap-10 mt-6">
            <div>
              <strong className="text-lg text-gray-900">18m+</strong>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div>
              <strong className="text-lg text-gray-900">10+</strong>
              <p className="text-sm text-gray-600">Years of Experience</p>
            </div>
          </div>
        </div>

        <img
          src={washingMachine}
          alt="Washing Machine"
          className="max-w-sm mt-10 md:mt-0"
        />
      </header>
    </div>
  );
}