import { useState } from 'react';
import { account } from './AppwriteEndpoints/endPoints'
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form } from "react-bootstrap"
import { ID } from "appwrite"

const SignUp = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, password } = formData
    try {
      if (!email, !name, !password) {
        alert("Please fill all credentials")
      }
      await account.create(
        ID.unique(),
        email,
        name,
        password
      )
      await account.createVerification(email);
      alert("Successfully registerd");
      navigate("/");

    } catch (error) {
      alert("error")
    }
  };


  return (
    <Container style={{ display: "grid", justifyItems: "center", alignItems: "center", marginTop: "5rem" }}>

      <Form onSubmit={handleSubmit} style={{ width: "40rem", backgroundColor: "whitesmoke", padding: "4rem", boxShadow: "2rem black" }}>
        <h2>Register YourSelf Here</h2>
        <Form.Control
          type="text"
          name="name"
          placeholder="name"
          valu={formData.name}
          onChange={handleChange}
        />
        <Form.Control
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{ margin: "1rem 0 1rem 0" }}
        />
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit" style={{ margin: "1rem" }}>Sign Up</Button>
      </Form>
    </Container>
  );
};

export default SignUp;