import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.instagram.com/accounts/login/?next=/wonkybox.nz/" >  <InstagramIcon /> </a>
         {/* <TwitterIcon />  */}
         <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fwonkybox%2Fposts" >  <FacebookIcon /> </a>
         {/* <LinkedInIcon /> */}
      </div>
      <p> &copy; 2022 wonkybox.nz</p>
    </div>
  );
}

export default Footer;