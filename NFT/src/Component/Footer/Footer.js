import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <h2 id="logo">
          Pak<span>Art</span>
        </h2>
        <div className="footer-items">
          <div className="marketplace">
            <h2>Marketplace</h2>
            <a href="#">All NFTs</a>
            <a href="#">Arts</a>
            <a href="#">Music</a>
            <a href="#">Painting</a>
            <a href="#">Domain Names</a>
          </div>
          <div className="terms">
            <h2>Terms </h2>
            <a href="#">Who can join?</a>
            <a href="#">Restrictions</a>
            <a href="#">FAQs</a>
          </div>
          <div className="company">
            <h2>Company</h2>
            <a href="#">About</a>
            <a href="#">Careers</a>
          </div>
          <div className="contact">
            <h2>Contact</h2>
            <p>Cell: 03495747188</p>
            <p>Email: info@pakart.com</p>
          </div>
        </div>
        <div className="rights-p">
          <h3>© All rights reserved</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
