import React from "react";
import { NavLink } from 'react-router-dom'
import { FaAward } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import './Navbar.css'


const Navbar = () => {
 



  return (
    <>
    <div className="main-container w-full h-[7vw] flex items-center">
      <div className="logo w-[20vw] flex items-center justify-center text-2xl font-bold font-[Sigmar]">
      <div className="logo-image relative top-1">
        <FaAward color="orange" />
      </div>
      <div className="logo-text tracking-[0.13rem] relative">
        MindForge
        <span className="absolute -top-2 text-medium font-medium font-[poppins]">&reg;</span>
      </div>
      </div>


      <div className="searchbar border-gray-500 border-2 w-[18vw] rounded-full h-[2.5vw] flex items-center px-2">
  <form action="" className="flex items-center w-full">
    <input
      className="w-full h-full rounded-full px-3 text-sm text-center outline-none mr-2"
      type="text"
      placeholder="What Do you want to learn?"
    />
    <button className="search_button bg-blue-500 w-[3vw] h-[2vw] rounded-full flex items-center justify-center">
      <CiSearch className="w-5 h-5 text-white" />
    </button>
  </form>
</div>




      
      
      <div className="menubar flex-grow flex justify-around ">
      <ul className="flex items-center justify-around h-[3vw] w-[50vw]  ">
        <li className="nav-item "> <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-500  font-bold" : "text-black font-semibold "
            }
          >
            Home
          </NavLink></li>
        <li className="nav-item"><NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-yellow-500  font-bold" : "text-black font-semibold")}
          >
            About
          </NavLink></li>
        <li className="nav-item"><NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? "text-yellow-500  font-bold" : "text-black font-semibold")}
          >
            Contact
          </NavLink></li>
        </ul>

        <button className="signup ml-6 bg-orange-400 text-black rounded-[6vw] w-[10vw]  hover:bg-blue-500 shadow-lg hover:shadow-xl transition-all">
          Sign Up
        </button>

      </div>
      
    </div>
    </>
  )
}

export default Navbar


