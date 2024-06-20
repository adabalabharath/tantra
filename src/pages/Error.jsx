import { Box, Button, Center, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getProd } from '../redux/action'
import { useDispatch } from 'react-redux'

const Error = () => {
  const dispatch=useDispatch()
  const nav=useNavigate()
  

  return (
    <Box bg="gray.100">
        <Center display='flex' flexDirection='column'>
        <Text  fontSize='9xl'>404</Text>
        <Text fontWeight='400' fontSize='3xl'>No Products Found</Text><br/>
        <Button backgroundColor=" rgb(58, 168, 211)" onClick={handle}>Go back to Store</Button>
        </Center>
    </Box>
  )
}

export default Error