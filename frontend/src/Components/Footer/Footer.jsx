import React from "react";
import {FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 flex justify-evenly items-center w-full h-[9.5vw]">
        
      
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/courses" className="text-gray-400 hover:text-yellow-400 transition font-semibold">Courses</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-yellow-400 transition font-semibold">About Us</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-yellow-400 transition font-semibold">Contact</a></li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-yellow-400">Stay Connected</h2>
          <div className="flex justify-center">
            <Link to="https://www.linkedin.com/in/aryanrajtalekar/" className="text-gray-400 hover:text-yellow-400 text-xl transition font-semibold"><FaLinkedinIn /></Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
