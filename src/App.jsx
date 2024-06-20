import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./pages/Home";
import Navbar from "./components/Home/Navbar";
import Men from "./components/Home/Men";
import Women from "./components/Home/Women";
import Kid from "./components/Home/Kid";
import { HoverContext } from "./redux/HoverProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import { Center } from "@chakra-ui/react";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import PrivateRoute from "./components/PrivateRoute";
import Bag from "./pages/Bag";
import Error from "./pages/Error";
import ProductCard from "./components/Products/ProductCard";
import ProductDet from "./components/Products/ProductDet";

function App() {
  const { hover, women, kid} =
    useContext(HoverContext);

  return (
    <>
      

      <BrowserRouter>
      
          <Navbar />
         
           <Routes>
            <Route index element={<Home/>}/>
            <Route path='/error' element={<Error/>}/>
            <Route path='/card/:id' element={<ProductDet/>}/>
            <Route path="/store" element={<Store/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/wishlist' element={<PrivateRoute><Wishlist/></PrivateRoute>}/>
            <Route path='/bag' element={<Bag/>}/>
        </Routes>
      </BrowserRouter>
     

      
    </>
  );
}

export default App;
