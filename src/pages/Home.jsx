import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Homemain from "../components/Home/Homemain";



const Home = () => {
  return (
    <div>
      <Navbar  hidePricingContact={true}/>
      <Homemain />

    </div>
  );
};

export default Home;
