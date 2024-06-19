import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPage } from '../../redux/action'
import { Button } from '@chakra-ui/react'

const Pagination = () => {
    const data=useSelector(store=>store.data)
    const dispatch=useDispatch()

   
   
  return (
    <div>
      <center> {buttons()}</center>
    </div>
  )
}

export default Pagination