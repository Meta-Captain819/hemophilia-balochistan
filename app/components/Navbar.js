"use client"
import React from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-red-800 text-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold flex gap-3 items-center justify-center">
          <a href="/" className="flex items-center gap-2">
            <Image src={"/Logo.png"} alt="haemophilia logo" width={50} height={50}></Image>
          Hemophilia Balochistan
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6 font-medium">
          <li><a href="/" className="hover:text-red-200">Home</a></li>
          <li><a href="/hemophilia" className="hover:text-red-200">About Hemophilia</a></li>
          <li><a href="/achievements" className="hover:text-red-200">Achievements</a></li>
          <li><a href="/donate" className="hover:text-red-200">Donate</a></li>
          <li><a href="/treatment" className="hover:text-red-200">Services</a></li>
          <li><a href="/about" className="hover:text-red-200">About Us</a></li>
          <li><a href="/contact" className="hover:text-red-200">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden p-2 rounded focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="absolute top-16 left-0 w-full bg-red-800 text-white lg:hidden shadow-lg transition duration-1000"
          >
            <ul className="flex flex-col space-y-4 p-4 transition duration-1000">
              <li><a href="/" className="hover:text-red-200" onClick={toggleMenu}>Home</a></li>
              <li><a href="/hemophilia" className="hover:text-red-200" onClick={toggleMenu}>About Hemophilia</a></li>
              <li><a href="/achievements" className="hover:text-red-200" onClick={toggleMenu}>Achievements</a></li>
              <li><a href="/donate" className="hover:text-red-200" onClick={toggleMenu}>Donate</a></li>
              <li><a href="/treatment" className="hover:text-red-200" onClick={toggleMenu}>Services</a></li>
              <li><a href="/about" className="hover:text-red-200" onClick={toggleMenu}>About Us</a></li>
              <li><a href="/contact" className="hover:text-red-200" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
