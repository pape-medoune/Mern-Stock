import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./assets/Navbar";
// import Home from "./Home";
import Sigin from "./assets/Sigin";
import Login from "./assets/Login";
// // import Learn from "./components/Learn";
import Products from "./assets/Products";
import About from "./assets/About";
import Dashboard from "./assets/Dashboard";
import Footer from "./assets/Footer";

function SamaStock() {
  return (
    // <div>
    // 	<Navbar />
    // 	<Home />
    // 	<Products />
    // 	<Learn />
    // 	{/* <Login /> */}
    // </div>
    <>
      <Navbar />
      <Home />
      {/* <Products /> */}
      <Routes>
        {/* <Route path="/home" element={<Home/>}></Route> */}
        <Route path="/products" element={<Products />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sigin" element={<Sigin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default SamaStock;
