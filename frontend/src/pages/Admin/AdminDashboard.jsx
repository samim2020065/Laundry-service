import React from "react";
import AdminMenu from "../../components/AdminMenu";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <AdminMenu />
          </div>
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl shadow p-6 space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">Admin Information</h2>
              <p><span className="font-semibold">Name:</span> {auth?.user?.name}</p>
              <p><span className="font-semibold">Email:</span> {auth?.user?.email}</p>
              <p><span className="font-semibold">Contact:</span> {auth?.user?.phone}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;