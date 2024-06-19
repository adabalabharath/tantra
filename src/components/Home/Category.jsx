import React, { useMemo } from 'react'
import { useState } from 'react'
import HomeProduct from './HomeProduct'
import axios from 'axios'

import { AbsoluteCenter, Box, Center, Flex, Image, Text } from '@chakra-ui/react'

const Category = () => {
  const [data,setData]=useState([])

  const fetch=async()=>{
    let response=await axios.get('http://localhost:8080/display')
    setData(response.data)

  }

  useMemo(()=>{
    fetch()
  },[])

  return (
    <Box margin='15px'>
        <Center>
        <Text as='b' fontSize='3xl' textAlign='center'>Shop by Category</Text>
        </Center>
        <Box display='flex' flexWrap='wrap' justifyContent='space-evenly'>
         {data.map((x)=>{
            return(<Box key={x.id} margin='20px'>
            <HomeProduct products={x}/>
            </Box>)
         })}
         </Box>

         <a href='https://play.google.com/store/search?q=myntra&c=apps' ><Image src='images\Screenshot 2024-05-30 181120.png' width='100%'/></a>

    </Box>
  )
}

export default Category