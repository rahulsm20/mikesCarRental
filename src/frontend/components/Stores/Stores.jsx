import React from "react";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import Details from "./Details";
const Stores = () => {
  return (
    <div>
      <Navbar />
      <h3 className="text-center p-4 mx-4 my-2">Our Locations</h3>
      <hr/>
      <Details/>
      <Footer/>
    </div>
  );
};

export default Stores;
