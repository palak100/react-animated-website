import React from "react";
import { useState } from "react";
import Footer from "./Footer";

export const Contact = () => {
  const [data, setdata] = useState({
    fullname: " ",
    number: " ",
    address: " ",
    email: "",
    about: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setdata((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="m-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto"></div>
        </div>
        <form action="" onSubmit={formSubmit}>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              name="fullname"
              value={data.fullname}
              onChange={inputEvent}
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Mobile Number
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              name="number"
              value={data.number}
              onChange={inputEvent}
              placeholder="Enter Mobile number"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              name="address"
              value={data.address}
              onChange={inputEvent}
              placeholder="Enter your full address"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              name="email"
              value={data.email}
              onChange={inputEvent}
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Tell about Yourself
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              name="about"
              value={data.about}
              onChange={inputEvent}
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-outline-primary">
            Submit
          </button>
        </form>
      </div>
      <br />
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
