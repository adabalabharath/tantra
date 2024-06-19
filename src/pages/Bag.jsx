import { Box, Button, Image, Input, Select, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HoverContext } from "../redux/HoverProvider";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { fetchBag } from "../redux/action";

const Bag = () => {
  const { bag, bagId, size } = useContext(HoverContext);
  const data=useSelector(store=>store.bagReducer.data)
  console.log(data)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const fetch=()=>{
    dispatch(fetchBag(bagId))
  }

  useEffect(() => {
    fetch();
  }, [bagId]);

  console.log(data);

  return (
    <>
      <Button onClick={handleLogout}>Logout</Button>
      <Box>
      {data.map((product, index) =>
        
       {const originalPrice = Math.round(product.cost / (1 - product.discount / 100));    return(
      <Box key={index} margin="20px" width="50%" border='1px solid black' display='flex'gap='30px'  position='relative' height='150px'>
        <Box  height='100%'>
        <Image src={product.image} height='100%' />
        </Box>
        <input type="checkbox"style={{ position: 'absolute', left: '10px', top: '10px' }}/>
        <Box>
      <Text fontWeight="medium">
       {product.brand}
      </Text>
      <Text fontWeight="medium">{product.name}</Text>
      <div style={{ display: "flex", alignItems: "center" }}>
      <Text >{product.rating}</Text>
      <FontAwesomeIcon icon={faStar} size="xl" color="gold" /> |
      <Text fontSize="2xl">reviews : {product.reviews}</Text>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Text  fontWeight="medium">
        &#8377;
        {product.cost}
       </Text>
       <Text>
        MRP<del style={{ fontSize: "20px" }}> &#8377;{originalPrice}</del>
       </Text>
       <Text >Discount : {product.discount}%</Text>
    </div>
    <Text fontWeight="medium" color="green">
      Inclusive of all taxes
    </Text>
    <br />
    </Box>
    <Box display='flex' flexDirection='column' gap='20px' justifyContent='center'>
       <Select >
        <option default  value={size}>{size}</option>
        <option value='S'>S</option>
         <option value='M'>M</option>
          <option value='L'>L</option>
           <option value='XL'>xl</option>
      </Select>
      <Select >
        <option value='Size' default>Quantity</option>
        <option value='1'>1</option>
         <option value='2'>2</option>
          <option value='3'>3</option>
           <option value='4'>4</option>
            <option value='5'>5</option>
      </Select>
    </Box>
  </Box>
)})}

       
       </Box>
    </>
  );
};

export default Bag;
