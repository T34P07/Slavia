import React from 'react';

interface CardProps {
  borderColor: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  borderColor,
}) => {
  return (
    <div className={`bg-black/20 backdrop-blur-lg p-6 rounded-xl shadow-lg text-center border border-${borderColor}`}>
      {children}
    </div>
  );
};

export default Card;
