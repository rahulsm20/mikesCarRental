import React, { useState, useEffect, useRef, useMemo } from "react";
import Navbar from "./Navbar";
import MostPopular from "./MostPopular";
import Card from "./Card";
import Footer from "./Footer";
import RangeRover from "../assets/rangerover.jpg";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
const Home = () => {
  const [query, setQuery] = useState("");
  const [cars, setCars] = useState([
    {
      id: "",
      name: "",
      fuel: "",
      mileage: "",
      price: "",
      pic: "",
    },
  ]);
  
  useEffect(()=>{
    fetch("http://localhost:5000/cars")
    .then((res) => res.json())
    .then((jsonRes) => setCars(jsonRes))
    .catch((error) => console.log(error));
  },[]);

  //filtering cars based on search input
  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
    return car.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [cars, query]);

  //mapping filtered cars to card component
  const carDet = filteredCars.map((car) => (
    <Card
      key={car.id}
      name={car.name}
      fuel={car.fuel}
      mileage={car.mileage}
      price={car.price}
      pic={car.pic}
    />
  ));
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <p id="intro">Welcome to Mike's Car Rentals!</p>
        </div>
        <form
          className="form-inline row d-flex flex-direction-row"
          id="search-bar"
        >
          <input
            className="form-control p-3"
            type="search"
            placeholder="Search for cars"
            role="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </form>
        <img id="banner" alt="Range Rover" src={RangeRover}></img>
      </div>
      {/* <MostPopular /> */}
      <div className='most-popular d-flex align-items-lg-center align-items-sm-left justify-content-sm-between'>
          Popular rentals in your area
        <div className="sort-filter dropdown">
          <button className='btn dropdown-toggle' data-bs-toggle='dropdown'>
          Filter 
          </button>
          <ul className='dropdown-menu'>
            <li className='dropdown-item'>SUV</li>
            <li className='dropdown-item'>Sedan</li>
            <li className='dropdown-item'>Hatchback</li>
          </ul>
          </div>
          <div>
          <button className='btn dropdown-toggle' data-bs-toggle='dropdown'>
          Sort 
          </button>
          <ul className='dropdown-menu'>
            <li className='dropdown-item'>$ Low to high</li>
            <li className='dropdown-item'>$ High to low</li>          </ul>
          </div>       
        
    </div>
      <br />
      <div className="row d-flex">{carDet}</div>
      <Footer />
    </div>
  );
};

export default Home;
