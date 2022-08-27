import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Service from "./Services";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<Service />} />
      </Routes>
    </>
  );
};

export default App;
