import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import "../styles/Sidebar.css";


const Sidebar = ({toggleNavbar, openLinks}) => {
  return (
    <>
    <aside 
    className="sidebarContainer"
    onClick={toggleNavbar} 
    id={openLinks ? "open" : "close"}>

    <button className="closeButton" onClick={toggleNavbar}>
        <CloseIcon />
    </button>

        <div className="sideBarMenu">
            <div className="links">
                <Link to="/" onClick={toggleNavbar} className="sideLinks"> Home </Link>
                <Link to="/produce" onClick={toggleNavbar} className="sideLinks"> Produce </Link>
                <Link to="/farmstead" onClick={toggleNavbar} className="sideLinks"> Farms </Link>
                <Link to="/recipes" onClick={toggleNavbar} className="sideLinks"> Recipes </Link>
                <Link to="/contact" onClick={toggleNavbar} className="sideLinks"> Contact </Link>
            </div>
        </div>
    
        
    </aside>
    
    </>
  )
}

export default Sidebar