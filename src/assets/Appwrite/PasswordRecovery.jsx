import React from 'react'
import { useState } from 'react';
import { Client, Account } from "appwrite";
const client = new Client();
import { Form, Button, Container } from 'react-bootstrap';
import { Email } from '@mui/icons-material';

const account = new Account(client);
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65111274195822fe60e6") //PROJECT iD

const PasswordRecovery = () => {

  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const recoverData = async () => {
    try {
      const promise = account.createRecovery(email, 'http://localhost:5173/logIn');

      promise.then(function (response) {
        alert("success")
        console.log(response); // Success
      }, function (error) {
        alert("failed")
        console.log(error); // Failure
      });
    } catch (error) {

    }
  }
  return (
    <>
      <Container style={{ marginTop: "4rem" }}>
        <Form.Group controlId="search" style={{ display: "flex", justifyContent: "center", margin: "1.5rem" }}>
          <Form.Control
            type="email"
            placeholder="Enter your registerd Email"
            value={email}
            onChange={handleChange}
            style={{ width: "20rem", margin: ".5rem" }}
          />
          <Button onClick={recoverData}>Send email <Email /></Button>
        </Form.Group>
      </Container>
    </>
  )
}
export default PasswordRecovery