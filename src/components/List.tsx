import React, { useState } from "react";
import ListItem from "./ListItem";
import Card from "./Card";

interface Item {
  id: number;
  date: string;
  title: string;
  description: string;
}

interface ListProps {
  items: Item[];
  borderColor: string;
}

const List: React.FC<ListProps> = ({ items, borderColor }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const dateMatch = item.date.toLowerCase().includes(query);
        const descriptionMatch = item.description.toLowerCase().includes(query);

        return titleMatch || dateMatch || descriptionMatch;
      });

      const sortedFilteredItems = filtered.sort((a, b) => {
        if (a.title.toLowerCase().includes(query) && !b.title.toLowerCase().includes(query)) {
          return -1;
        }
        if (!a.title.toLowerCase().includes(query) && b.title.toLowerCase().includes(query)) {
          return 1;
        }
        if (a.date.toLowerCase().includes(query) && !b.date.toLowerCase().includes(query)) {
          return -1;
        }
        if (!a.date.toLowerCase().includes(query) && b.date.toLowerCase().includes(query)) {
          return 1;
        }
        return 0;
      });

      setFilteredItems(sortedFilteredItems);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <Card borderColor={borderColor}>
        <div className="w-[800px] max-w-full h-[450px] overflow-y-auto p-6 space-y-6 custom-scrollbar">
          <div className="mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search by title, date, or description"
              className="w-full p-2 bg-black/30 text-white rounded-md border border-white/50 backdrop-blur-sm shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
          </div>

          {filteredItems.map((item) => (
            <ListItem
              key={item.id}
              date={item.date}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default List;
