import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import data from "./menuItems";
import MenuList from "./components/MenuList";
import Order from "./components/Order";

// const fullMenu = items.map((item) => item.category);
// new Set();

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [category, setCategory] = useState("appetizers");
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

  const addToCart = (menuItem, name, price) => {
    const updatedCart = [...cart, menuItem, name, price];
    setCart(updatedCart);
    setOrder(updatedCart);

    //setCart([...cart, menuItem]);
  };

  // returns an array of just categories
  let categories = menuItems.map((menuItem) => menuItem.category.toLowerCase()); // ['appetizers', 'appetizers', 'appetizers', 'hibachi', 'hibachi', 'hibachi', 'sushi rolls', 'sushi rolls','sushi rolls'];

  // create a set of unique category values
  categories = new Set(categories); // returns a set of unique values, includes 'appetizers', 'sushi rolls', and 'hibachi' once each

  categories = [...categories]; // ['appetizers', 'sushi rolls', 'hibachi'];

  const categoryButtons = categories.map((category) => (
    <button key={category} onClick={() => setCategory(category)}>
      {category}
    </button>
  ));

  const filteredMenuItems = menuItems.filter(
    (menuItem) => menuItem.category.toLowerCase() === category
  );

  return (
    <main>
      <section className="menu section">
        {categoryButtons}
        <h2>Menu List</h2>
        <MenuList menuItems={filteredMenuItems} addToCart={addToCart} />
      </section>
      <section className="Cart">
        <h2>Cart</h2>
        <Order cart={cart} addToCart={addToCart} />
      </section>
    </main>
  );
};

export default App;
