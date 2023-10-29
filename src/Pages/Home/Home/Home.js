import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Portfolios from "../Portfolio/Portfolios";
import Skills from "../Skills/Skills";
import ContactMe from "../ContactMe/ContactMe";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Portfolios />
      <Skills />
      <ContactMe />
    </div>
  );
};

export default Home;
