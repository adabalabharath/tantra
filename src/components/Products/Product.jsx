import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, Center, Text } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import { useLocation, useSearchParams } from 'react-router-dom'
import {  getPage, getProductsByCat, getSearch } from '../../redux/action'
import { HoverContext } from '../../redux/HoverProvider'
import Error from '../../pages/Error'
import Pagination from './Pagination'

const Product = () => {
   
   
   const data=useSelector(store=>store.productReducer.data)
   
  const location=useLocation()

   const dispatch=useDispatch()

   const [searchParams] = useSearchParams();
   
    let obj={
      params:{
         category: searchParams.getAll("category"),
         gender:searchParams.get('gender'),
         brand:searchParams.getAll('brand'),
         _sort:searchParams.get('order')&&'cost',
         
         _order:searchParams.get('order')
      }
    }

    const searchQuery=searchParams.get('search')

      let sobj = {
        params: {
          q: searchQuery,
        },
      };
   useEffect(()=>{
     
     if (searchQuery) {
      dispatch(getSearch(sobj));
    } else {
      dispatch(getProductsByCat(obj))
      
   }},[location.search])

    if(data.length===0){
      return <Error/>
    }
   
  return (
    <>
    <Box display='flex' flexWrap='wrap' justifyContent='space-between'   >
    { data.map((x)=>{
        return(<Box key={x.id}>
             <ProductCard x={x}/>
        </Box>)
    })}

    </Box>
   
     </>
  )
}

export default Product