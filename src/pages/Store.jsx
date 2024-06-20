import React, { useEffect } from 'react'
import Filters from '../components/Products/Filters'
import { Box } from '@chakra-ui/react'
import Product from '../components/Products/Product'
import Footer from '../components/Home/Footer'
import Error from './Error'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { getProd } from '../redux/action'
import Pagination from '../components/Products/Pagination'
const Store = () => {
  
   const data=useSelector(s=>s.productReducer.data)
   const nav=useNavigate()
   if(data.length===0){
      return <Error/>
    }

  return (
    <>
    <Box display='flex' bg="gray.100">
    <Box width='25%'>
      <Filters/>
    </Box>
    <Box>
      <Product/>
    </Box>
    
      </Box>
     

      <Footer/>
      </>
  )
}

export default Store