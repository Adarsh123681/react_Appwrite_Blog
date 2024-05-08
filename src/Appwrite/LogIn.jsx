import { useState } from 'react';
import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { account } from "./AppwriteEndpoints/endPoints"
 
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
    <Container style={{ display: "grid", justifyItems: "center", alignItems: "center", marginTop: "5rem" }}>
      <Form onSubmit={handleSubmit} style={{ width: "40rem", backgroundColor: "whitesmoke", padding: "4rem", boxShadow: "2rem black", margin: "auto" }}>
        <div className="form-group">
          <h2 style={{ text: "center" }}>Welocme Back !!!</h2>
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
        <Button type="submit" style={{ marginTop: "1rem" }}>Sign In</Button>
        <div style={{ margin: "1rem 0 1rem 0" }}>
          NewUser: <Link to="/signUp" style={{ textDecoration: "none" }}>
            Sign Up </Link>
        </div>
        ForgotPassword :<Link to="/passwordRecovery" style={{ textDecoration: "none" }}> FORGOT PASSWORD </Link>


      </Form>
    </Container>



  );
};

export default LogIn;
