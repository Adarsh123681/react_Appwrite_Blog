import { useState } from 'react';
import { Client, Account } from "appwrite";
import "./SignIn.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';
const client = new Client();


const account = new Account(client);
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65111274195822fe60e6") //PROJECT iD

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
    // Add code to handle sign-in logic (e.g., send data to the server).
    try {
      const createdAcc = await account.createEmailSession(formData.email, formData.password)
      alert("SUBMITTED")
      console.log(createdAcc)
      navigate("/")
    } catch (error) {
      console.log(error)
      return error
    }
  };



  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"

            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"

            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign In</button>
        Not Logged in Got to : <Link to="/signUp" ><button>Sign Up</button></Link>
      </form>
    </div>
  );
};

export default LogIn;
