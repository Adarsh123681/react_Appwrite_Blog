import { useState } from 'react';
import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Client, Account } from "appwrite";
import { Link, useNavigate } from 'react-router-dom';
const client = new Client();

// const url = import.meta.env.VITE_APPWRITE_URL;
// const project = import.meta.env.VITE_APPWRITE_PROJECT_ID

const account = new Account(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65111274195822fe60e6")

const LogIn = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdAcc = await account.createEmailSession(formData.email, formData.password)
      alert("SUBMITTED")
      if (!createdAcc) {
        alert("Invalid credentials")
      }
      alert("User logedIn")
      navigate("/allBlog")
    } catch (error) {
      alert("user not exist")
      return error
    }
  };

  return (
    <Container style={{ display: "grid", justifyItems: "center", alignItems: "center", margin: "5rem 0 0 0" }}>
      <Form onSubmit={handleSubmit} style={{ width: "40rem", backgroundColor: "whitesmoke", padding: "4rem", boxShadow: "2rem black" }}>
        <div className="form-group">
          <h2 style={{text:"center"}}>Welocme Back !!!</h2>
          <Form.Label htmlFor="email">Email:</Form.Label>

          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <Form.Label htmlFor="password">Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={handleChange}

          />
        </div>
        <Button type="submit" style={{marginTop:"1rem"}}>Sign In</Button>
        <div style={{margin:"1rem 0 1rem 0"}}>
          NewUser: <Link to="/signUp" >
            Sign Up </Link>
        </div>
        ForgotPassword :<Link to="/passwordRecovery"> FORGOT PASSWORD </Link>
      </Form>
    </Container>



  );
};

export default LogIn;
