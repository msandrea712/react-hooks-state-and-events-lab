import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [currentItems, setCurrentItems] = useState(items);

  const updateCategory = (category) => {
    switch (category) {
      case "All":
        setCurrentItems(items);
        break;
      default:
        setCurrentItems(items.filter((val) => val.category === category));
    }
  };

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select
          name="filter"
          onChange={(e) => {
            updateCategory(e.target.value);
          }}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {currentItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


