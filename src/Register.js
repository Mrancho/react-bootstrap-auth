import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "https://first-nodejs-mongodb-auth-app.herokuapp.com/register",
      data: { email, password },
    };

    axios(configuration)
      .then((result) => setRegister(true))
      .catch((err) => (err = new Error()));
  };

  return (
    <>
      <h2>Register</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
        {register ? (
          <p className="text-success">You are registered successfully</p>
        ) : (
          <p className="text-danger">You are not registerted</p>
        )}
      </Form>
    </>
  );
}
