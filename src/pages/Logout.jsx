import { Button } from '@chakra-ui/react';
import React from 'react'
import Login from './Login';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
   const navigate=useNavigate()

    console.log(localStorage.getItem('token'))
    const handleLogout = () => {
    localStorage.removeItem("token");
   navigate('/login')
    
  };
  
  return (
    <Button onClick={handleLogout}>Logout</Button>
  )
}

export default Logout