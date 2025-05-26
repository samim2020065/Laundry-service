import React from "react";
import UserMenu from "../../components/UserMenu";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Profile = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <UserMenu />
        <div className="md:col-span-3 bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Profile Settings</h2>
          <p className="text-gray-600">Manage your account and update your information here.</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default Profile;
