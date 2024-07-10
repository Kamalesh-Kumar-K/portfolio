import React from "react";
import "./About.css";
import profile from "../assets/Profile.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="Kamalesh Kumar K" />
        </div>
        <dib className="about-right">
          <div className="about-para">
            <p>
              I am a front-end developer with a passion for crafting responsive
              and dynamic user interfaces that elevate user experiences. With a
              blend of creativity and technical expertise, I bring a keen eye
              for design and a deep understanding of web development principles
              to every project. My adaptability and collaborative spirit make me
              an asset in diverse programming environments.{" "}
            </p>
            <p>
              {" "}
              I am eager to secure an internship where I can contribute to
              innovative projects and advance my professional growth in the tech
              industry.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }}></hr>
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }}></hr>
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "40%" }}></hr>
            </div>
          </div>
        </dib>
      </div>
    </div>
  );
};

export default About;
