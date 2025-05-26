import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  const linkClasses =
    "block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 font-medium transition-all duration-200";
  const activeClasses = "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">Admin Panel</h4>
      <div className="space-y-2">
        <NavLink
          to="/dashboard/admin/create-category"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? activeClasses : ""}`
          }
        >
          Create Category
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-product"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? activeClasses : ""}`
          }
        >
          Create Product
        </NavLink>
        <NavLink
          to="/dashboard/admin/users"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? activeClasses : ""}`
          }
        >
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;