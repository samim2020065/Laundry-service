import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  const linkClasses =
    "block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 font-medium transition-all duration-200";

  const activeClasses = "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">User Panel</h4>
      <div className="space-y-2">
        <NavLink
          to="/dashboard/user/profile"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? activeClasses : ""}`
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/dashboard/user/orders"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? activeClasses : ""}`
          }
        >
          Orders
        </NavLink>
      </div>
    </div>
  );
};

export default UserMenu;
