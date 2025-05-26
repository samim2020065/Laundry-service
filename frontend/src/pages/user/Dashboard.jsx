import React from "react";
import UserMenu from "../../components/UserMenu";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <UserMenu />
        <div className="md:col-span-3 bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Welcome, {auth?.user?.name}</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> {auth?.user?.email}</p>
            <p><strong>Address:</strong> {auth?.user?.address || "Not provided"}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default Dashboard;
