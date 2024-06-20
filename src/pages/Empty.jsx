import { Box, Button, Center, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Empty = () => {
  return (
    <Center display='flex'flexDirection='column' >
        <Image src='https://cdn.dribbble.com/users/2022451/screenshots/5557745/empty_bag.gif' width='300px%' height='300px' margin='50px' />
        <Text fontSize='1xl' fontWeight='bold' >Feels so light here,</Text>
        <Text marginBottom='20px'>There is no items in your bag,add items to wishlist</Text>
        <Link to='/store'><Button border='1px solid skyblue' color='black'>Add items to wishlist</Button></Link>

    </Center>
  )
}

export default Empty