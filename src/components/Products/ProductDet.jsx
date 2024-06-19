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

  const {size, setSize,bag,setBag,original, setOriginal,bagId,setBagId} = useContext(HoverContext);

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
    
  }, []);

  const handleSize=(size)=>{
    setSize(size)
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
    let arr=[]
    arr.push(id)
    dispatch(fetchWish(arr))
     nav('/wishlist')
  }

  return (
    <>
      <Box margin="20px" display="flex">
        <Box style={{ height: "600px", width: "50%" }}>
          <img src={product.image} style={{ height: "500px", width: "100%" }} />
          <Text fontSize="5xl" fontWeight="medium">
            {product.brand}
          </Text>
          <Text fontWeight="medium">{product.name}</Text>
        </Box>
        <Box margin="20px" width="50%">
          <Text fontSize="5xl" fontWeight="medium">
            {product.brand}
          </Text>
          <Text fontWeight="medium">{product.name}</Text>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Text fontSize="2xl">{product.rating}</Text>
            <FontAwesomeIcon icon={faStar} size="xl" color="gold" /> |
            <Text fontSize="2xl">reviews : {product.reviews}</Text>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Text fontSize="2xl" fontWeight="medium">
              &#8377;
              {product.cost}
            </Text>
            <Text>
              MRP<del style={{ fontSize: "20px" }}> &#8377;{original}</del>
            </Text>
            <Text fontSize="1xl">Discount :{product.discount}%</Text>
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

            <Button width="100% " backgroundColor="rgb(87, 182, 219)" onClick={()=>handleWish(product.id)}>
              Add to wishlist
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProductDet;
