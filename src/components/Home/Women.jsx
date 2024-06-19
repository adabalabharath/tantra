import { Box, Center, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { HoverContext } from '../../redux/HoverProvider'
import { Link } from 'react-router-dom'

const Women = () => {
    const {women,setWomen}=useContext(HoverContext)
  return (
    <Box onMouseLeave={()=>setWomen(false)} onMouseEnter={()=>setWomen(true)} height='100%'>
       <Center><Text as='b' fontSize='larger' textAlign='center'>Women's wear</Text></Center> 
      <Box display='flex' justifyContent='space-between' gap='25px'>
        <Box display='flex' flexDirection='column'>
        <Link ><Text as='b' color='rgb(58, 168, 211)'>Western Wear</Text></Link>
        <Link>Dresses</Link>
        <Link>Tops</Link>
        <Link>Formal Shirts</Link>
        <Link>Tshirts</Link>
        <Link>Jeans</Link>
        <Link>Trousers & Capris</Link>
        <Link>Shorts & Skirts</Link>
        <Link>Co-ords</Link>
        <Link>Playsuits</Link>
      </Box>
        

    
        </Box>
      <Box>

      </Box>
    </Box>
  )
}

export default Women