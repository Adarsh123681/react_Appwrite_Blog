import { useState } from 'react';
import "./SignUp.css"
import { Client, Account, ID } from "appwrite";
import { useNavigate } from 'react-router-dom';
const client = new Client();
const account = new Account(client);
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65111274195822fe60e6") // Your project ID
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
      console.log("hello");
      await account.create(
        ID.unique(),
        formData.email,
        formData.name,
        formData.password
      )
      setFormData("");
      navigate("/logIn")

    } catch (error) {

      return error
    }


  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;