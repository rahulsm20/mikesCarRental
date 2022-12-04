import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Form = () => {
  const [data, setData] = useState(
    {
      firstName: "",
      lastName: "",
      car: "",
      phone: "",
      address: "",
      city: "",
      pincode: "",
    },
    []
  );
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  function submit(e) {
    e.preventDefault();
    axios.post("https://mikes-car-rental-server.herokuapp.com//users", {
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      phone: data.phone,
      city: data.city,
      pincode: data.pincode,
      car: data.car,
      email: data.email,
    });
    let navigate = useNavigate();
    let path = "./submit";
    navigate(path);
  }

  return (
    <div className="container m-5 p-5 bg-dark rounded" id="rental-form">
      <h3> Enter your details </h3>
      <hr></hr>
      <form onSubmit={(e) => submit(e)}>
        <div className="form-group">
          <div className="p-2 m-2">
            <label for="firstName">First Name:</label>
            <input
              className="form-control p-1 m-1"
              onChange={(e) => handle(e)}
              value={data.firstName}
              placeholder="Enter first name"
              id="firstName"
              type="text"
              required
            ></input>
          </div>
        </div>
        <div className="p-2 m-2">
          <label>Last Name: </label>
          <input
            className="form-control p-1 m-1"
            onChange={(e) => handle(e)}
            value={data.lastName}
            placeholder="Enter last name"
            id="lastName"
            required
          ></input>
        </div>

        <div className="p-2 m-2">
          <label>Phone number: </label>
          <input
            className="form-control p-1 m-1"
            onChange={(e) => handle(e)}
            value={data.phone}
            placeholder="Enter phone number"
            id="phone"
            type="tel"
            required
          ></input>
        </div>
        <div className="p-2 m-2">
          <label>Car: </label>
          <input
            className="form-control p-1 m-1"
            onChange={(e) => handle(e)}
            value={data.car}
            placeholder="Enter the name of the car you wish to rent"
            id="car"
            required
          ></input>
        </div>
        <div className="p-2 m-2">
          <label>Address: </label>
          <input
            className="form-control p-1 m-1"
            onChange={(e) => handle(e)}
            value={data.address}
            placeholder="address"
            id="address"
            required
          ></input>
        </div>
        <div className="p-2 m-2">
          <label>Pincode: </label>
          <input
            className="form-control p-1 m-1"
            onChange={(e) => handle(e)}
            value={data.pincode}
            placeholder="pincode"
            id="pincode"
            required
          ></input>
        </div>
        <div className="p-2 m-2">
          <label for="cityName">City: </label>
          <input
            className="form-control p-1 m-1"
            onChange={(e) => handle(e)}
            value={data.city}
            placeholder="city"
            id="cityName"
            required
          ></input>
        </div>
        <div className="p-2 m-2">
          <label>Email: </label>
          <input
            className="form-control p-1 m-1"
            onChange={(e) => handle(e)}
            value={data.email}
            placeholder="email address"
            id="email"
            type="email"
            required
          ></input>
        </div>
        <button className="btn form-control">Submit</button>
      </form>
    </div>
  );
};
export default Form;
