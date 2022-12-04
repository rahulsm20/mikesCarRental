import React from "react";
import ig from "../assets/igicon.webp";
import twit from "../assets/twitter.webp";
const Footer = () => (
  <footer className="footer" id="footer">
    <nav className="navbar navbar-expand-lg d-flex align-items-center justify-content-center">
      <ul>
        <li> Get in touch with us on social media!</li>
        <li>
          <a href="https://instagram.com">
            <img src={ig} className="icon"></img>
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <img src={twit} className="icon"></img>
          </a>
        </li>
      </ul>
      <br/>
    </nav>
  </footer>
);

export default Footer;
