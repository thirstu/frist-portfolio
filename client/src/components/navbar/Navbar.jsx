import React from 'react'
import Dark_Mode from '../darkMode/Dark_Mode';
const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 bg-slate-900 text-white shadow z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Ajay Nishad</h1>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-blue-500">About</a></li>
              <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
              <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
            
      {/* <Dark_Mode/> */}

            
          </div>
        </nav>
      );
}

export default Navbar
