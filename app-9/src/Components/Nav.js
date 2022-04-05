import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/signup">Signup</Link>
        <Link to="/details">Details</Link>
      </nav>
    </div>
  );
}
