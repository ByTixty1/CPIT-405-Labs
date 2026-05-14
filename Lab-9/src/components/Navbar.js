import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="../../index.html" style={{marginRight:"8px",background:"rgba(255,255,255,0.15)",borderRadius:"4px",padding:"6px 12px",fontSize:"0.85rem"}}>← Labs Home</a>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
