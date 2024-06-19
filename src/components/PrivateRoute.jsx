import React from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from '../pages/Home'

const PrivateRoute = ({children}) => {

 const location = useLocation();
 console.log(location)

  console.log(localStorage.getItem('token'))
 return (!localStorage.getItem('token'))? <Navigate to='/login'state={location.pathname}/>:children
  
}

export default PrivateRoute