import { Box, Button, Card, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { HoverContext } from '../redux/HoverProvider'

const Total = () => {
  const data=useSelector(store=>store.bagReducer.data)

  const {bag,original}=useContext(HoverContext)

  let platformFee=20
  let shipping=100
  let total=data.reduce((x,y)=>x+y.cost,0)
  if(total>500){
    shipping=0
  }
  
 
  return (
    <Card margin='50px'  justifyContent='center' >
        <Text>
            Price details {bag} items
        </Text>
         <Box display='flex' justifyContent='space-between'>
        <Text>Total MRP </Text>
        {bag===0?'0':<Text>&#8377;{original} </Text>}
        </Box>
        <Box display='flex' justifyContent='space-between'>
        <Text>Discount</Text>
        {bag===0?'0':<Text color='green'>-&#8377;{total-original} </Text>}
        </Box>
        <Box display='flex' justifyContent='space-between'>
        <Text>Tantra Mrp  </Text>
        {bag===0?'0':<Text>&#8377;{total}</Text>}
        </Box>
        <Box display='flex' justifyContent='space-between'>
        <Text>Platform fee </Text>
        {bag===0?'0':<Text>&#8377;{platformFee}</Text>}
        </Box>
        <Box display='flex' justifyContent='space-between'>
        <Text>Shipping fee </Text>
        
        {bag===0?'0':<Text color='green'>{total>500 ?'free':'100'}</Text>}
        </Box>
        {total>500 ? <Text fontSize='xs'>Free shipping for u</Text>:''}
        <hr/>
        <Box display='flex' justifyContent='space-between'>
        <Text>Total Amount </Text>
        {bag===0?'0':<Text>&#8377;{platformFee+total+shipping}</Text>}
        </Box>


        <Button disabled={total===0}>Place order</Button>
    </Card>
  )
}

export default Total