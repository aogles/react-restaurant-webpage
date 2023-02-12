import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuData from "./components/Menu";
import Badge from "react-bootstrap/Badge";
import { useState } from "react";
import Categories from "./components/category";
import items from "./items";
import MenuItems from "./items";

const allCategories = [
  "all",
  ...new Set(MenuItems.map((item) => item.category)),
];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [menuCategory, setMenuCategory] = useState("");

  const filterItems = (category) => {
    setMenuCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          menuCategory={menuCategory}
          filterItems={filterItems}
        />
        <MenuItems items={menuItems} />
      </section>
    </main>
  );
};

export default App;
