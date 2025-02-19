import React from 'react';

const Footer: React.FC = () => {
  return (
      <div className="fixed bottom-4 left-4 flex space-x-4">
        <a><img className="h-6 filter invert" src="../src/assets/vectors/Instagram.svg" /></a>
        <a href='https://www.facebook.com/profile.php?id=100054247910252&locale=pl_PL'><img className = 'filter invert h-6' src='../src/assets/vectors/Facebook.svg'></img></a>
    </div>
  );
};

export default Footer;