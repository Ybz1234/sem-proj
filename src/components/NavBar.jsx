import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/SignUp">Sign up</Link>
      <Link to="/SignIn">Sign in</Link>
      <Link to="/Rate">Rating</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}