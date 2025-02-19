import React from 'react';
import Pass from '../components/Pass';

const Passes: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Pass
          title="Ulgowy"
          description="- Wstęp na siłownię<br/>- Dostęp do użytku sprzętu na siłowni<br/>- Konsultacja i pomoc trenera"
          price="50 PLN"
          validity="30 Dni"
          buttonText="Kup"
        />
        
        <Pass
          title="Normalny"
          description="- Wstęp na siłownię<br/>- Dostęp do użytku sprzętu na siłowni<br/>- Konsultacja i pomoc trenera"
          price="100 PLN"
          validity="30 Dni"
          buttonText="Kup"
        />
        
        <Pass
          title="Premium"
          description="- To co inne karnety<br/>- Spersonalizowany plan treningowy<br/>- Spersonalizowana dieta"
          price="300 PLN"
          validity="30 Dni"
          buttonText="Kup"
        />
      </div>
    </div>
  );
};

export default Passes;
