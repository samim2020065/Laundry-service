import React, { useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


export default function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    answer:"",
  });

  const navigate = useNavigate();
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email: formData.email,
        newPassword: formData.newPassword,
        answer: formData.answer,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate(location.state || "/SignIn"); // Navigate to home on success
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Sign In</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 p-2 rounded"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="answer" className="block text-sm mb-1">Answer</label>
              <input
                id="answer"
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                value={formData.answer}
                onChange={handleChange}
                placeholder="What"
                required
              />
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-sm mb-1">NewPassword</label>
              <input
                id="newPassword"
                type="password"
                className="w-full border border-gray-300 p-2 rounded"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Enter your new Password"
                required
              />
            </div>
            
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              RESET
            </button>
            <p className="text-sm text-center mt-4">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
