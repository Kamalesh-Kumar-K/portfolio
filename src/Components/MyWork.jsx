import React from "react";
import "./MyWork.css";
import mywork_data from "../assets/mywork_data";
import arrow_icon from "../assets/arrow_icon.svg";
const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a href={work.livelink} target="_blank">
              <img
                key={index}
                src={work.w_img}
                style={{
                  width: "400px",
                  height: "280px",
                  borderRadius: "10px",
                }}
              />
            </a>
          );
        })}
      </div>
      <a
        href="https://github.com/Kamalesh-Kumar-K?tab=repositories"
        target="blank"
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "contents",
        }}
      >
        <div className="mywork-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </div>
      </a>
    </div>
  );
};

export default MyWork;
