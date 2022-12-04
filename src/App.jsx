import "./App.css";
import Home from "./frontend/components/HomePage/Home";
import Product from "./frontend/components/ProductPage/Product";
import Stores from "./frontend/components/Stores/Stores";
import Error from "./frontend/components/Error";
import { useState, useEffect } from "react";
import axios from "axios";
import Rental from "./frontend/components/RentalPage/Rental";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  // const [cars, setCars] = useState([
  //   {
  //     id: "",
  //     name: "",
  //     fuel: "",
  //     mileage: "",
  //     price: "",
  //     pic: "",
  //   },
  // ]);
  // useEffect(() => {
  //   const getCars = async () => {
  //     try {
  //       await fetch("http://localhost:5000/cars")
  //         .then((res) => res.json())
  //         .then((jsonRes) => setCars(jsonRes));
  //     } catch (error) {
  //         console.error(error)
  //     }
  //   };
  // getCars();
  // },[]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="stores" element={<Stores />} />
        <Route path="/:model" element={<Product />} />
        <Route path="/:model/rental" element={<Rental />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
