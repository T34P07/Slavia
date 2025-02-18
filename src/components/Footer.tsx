import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-white py-10 mt-12">
      <div className="max-w-screen-xl mx-auto px-4 text-center">

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} <a href='https://www.youtube.com/@T34P07'>T34P07</a>. Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
