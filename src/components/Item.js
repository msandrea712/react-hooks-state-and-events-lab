import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState([]);
  const updateCart = (name) => {
    const existingItem = cart.find((val) => val === name);
    if (!existingItem) {
      setCart((prevState) => [...prevState, name]);
    } else {
      setCart((prevState) => prevState.filter((item) => item !== name));
    }
  };

  if (cart.indexOf(name) > -1) {
    return (
      <li className="in-cart">
        <span>{name}</span>
        <span className="category">{category}</span>
        <button className="add" onClick={() => updateCart(name)}>
          Remove From Cart
        </button>
      </li>
    );
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => updateCart(name)}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;

