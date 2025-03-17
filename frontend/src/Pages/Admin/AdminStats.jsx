import React from "react";
import { FaUsers, FaBookOpen, FaDollarSign } from "react-icons/fa";
import './AdminStats.css'

const AdminStats = () => {
  // Fake data
  const adminData = {
    followers: 1200,
    coursesCreated: 15,
    earnings: 54000, // Assume in USD or INR
  };

  return (
    <div className="admin-stats-main w-[60vw] h-[15vw] border-2 border-red-300 flex flex-col items-center rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 text-center">Admin Stats</h2>

      {/* Stats Container */}
      <div className="w-full flex flex-col gap-6">
        {/* Followers */}
        <div className="bg-blue-100 p-4 rounded-xl flex items-center justify-evenly shadow-md">
          <div className="flex items-center gap-3">
            <FaUsers className="text-blue-600 text-2xl" />
            <span className="text-gray-700 text-sm font-medium">Followers</span>
          </div>
          <span className="text-2xl font-semibold text-blue-600">{adminData.followers}</span>
        </div>

        {/* Courses Created */}
        <div className="bg-green-100 p-4 rounded-xl flex items-center justify-evenly shadow-md">
          <div className="flex items-center gap-3">
            <FaBookOpen className="text-green-600 text-2xl" />
            <span className="text-gray-700 text-sm font-medium">Courses Created</span>
          </div>
          <span className="text-2xl font-semibold text-green-600">{adminData.coursesCreated}</span>
        </div>

        {/* Earnings */}
        <div className="bg-yellow-100 p-4 rounded-xl flex items-center justify-evenly shadow-md">
          <div className="flex items-center gap-3">
            <FaDollarSign className="text-yellow-600 text-2xl" />
            <span className="text-gray-700 text-sm font-medium">Earnings</span>
          </div>
          <span className="text-2xl font-semibold text-yellow-600">${adminData.earnings}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminStats;
