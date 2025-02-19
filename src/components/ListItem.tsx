import React, { useState } from "react";
import { motion } from "framer-motion";

interface ListItemProps {
  date: string;
  title: string;
  description: string;
}

const ListItem: React.FC<ListItemProps> = ({ date, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-6 bg-black/30 rounded-lg shadow-md flex flex-col border-l-4 border-white/50">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start">
          <p className="text-gray-400 text-sm font-medium text-left">{date}</p>
          <h2 className="text-white text-xl font-semibold mt-2">{title}</h2>
        </div>
        <button
          className="text-white bg-transparent px-3 py-1 border border-white/50 rounded-md cursor-pointer flex items-center"
          onClick={toggleExpansion}
        >
          {isExpanded ? (
            <span className="material-icons md-48 align-middle">arrow_upward</span>
          ) : (
            <span className="material-icons md-48 align-middle">arrow_downward</span>
          )}
        </button>
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isExpanded ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <p className="text-gray-300 mt-3 leading-relaxed">{description}</p>
      </motion.div>
    </div>
  );
};

export default ListItem;
