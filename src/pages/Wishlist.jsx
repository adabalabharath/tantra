import React, { useContext, useEffect, useState } from "react";
import { HoverContext } from "../redux/HoverProvider";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { fetchWish, postBag } from "../redux/action";
import Empty from "./Empty";
import './Wishlist.css'

const Wishlist = () => {
  const data = useSelector((x) => x.wishReducer.data);
  const { wishlist, bagId } = useContext(HoverContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWish(wishlist));
  }, [wishlist]);


  if (data.length == 0) {
    return <Empty />;
  }

  const move=(id)=>{
    dispatch(postBag(id))
  }
  return (
    <Box display='grid' className="wishlist" gridTemplateColumns='auto auto auto auto auto'>
      {data.map((x, index) => {
        return (
           <Box width='200px'height='300px' padding='10px'  style={{cursor:'pointer',margin:'20px',border:'5px solid rgb(58, 168, 211)'}} >
        <Link to={`/card/${x.id}`} key={index}>
        <Image width='100%' height='60%' src={x.image} />
        </Link>
        
        <Box display='flex' alignItems='center'>
          
          <Text fontSize='xs' fontWeight='bold'>{x.rating}</Text>
         <FontAwesomeIcon icon={faStar} size='xs' color='gold'/>|
          <Text fontSize='xs' fontWeight='bold'>{x.reviews} </Text>
        </Box>
        <Text>{x.name}</Text>
        <Text fontWeight='bold' >Brand :{x.brand}</Text>
        <Text>&#8377; {x.cost}</Text>
        {/* <Button className='bag' width='100%' onClick={()=>move(x.id)}>Move to Bag</Button> */}
      </Box>
         
        );
      })}
    </Box>
  );
};

export default Wishlist;
