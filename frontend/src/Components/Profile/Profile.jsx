import React from "react";
import Circle_Ryan from "../../assets/Circle_Ryan.png";
import "./Profile.css";
import { IoIosNotifications } from "react-icons/io";

const admins = [
  {
    profile_name: "Aryan",
    email: "aryanrajtalekar@gmail.com",
    profile_image: Circle_Ryan,
  },
];

const Profile = () => {
  return (
    <div className="profile-panel w-full h-[6vw] flex justify-center items-center gap-4 ">
      {admins.map((admin, index) => (
        <div key={index} className="flex items-center gap-3">
          {/* Notification Icon */}
          <div className="bg-gray-200 text-black p-2 rounded-full flex items-center justify-center">
            <IoIosNotifications size={25} />
          </div>

          {/* Profile Image */}
          <img
            src={admin.profile_image}
            alt="Admin Profile"
            className="border-3 border-yellow-500 w-[5vw] h-[5vw] rounded-full"
          />

          {/* Admin Name */}
          <h1 className="admin-profile-name font-bold text-lg">{admin.profile_name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Profile;
