import React from 'react';
import { Member } from '../types/Member';

interface MembersProps {
  members: Member[];
}

const Products: React.FC<MembersProps> = ({ members }) => {
  return (
    <div className="w-11/12 mx-auto my-20">
      <h2 className="text-2xl font-bold">Członkowie klubu</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-4">
        {members.map((member, index) => (
          <div key={index} className="bg-white p-4 rounded">
            <img src={member.image} alt={member.title} className="w-full h-60 object-contain rounded" />
            <div className="mt-2 text-gray-900">
              <h3 className="text-lg font-semibold">{member.title}</h3>
              <p className="text-sm">{member.name}</p>
              <p className="text-xs text-gray-500">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
