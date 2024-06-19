import { Box, Card, CardBody, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { getProductsByCat } from '../../redux/action'

const HomeProduct = ({products}) => {

  const [params,setSearchParams]=useSearchParams()
  const navigate=useNavigate()

const handleParam=(cat,gen)=>{
setSearchParams({category:cat,gender:gen})
navigate(`/store?category=${cat}&gender=${gen}`);
}  
  return (
  
     <Card style={{cursor:'pointer',margin:'20px',border:'5px solid rgb(58, 168, 211)'}} onClick={()=>handleParam(products.category,products.gender)} >
        <CardBody  >
            <Image src={products.image} width='200px' height='250px'/>
              <Box  display='flex' flexDirection='column' textAlign='center' >
                <Text as='b' >{products.category}</Text>
                <Text as='b' fontSize='x-large'>40-80% off</Text>
                <Text as='b'>shop now</Text>
           </Box>
        </CardBody>
     </Card>
  
  )
}

export default HomeProduct
