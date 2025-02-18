import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center items-center p-8">
      <div className="flex space-x-6">
        <button className="bg-zinc-900 px-4 py-2 rounded-xl">Strona Główna</button>
        <button className="bg-zinc-900 px-4 py-2 rounded-xl">Osiągnięcia</button>
        <button className="bg-zinc-900 px-4 py-2 rounded-xl">Zawodnicy</button>
        <button className="bg-zinc-900 px-4 py-2 rounded-xl">Kontakt</button>
        <button className="bg-sky-400 text-black px-6 py-2 rounded-full">Zaloguj się</button>
      </div>
    </nav>
  );
};

export default Navbar;
