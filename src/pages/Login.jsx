import { Box, Button, Center, FormLabel, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { HoverContext } from '../redux/HoverProvider'
import Logout from './Logout'
import Store from './Store'

const Login = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {token,setToken}=useContext(HoverContext)
    const location=useLocation()
    console.log(location)
    const nav=useNavigate()

    const handleSubmit=(e)=>{
      e.preventDefault();
      axios.post('https://reqres.in/api/login',{email,password}).then((res=>
       { 
        localStorage.setItem('token',res.data.token)
        if(!location.state){
            nav('/store')
        }
        nav(location.state)
        }
        
      )).catch(error=>{
        document.getElementById('err').innerText='wrong credentials'
        nav('/store')})
    }

   
   const handleLogout=()=>{
    localStorage.removeItem('token')
    nav('/login')
   }
   

    if(localStorage.getItem('token')){
       return <Button onClick={handleLogout}>logout</Button>
    }

  return (
    <Center margin='50px' >
    <Box width='30%' border='5px solid rgb(87, 182, 219)' padding='30px' borderRadius='30px' display='flex' flexDirection='column' gap='20px'>
      <Box>
        <FormLabel>UserName</FormLabel>
        <Input type='email' placeholder='username' onChange={(e)=>setEmail(e.target.value)}/>
        </Box>

        <Box>
        <FormLabel>Password</FormLabel>
        <Input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
        </Box>
        <Box >
        <Button onClick={handleSubmit} width='100%' >Login</Button>
        </Box>
        <Text id='err'></Text>
        <Center textDecoration='underline'> <Link to=''>Don't have account? signUp here</Link></Center>
    </Box></Center>
  )
}

export default Login