import { useState } from 'react';
import { Client, Account, ID } from "appwrite";
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form, Modal } from "react-bootstrap"

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

  const [show, setShow] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, password } = formData
    try {
      await account.create(
        ID.unique(),
        email,
        name,
        password
      )
      const verify = await account.createVerification(email);
      console.log("verify", verify)
      alert("Successfully registerd");
      setShow(true)
      navigate("/");

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

      {/* modeal to verificaion */}
      {
        show && <div
          className="modal show"
          style={{ display: 'block', position: 'initial' }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>

      }

    </Container>
  );
};

export default SignUp;