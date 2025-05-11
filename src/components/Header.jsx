import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import washingMachine from "../assets/washing-machine.png";
import logo from "../assets/logo_.png";
import Navbar from './Navbar';
import Services from './Services'

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <header className="px-4 py-12 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
      <div className="max-w-xl" data-aos="fade-right">
  <h1 className="text-3xl md:text-4xl font-bold leading-tight text-center md:text-left">
    <span className="text-green-600">Best </span>
    <span className="text-blue-700">Wash and Iron service</span><br />
    <span className="text-green-600">in your doorstep...</span>
  </h1>

  <p className="mt-4 text-gray-700 text-center md:text-left">
    Suds Laundry is an Online Laundry Platform with the latest technology in washing, dry cleaning and laundry.
    Our services combine our expertise and experience acquired over a period of time to provide you with clean laundry 
    in the shortest possible turnaround time.
  </p>

  <div className="mt-6 flex justify-center md:justify-start">
    <button onClick={() => navigate('/Services')}className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded shadow-md transition">
      View Services
    </button>
  </div>
</div>

        <img
          src={washingMachine}
          alt="Washing Machine"
          className="max-w-sm mt-10 md:mt-0" data-aos="fade-left"
        />
      </header>
    </div>
  );
}