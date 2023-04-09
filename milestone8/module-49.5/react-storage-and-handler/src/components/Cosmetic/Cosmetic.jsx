import React from "react";
import { addToDb, removeFromDb } from "../../utilities/fakedb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;
  const addToCart = (id) => {
    addToDb(id);
  };
  const removeFromCart = (id) => {
    removeFromDb(id);
  };
  return (
    <div className="product">
      <h2>Buy this: {name}</h2>
      <p>Only for: ${price}</p>
      <p>It has ID: {id}</p>
      <button
        onClick={() => addToCart(id)}
        style={{ border: "1px solid gray" }}
      >
        Add to Cart
      </button>
      <button
        style={{ border: "1px solid gray", marginLeft: "2px" }}
        onClick={() => removeFromCart(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default Cosmetic;
