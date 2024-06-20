import { Box, Button, Image, Text } from "@chakra-ui/react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Home/Footer";
import { HoverContext } from "../../redux/HoverProvider";
import { color } from "framer-motion";
import { fetchWish } from "../../redux/action";
import { useDispatch } from "react-redux";

const ProductDet = () => {
  let [product, setProduct] = useState({});

  const {size, setSize,bag,setBag,original, setOriginal,bagId,setBagId,setWishlist,setWish,wish} = useContext(HoverContext);

  const [error,setError]=useState(false)

  const [click,setClick]=useState(false)

  const dispatch=useDispatch()

  const nav=useNavigate()
  let param = useParams();

  let fetch = async () => {
    let pro = await axios.get(`http://localhost:3000/products/${param.id}`);
    setProduct(pro.data);
    calculateOriginalPrice(pro.data.cost, pro.data.discount);
  };
 

  var calculateOriginalPrice = (discountedPrice, discountPercentage) => {
    const discountDecimal = discountPercentage / 100;
    const originalPrice = discountedPrice / (1 - discountDecimal);
    setOriginal(originalPrice.toFixed(0));
  };

  useMemo(() => {
    fetch();
    setWish(false)
  }, []);

  const handleSize=(size)=>{
    setSize(prev=>[...prev,size])
    setClick(true)
    setError(false)
  }
  const handleBag=(id)=>{
    if(click){
        setBag(prev=>prev+1)
        setBagId(prev=>[...prev,id])
        setClick(false)

    }else{
        setError(true)
    }
  }

  
  const handleWish=(id)=>{
    setWish(true)
    setWishlist(prev=>[...prev,id])
    
     
  }

  return (
    <>
      <Box margin="20px" display="flex"  boxShadow='xl' p='10px'>
        <Box style={{ height: "600px", width: "50%" }}>
          <img src={product.image} style={{ height: "500px", width: "100%" }} />
          <Text fontWeight="bold" fontSize="5xl" mb="10px">
            {product.brand}
          </Text>
          <Text fontWeight="xl">{product.name}</Text>
        </Box>
        <Box margin="20px" width="50%">
          <Text fontSize="5xl" fontWeight="medium">
            {product.brand}
          </Text>
          <Text fontWeight="medium">{product.name}</Text>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Text fontSize="lg">{product.rating}</Text>
            <FontAwesomeIcon icon={faStar} size="sm" color="gold" /> |
            <Text fontSize="lg">reviews : {product.reviews}</Text>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Text fontSize="lg" fontWeight="medium">
              &#8377;
              {product.cost}
            </Text>
            <Text  fontSize="sm" color="gray.500" textDecoration='line-through'>
               &#8377;{original}
            </Text>
            <Text fontSize="sm" color='green.500'>Discount :{product.discount}%</Text>
          </div>
          <Text fontWeight="medium" color="green">
            Inclusive of all taxes
          </Text>
          <br />

          <Text>More colors</Text>
          <Image
            src={product.image}
            height="80px"
            width="80px"
            borderRadius="20px"
          />
          <br />
          {error && <p style={{color:'red'}}>please select size</p>}
            <Text>Select Size :</Text>
          <Box display='flex' gap='10px' >
            <Button onClick={()=>handleSize('S')}>S</Button>
            <Button onClick={()=>handleSize('M')}>M</Button>
            <Button onClick={()=>handleSize('L')}>L</Button>
            <Button onClick={()=>handleSize('XL')}>XL</Button>
          </Box>
          <Box display="flex" margin="10px" flexDirection="column" gap="10px">
            <Button width="100% " backgroundColor="rgb(87, 182, 219)" onClick={()=>handleBag(product.id)}>
              Add to Bag
            </Button>

            <Button width="100% " backgroundColor="rgb(87, 182, 219)" onClick={()=>handleWish(product.id)} disabled={wish}>
             {wish ? "wishlisted": 'Add to wishlist'}
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProductDet;
