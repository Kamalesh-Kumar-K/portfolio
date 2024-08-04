import React from "react";
import "./Hero.css";
import profile from "../assets/Profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../assets/resume.pdf";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img
        src={profile}
        alt="Kamalesh Kumar K"
        style={{ height: "15rem", width: "15rem", borderRadius: "50%" }}
      />
      <h1>
        <span>I'm Kamalesh Kumar K</span>, frontend developer and undergraduate
        student based in India
      </h1>
      <p>
        I'm a front-end developer passionate about creating responsive and
        dynamic user-interface websites, Currently student at VIT Chennai.
      </p>
      <div className="hero-action">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>
        <a
          href={resume}
          download="Kamalesh Kumar K.pdf"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "contents",
          }}
        >
          <div className="hero-resume">My resume</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
