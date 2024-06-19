import React, { useContext, useEffect, useState } from "react";
import { Box, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import "../../Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import Men from "./Men";
import { HoverContext } from "../../redux/HoverProvider";
import { useDispatch } from "react-redux";
import {  getProductsByCat, getSearch, getWomen } from "../../redux/action";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { search,setSearch,searched,setSearched ,bag,bagId} = useContext(HoverContext);

  
 const navigate=useNavigate()

  const dispatch = useDispatch();

  const handleGender = (cat) => {

     navigate(`/store?gender=${cat}`)

  };


  const handleChange = (e) => {
    setSearch(e.target.value);
    
  };

  

  useEffect(() => {
    let timer;

    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      let obj={
    params:{
      q:search
    }
  }
      dispatch(getSearch(obj));
      
      if(search){
        navigate(`/store?search=${search}`)
      }
      
    }, 2000);

     return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [search,dispatch]);




  return (
    <Box w="100%" p={4} className="nav" boxShadow="lg">
      <Link to='/'><img
        src="https://clipart.info/images/ccovers/1534043160twitter-t-icon-logo-png.png"
        style={{ width: "30px", height: "30px" }}
       
      /></Link>
      <Box>
        <Box className="cat">
          <button onClick={()=>handleGender('male')}>Men</button>
        </Box>
      </Box>
      <Box>
        <Box className="cat">
        <button onClick={()=>handleGender('female')} >Women</button>
        </Box>
      </Box>
      <Box>
        <Box className="cat">
          <button onClick={()=>handleGender('kid')}>Kid</button>
        </Box>
      </Box>
      <h3>Beauty</h3>

      <InputGroup width="400px">
        <InputLeftElement pointerEvents="none">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </InputLeftElement>
        <Input
          color="skyblue"
          placeholder="search for a Product"
          _placeholder={{ opacity: 0.4, color: "inherit" }}
          onChange={handleChange}
        />
      </InputGroup>

      <Box display="flex" justifyContent="space-evenly" width="20%">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="5px"
        >
          <FontAwesomeIcon icon={faUser} />
        { <Link to='/login'> <h3>Profile</h3></Link>}
        
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="5px"
        >
          <FontAwesomeIcon icon={faHeart} />
         <Link to='/wishlist'><h3>Wishlist</h3></Link> 
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="5px"
        >


          <Box display="flex" flexDirection="row" >
           <Box>
          <FontAwesomeIcon icon={faBagShopping} />
          
          <Link to='/bag'><h3>Bag</h3></Link>
          </Box>
          <Box as='sup' display="flex"
                alignItems="center"
                justifyContent="center"
                width="20px"
                height="20px"
                backgroundColor="skyblue"
                color="white" borderRadius='50%' >
                  
                {bag}
              </Box>
         </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
