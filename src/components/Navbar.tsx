import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center fixed w-full p-10">
      <a href='https://www.youtube.com/@T34P07'>
        <img className='h-12' src='../src/assets/vectors/T34P07.png' alt="T34P07" />
      </a>
      
      <div className="flex space-x-4">
        <Link to="/" className="bg-transparent px-4 py-2">Strona Główna</Link>
        <Link to="/achievements" className="bg-transparent px-4 py-2">Osiągnięcia</Link>
        <Link to="/home" className="bg-transparent px-4 py-2">Członkowie</Link>
        <Link to="/passes" className="bg-transparent px-4 py-2">Karnety</Link>
        <Link to="/contact" className="bg-transparent px-4 py-2">Kontakt</Link>
      </div>
    </nav>
  );
};

export default Navbar;
