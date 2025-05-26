import React from "react";
import AdminMenu from "../../components/AdminMenu";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CreateCategory = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <AdminMenu />
          </div>
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl shadow p-6">
              <h1 className="text-2xl font-bold text-blue-600">Create Category</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateCategory;