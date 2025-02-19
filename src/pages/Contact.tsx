import React from "react";
import Card from "../components/Card";

const Contact: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <Card borderColor="white/30">
        <h2 className={`text-white text-2xl font-bold`}>Kontakt</h2>

        <div className="text-gray-300 mt-2">
          <span className="material-icons md-48 align-middle">location_on</span>{" "}
          Konopnickiej 13, Ruda Śląska, Polska <br />
          <span className="material-icons md-48 align-middle">call</span> +48 883
          687 560 <br />
          <span className="material-icons md-48 align-middle">mail</span>{" "}
          ciezarowyklubsportowyslavia@op.pl
        </div>
      </Card>
    </div>
  );
};

export default Contact;
