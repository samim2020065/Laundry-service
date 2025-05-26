import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ConfirmOrder() {
  const [formData, setFormData] = useState({
    pickupDate: '',
    pickupTime: '',
    branch: '',
    fullName: '',
    email: '',
    mobileNumber: '',
    deliveryTo: '',
    roadName: '',
    flatDetails: '',
    address: '',
    paymentMethod: 'cash'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Submitted:', formData);
  };

  return (
  <>
  <Navbar/>
   <div className="p-4 max-w-4xl mx-auto bg-blue-50">
      <h2 className="text-2xl font-semibold text-center mb-6">Confirm Order</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Edit Pickup & Delivery Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <input type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} className="border p-2" placeholder="Pickup Date" required />
            <input type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} className="border p-2" placeholder="Pickup Time" required />
          </div>
          <select name="branch" value={formData.branch} onChange={handleChange} className="border p-2 w-full mt-2" required>
            <option value="">Select Branch</option>
            <option value="branch1">Branch 1</option>
            <option value="branch2">Branch 2</option>
          </select>
        </div>

        <div>
          <h3 className="text-lg font-medium">Contact Person</h3>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="border p-2 w-full mt-2" placeholder="Full Name" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 w-full mt-2" placeholder="Email" required />
          <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="border p-2 w-full mt-2" placeholder="Mobile Number" required />
        </div>

        <div>
          <h3 className="text-lg font-medium">Address</h3>
          <input type="text" name="deliveryTo" value={formData.deliveryTo} onChange={handleChange} className="border p-2 w-full mt-2" placeholder="Delivery To Door" required />
          <input type="text" name="roadName" value={formData.roadName} onChange={handleChange} className="border p-2 w-full mt-2" placeholder="Road Name" required />
          <input type="text" name="flatDetails" value={formData.flatDetails} onChange={handleChange} className="border p-2 w-full mt-2" placeholder="Flat Name, Room Number or Floor" required />
          <textarea name="address" value={formData.address} onChange={handleChange} className="border p-2 w-full mt-2" placeholder="Address" required></textarea>
        </div>

        <div>
          <h3 className="text-lg font-medium">Payment Method</h3>
          <label className="block mt-2">
            <input type="radio" name="paymentMethod" value="cash" checked={formData.paymentMethod === 'cash'} onChange={handleChange} />
            <span className="ml-2">Cash on delivery</span>
          </label>
          <label className="block mt-2">
            <input type="radio" name="paymentMethod" value="online" checked={formData.paymentMethod === 'online'} onChange={handleChange} />
            <span className="ml-2">Online payment (Bkash/Nagad)</span>
          </label>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Confirm Order</button>
      </form>

      <div className="mt-8 border-t pt-4">
        <h4 className="text-md font-medium mb-2">Your Cart is Empty.</h4>
        <p className="text-sm">(Free delivery cost for up to 1000)</p>
      </div>
    </div>
    <Footer/>
  </>
   
  );
} 
