import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
import "../styles/Sidebar.css";
import Logo from "../assets/wonkylogo.png";


function Navbar({ toggleNavbar }) {

  return (
    <div className="navbar">
      <a href="/" >
        <img src={Logo} className="navLogo" />
      </a>
      <div className="hiddenLinks">
        <Link to="/" className="navLinks"> Home </Link>
        <Link to="/produce" className="navLinks"> Produce </Link>
        <Link to="/farmstead" className="navLinks"> Farms </Link>
        <Link to="/recipes" className="navLinks"> Recipes </Link>
        <Link to="/contact" className="navLinks"> Contact </Link>
      </div>
      <button onClick={toggleNavbar}
        className="hamburger">
        <ReorderIcon />
      </button>
    </div>

  );
}

export default Navbar;
