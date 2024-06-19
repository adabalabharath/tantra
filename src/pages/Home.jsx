import React, { useContext } from "react";
import Navbar from "../components/Home/Navbar";
import Men from "../components/Home/Men";
import Category from "../components/Home/Category";
import Corousel from "../components/Home/Corousel";
import Footer from "../components/Home/Footer";
import { HoverContext } from "../redux/HoverProvider";

import Women from "../components/Home/Women";
import { Link } from "react-router-dom";
const Home = () => {
 

  return (
    <>
     

      <Link to='/store'><img
        src="\images\Screenshot 2024-05-30 154006.png"
        style={{
          margin: "15px",
          cursor: "pointer",
          width: "98%",
          marginBottom: "0",
        }}
      /></Link>
      
      <Category />
      <Corousel />
      <Footer />
      <hr />
    </>
  );
};

export default Home;
