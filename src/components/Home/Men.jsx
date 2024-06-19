import { Box, Center, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'

import { HoverContext } from '../../redux/HoverProvider'
import { useSearchParams } from 'react-router-dom'

const Men = () => {
    const {hover,setHover}=useContext(HoverContext)

    const [query,setQuery]=useState('')
    const [params,setParams]=useSearchParams()


    const click=(e)=>{
      setQuery(e.target.value)
      let obj={
        params:{
          q:query
        }
      }
    }
  return (
    <Box onMouseLeave={()=>setHover(false)} onMouseEnter={()=>setHover(true)} height='100%' >
       <Center><Text as='b' fontSize='larger' textAlign='center'>Men's wear</Text></Center> 
      <Box display='flex'  gap='25px'>
        <Box display='flex' flexDirection='column'>
      <Text as='b' color='rgb(58, 168, 211)'>Topwear</Text>
      <Text onClick={click} value='shirt'>Shirts</Text>
      <Text value='jacket'>Jackets</Text>
       <Text value='sweat-shirt'>Sweat-shirts</Text>
      <Text value='trousers'>Trousers</Text>
      </Box>

        <Box display='flex' flexDirection='column'>
        <Text as='b'color='rgb(58, 168, 211)'>Indian & Festive Wear</Text>
        <Text >ShirKurtas & Kurta Sets</Text>
        <Text>Sherwanis</Text>
        <Text>Nehru Jackets</Text>
        <Text>Dhotis</Text>
        <Text as='b' color='rgb(58, 168, 211)'>Innerwear & Sleepwear</Text>
       <Text>Briefs & Trunks</Text>
       <Text>Boxers</Text>
       <Text>vests</Text>
       <Text>Sleepwear & Loungewear</Text>


        
      </Box>

    
        </Box>
      <Box>

      </Box>
    </Box>
  )
}

export default Men