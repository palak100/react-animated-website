import React from "react";
import { NavLink } from "react-router-dom";
import aboutimg from "../src/images/about.svg";
import Common from "./Common"

export const About = () => {
  return (
    <Common 
      name="Welcome To About Page"
      imgsrc={aboutimg}
      visit="/contact"
      btnname="Contact Now"
    />
  );
};

export default About;
