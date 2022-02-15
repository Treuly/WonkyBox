import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import Logo from "../assets/Logo3.png";

function Footer() {
  return (
    <div className="footer">
      <div className="imgFooter">
        <img
          src={Logo}
          width="250"
          height="100"
          className="d-inline-block align-top"
          alt=""
        />
      </div>
      <div className="socialMedia">
        <a href="https://www.instagram.com/accounts/login/?next=/wonkybox.nz/">
          {" "}
          <InstagramIcon />{" "}
        </a>
        <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fwonkybox%2Fposts">
          {" "}
          <FacebookIcon />{" "}
        </a>
      </div>
      <p> &copy; 2022 wonkybox.nz</p>
    </div>
  );
}

export default Footer;
