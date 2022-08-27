import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from "../src/images/home.svg";
import Common from "./Common";


export const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgsrc={homeimg}
        visit="/service"
        btnname="Get Started"
      />
      
    </>
  );
};

export default Home;
