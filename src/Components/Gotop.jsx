import React from "react";
import "./Gotop.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { GoArrowUp } from "react-icons/go";

const Gotop = () => {
  return (
    <AnchorLink offset={100} href="#home">
      <div className="go-top">
        <GoArrowUp size={75} color="white" />
      </div>
    </AnchorLink>
  );
};

export default Gotop;
