import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import addToCart from "../App";

const Order = () => {
  const [order, setOrder] = useState(0);
  setOrder(updatedCart);
  return (
    <Form>
      <div className="container"></div>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <div></div>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Full Name"></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Phone Number" />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Order;
