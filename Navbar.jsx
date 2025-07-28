import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-accent1 text-textLight fixed w-full z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Shaik Abdul Nabi</h1>
        <div className="space-x-6">
          <a href="#home" className="hover:text-accent2">Home</a>
          <a href="#about" className="hover:text-accent2">About</a>
          <a href="#projects" className="hover:text-accent2">Projects</a>
          <a href="#contact" className="hover:text-accent2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
