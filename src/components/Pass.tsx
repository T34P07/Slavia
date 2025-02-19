import React from 'react';
import Card from './Card';

interface PassProps {
  title: string;
  description: string;
  price: string;
  validity: string;
  buttonText: string;
}

const Pass: React.FC<PassProps> = ({
  title,
  description,
  price,
  validity,
  buttonText,
}) => {
  return (
    <Card borderColor="black">
      <h2 className={`text-white text-2xl font-bold`}>{title}</h2>
      <p className="text-gray-300 mt-2" dangerouslySetInnerHTML={{ __html: description }} />
      <p className="text-gray-400 mt-2">Cena: {price} | Ważny: {validity}</p>
      <button
        className={`mt-4 px-6 py-2 text-black rounded-lg bg-white`}
      >
        {buttonText}
      </button>
    </Card>
  );
};

export default Pass;
