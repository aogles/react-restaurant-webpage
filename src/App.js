import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
  const [order, setOrder] = useState("");

  const addToCart = (menuItem) => {
    const updatedCart = [...cart, menuItem];
    setCart(updatedCart);

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
      <Navbar bg="light" expand="lg">
        <Container>
          <img
            className="JOT-logo"
            href="home"
            src="https://images.getbento.com/accounts/79e2f400b6ff9283f8062968842f8dbc/media/images/37832logo.png"
          ></img>
          <Navbar.Brand href="#home">Joy of Tokyo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  {categoryButtons}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className="menu section">
        <h2>Menu Items</h2>
        <MenuList menuItems={filteredMenuItems} addToCart={addToCart} />
      </section>
      <aside className="Order">
        <section className="Cart">
          <h2>Cart</h2>
          <Order cart={cart} order={order} />
        </section>
      </aside>
    </main>
  );
};

export default App;
