import React from 'react';
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>  <Link className="link" to="/">AddBlog</Link>
        </li>
        <li>
          <Link className="link" to="/about">About</Link>
        </li>
        <li>
          <Link className="link" to="/allBlog">All Blog</Link>
        </li>
      </ul>
      <div className="auth-buttons">
        <Link to="/signUp"> <button>Sign Up</button></Link>
        <Link to="/logIn"> <button>Log In</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;