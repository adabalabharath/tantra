import React, { useContext, useState } from 'react'
import { HoverContext } from '../redux/HoverProvider'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Box, Image, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Wishlist = () => {
   const data=useSelector(x=>x.wishReducer.data)
   console.log(data)
  return (
    <>
    {data.map((x,index)=>{
      return (
    
    <Link to={`/card/${x.id}`} key={index}>
     <Box width='200px' padding='10px' height='300px' style={{cursor:'pointer',margin:'20px',border:'5px solid rgb(58, 168, 211)',borderRadius:'20px'}} >
      
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
    
    
    
    )})}
    </>
  )
}

export default Wishlist