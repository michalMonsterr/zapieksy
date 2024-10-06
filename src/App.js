// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import History from "./components/History";
import Address from "./components/Address";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <History />
      <Address />
      <Reviews />
      <Footer />
    </div>
  );
};

export default App;
