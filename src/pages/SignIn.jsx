// src/components/SignIn.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

export default function SignIn() {
  return (
    <>
    <Navbar/>
        <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Sign In</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Sign In
          </button>
          <p className="text-sm text-center mt-4">
            Don’t have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
    <Footer/>
    </>
    
    
  );
}
