import { useState } from "react";
import MenuItem from "./MenuItem";
import menuItems from "../menuItems";

const Order = () => {
  const [order, setOrder] = useState(0);

  const addToCart = () => {
    setOrder((order) => order + 1); //this will update the state on click
  };

  return (
    <div className="container">
      <h2>{MenuItem.name}</h2>
      <p>{MenuItem.price}</p>
    </div>
  );
};

export default Order;
