import React, { useContext } from 'react'
import { HoverContext } from '../../redux/HoverProvider'
import { Box, Center, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Kid = () => {
    const {kid,setKid}=useContext(HoverContext)
 return (
    <Box  onMouseEnter={()=>setKid(true)} onMouseLeave={()=>setKid(false)} height='100%'>
       <Center><Text as='b' fontSize='larger' textAlign='center'>Kid's wear</Text></Center> 
      <Box display='flex' justifyContent='space-between' gap='25px'>
        <Box display='flex' flexDirection='column'>
        <Link ><Text as='b' color='rgb(58, 168, 211)'>T-Shirts</Text></Link>
        <Link>Shirts</Link>
        <Link>Shorts</Link>
        <Link>Jeans</Link>
        <Link>Trousers</Link>
        <Link>Jeans</Link>
        <Link>Clothing Sets</Link>
        <Link>Ethnic Wear</Link>
        <Link>Party Wear</Link>
        <Link>Innerwear & Thermals</Link>
      </Box>
        

    
        </Box>
      <Box>

      </Box>
    </Box>
  )
}

export default Kid