import React from 'react';
import heroImage from '../assets/images/Hero.webp';

const Hero: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-screen relative max-w-[95%]">
        <div className="w-full h-full">
          <img className="w-full h-full object-cover object-center rounded-3xl" src={heroImage} alt="Hero" />
        </div>

        <div className="absolute bottom-20 left-20 text-white">
          <h1 className="text-4xl font-bold">CKS Slavia Ruda Śląska</h1>
          <p className="text-lg">Amatorska drużyna sportowa</p>
          <a href='https://www.facebook.com/profile.php?id=100054247910252&locale=pl_PL'><div className="bg-white text-black text-center w-25 py-2 rounded">FACEBOOK</div></a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
