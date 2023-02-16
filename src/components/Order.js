import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import addToCart from "../App";

const Order = ({ cart }) => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [price, setPrice] = useState("");

  const sumbitOrder = (order) => {
    // save the complete order to localStore
    {
      email, fullname, phoneNumber, cart;
    }
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

  const subTotal = cart.reduce(
    (accumulator, i) => accumulator + parseFloat(i.price),
    0
  );
  //
  return (
    <>
      <div> Subtotal: ${subTotal} </div>
      {cartItems}
      <Form>
        <div className="container"></div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div></div>
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
          <Form.Control type="number" placeholder="Phone Number" />
          <Button
            onClick={() => sumbitOrder(cart)}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default Order;
