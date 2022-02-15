import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
import Logo from "../assets/wonkylogo.png";


function Navbar() {

    const [openLinks, setOpenLinks] = useState(true)
  
  const toggleNavbar = () => {
      setOpenLinks(!openLinks);
  }; 
  return (
    <div className="navbar">
      <div className="leftSide" >
        <a href="http://wonkybox.nz" > <img src={Logo}  /> </a>
        {/* <div className="hiddenLinks">
        <Link to="/"> Home </Link>
        <Link to="/produce"> Produce </Link>
        <Link to="/farmstead"> Farms </Link>
        <Link to="/recipes"> Recipes </Link>
        <Link to="/contact"> Contact </Link>
        </div> */}
      </div>
      <div className="rightSide" id={openLinks ? "open" : "close"}>
      <div className="hiddenLinks">
        <Link to="/"> Home </Link>
        <Link to="/produce"> Produce </Link>
        <Link to="/farmstead"> Farms </Link>
        <Link to="/recipes"> Recipes </Link>
        <Link to="/contact"> Contact </Link>
        </div>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
