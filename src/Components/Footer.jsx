import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Kamalesh Kumar K. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <a
            target="blank"
            href="https://www.linkedin.com/in/kamalesh-kumar-k-626493278"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "contents",
            }}
          >
            <p>LinkedIn</p>
          </a>
          <a
            target="blank"
            href="https://github.com/Kamalesh-Kumar-K"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "contents",
            }}
          >
            <p>GitHub</p>
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/ig_kamalesh_/"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "contents",
            }}
          >
            <p>Instagram</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
