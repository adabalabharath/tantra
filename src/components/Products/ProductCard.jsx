import { Box, Image, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({x}) => {

  return (
    <>
    <Link to={`/card/${x.id}`}>
     <Box w='200px' p='10px' h='300px' style={{cursor:'pointer',margin:'20px',border:'5px solid rgb(58, 168, 211)'}} boxShadow='lg' borderRadius='lg' bg='white' >
      
        <Image width='100%' height='60%' src={x.image}/>
        <Box display='flex' alignItems='center'>
          
          <Text fontSize='xs' fontWeight='bold'>{x.rating}</Text>
         <FontAwesomeIcon icon={faStar} size='xs' color='gold'/>|
          <Text fontSize='xs' fontWeight='bold'>{x.reviews} </Text>
        </Box>
        <Text>{x.name}</Text>
        <Text fontWeight='bold' >Brand :{x.brand}</Text>
        <Text>&#8377; {x.cost}</Text>
      </Box>
      </Link>
    </>
   

  )
}

export default ProductCard