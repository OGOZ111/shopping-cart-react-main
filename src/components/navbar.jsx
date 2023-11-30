import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import {User} from "phosphor-react"

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/user"><User size={32} /></Link>
        <Link to="/"> Shop </Link>
        <Link to="/about"> About </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
