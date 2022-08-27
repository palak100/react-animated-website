import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import Footer from "./Footer";

export const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {Sdata.map((val, idx) => {
                return <Card imgsrc={val.imgsrc} title={val.title} key={idx} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Service;
