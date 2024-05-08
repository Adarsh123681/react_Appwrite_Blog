import React , {useState} from 'react'
import { account } from "./AppwriteEndpoints/endPoints"
import { Form, Button, Container } from 'react-bootstrap';
import { Email } from '@mui/icons-material';

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const recoverData = async () => {
    try {
      const promise = account.createRecovery(email, 'http://localhost:5173/passwordReset');

      promise.then(function (response) {
        alert("success") 
      }, function (error) {
        alert("failed") 
      });
    } catch (error) {
        alert("internal error")
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