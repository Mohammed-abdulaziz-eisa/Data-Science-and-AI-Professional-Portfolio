import React from 'react';
import { User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <User size={32} className="mr-2" />
          <h1 className="text-2xl font-bold">Mohamed Abdulaziz Eisa</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="#education" className="hover:text-gray-300">Education</a></li>
            <li><a href="#experience" className="hover:text-gray-300">Experience</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;