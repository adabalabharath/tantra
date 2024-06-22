import { Box, Button, Image, Input, Select, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HoverContext } from "../redux/HoverProvider";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { fetchBag } from "../redux/action";
import Total from "./Total";
import Empty from "./Empty";

const Bag = () => {
  const { bagId, size, setOriginal } = useContext(HoverContext);
  const data = useSelector((store) => store.bagReducer.data);
  const dispatch = useDispatch();
  const nav=useNavigate()
  const fetch = () => {
    dispatch(fetchBag(bagId, size));
  };

  useEffect(() => {
    fetch();
  }, [bagId,dispatch]);
    if (data.length === 0) {
   return <Empty/>
  }

  

  return (
    <Box p="20px" bg="gray.100" minH="100vh">
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {data.map((product, index) => {
          const originalPrice = Math.round(
            product.cost / (1 - product.discount / 100)
          );
          setOriginal(originalPrice);

          return (
            <Box
              key={index}
              m="20px"
              p="20px"
              w={{ base: "100%"}}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="lg"
              bg="white"
              position="relative"
            >
              <Box display="flex" alignItems="center">
                <Image
                  src={product.image}
                  alt={product.name}
                  boxSize="150px"
                  objectFit="cover"
                  mr="20px"
                />
                <Box flex="1">
                  <Text fontWeight="bold" fontSize="xl" mb="10px">
                    {product.brand}
                  </Text>
                  <Text mb="10px">{product.name}</Text>
                  <Box display="flex" alignItems="center" mb="10px">
                    <Text mr="5px">{product.rating}</Text>
                    <FontAwesomeIcon icon={faStar} size="lg" color="gold" />
                    <Text ml="10px" fontSize="sm">
                      Reviews: {product.reviews}
                    </Text>
                  </Box>
                  <Box display="flex" alignItems="center" mb="10px">
                    <Text fontWeight="bold" fontSize="lg" mr="10px">
                      ₹{product.cost}
                    </Text>
                    <Text fontSize="sm" color="gray.500" textDecoration="line-through">
                      ₹{originalPrice}
                    </Text>
                    <Text fontSize="sm" color="green.500" ml="10px">
                      Discount: {product.discount}%
                    </Text>
                  </Box>
                  <Text fontSize="sm" color="green.500">
                    Inclusive of all taxes
                  </Text>
                </Box>
              </Box>
              <Box position="absolute" top="10px" left="10px">
                <Input type="checkbox" />
              </Box>
              <Box mt="20px">
                <Select placeholder="Select size" defaultValue={product.size}>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </Select>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box mt="20px">
        <Total />
      </Box>
    </Box>
  );
};

export default Bag;
