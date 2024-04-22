import { useState } from 'react';
import { Client, Account, ID } from "appwrite";
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form } from "react-bootstrap"

const client = new Client();
const account = new Account(client);

// const url = import.meta.env.VITE_APPWRITE_URL;
// const project = import.meta.env.VITE_APPWRITE_PROJECT_ID

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65111274195822fe60e6")

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
    try {
      await account.create(
        ID.unique(),
        formData.email,
        formData.name,
        formData.password
      )
      alert("Successfully registerd")
      setFormData(" ");
      navigate("/")

    } catch (error) {
      alert("error")
      return error
    }


  };

  return (
    <Container style={{ display: "grid", justifyItems: "center", alignItems: "center", margin: "5rem 0 0 0" }}>

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
          style={{margin : "1rem 0 1rem 0"}}
        />
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit" style={{margin:"1rem"}}>Sign Up</Button>
      </Form>
    </Container>
  );
};

export default SignUp;