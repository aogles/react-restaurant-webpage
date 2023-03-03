import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import addToCart from "../App";

const Order = ({ cart }) => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // save the complete order to localStorage
  //creates componenent that submits the order to local data, order is set to an object of all the required order information
  //get items, will need to use parse to turn stringified array into normal array that can be used
  //strigify will make strigified array in order to store in local storage
  //.push is used to push order componnenets into the orders being stored

  const submitOrder = () => {
    const order = {
      email,
      fullname,
      phoneNumber,
      cart,
    };

    const orders = localStorage.getItem("orders")
      ? JSON.parse(localStorage.getItem("orders"))
      : [];

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));
  };

  const cartItems = cart.map((item, index) => (
    <div key={index}>
      {item.name}
      {item.price}
    </div>
  ));

  // const subTotal = cart.reduce(
  //   (acc, i) => acc + parseFloat(i.price.slice(1)),
  //   0

  //const initialValue = 0;
  //const sumWithInitial = array1.reduce(
  //(accumulator, currentValue) => accumulator + currentValue,
  // initialValue
  //current value is the first Index/price in the array, after removing $, use parseFlaot(bc of decimal), map through prices of cart and return the sum , initial value in cart is set to 0
  //reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element
  //onSubmit doe not go in the button, onSubmit wil call the function
  const subTotal = cart.reduce(
    (accumulator, i) => accumulator + parseFloat(i.price),
    0
  );
  //
  return (
    <>
      <div> Subtotal: ${subTotal} </div>
      {cartItems}

      <Form onSubmit={submitOrder}>
        <div className="container"></div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          {email}
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />

          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Phone Number"
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default Order;
