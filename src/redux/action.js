import axios from "axios"
import { FAILURE_BAG, FAILURE_PRODUCT, REQUEST_BAG, REQUEST_PRODUCT, REQUEST_WISHLIST, SUCCESS_BAG, SUCCESS_PRODUCT, SUCCESS_WISHLIST } from "./actionType"


export const getProductsByCat=(obj)=>async(dispatch)=>{
 try{
   console.log(obj)
    dispatch({type:REQUEST_PRODUCT})
    let data=await axios.get('http://localhost:3000/products',obj)
    console.log(data.data)
    dispatch({type:SUCCESS_PRODUCT,payload:data.data})
 }catch(error){
    dispatch({type:FAILURE_PRODUCT})
 }
}

export const getSearch=(obj)=>async(dispatch)=>{
 try{
   console.log(obj)
    dispatch({type:REQUEST_PRODUCT})
    let data=await axios.get('http://localhost:3000/products',obj)
    console.log(data.data)
    dispatch({type:SUCCESS_PRODUCT,payload:data.data})
 }catch(error){
    dispatch({type:FAILURE_PRODUCT})
 }
}

export const getProd=async(dispatch)=>{
 try{
   
    dispatch({type:REQUEST_PRODUCT})
    let data=await axios.get('http://localhost:3000/products')
    console.log(data.data)
    dispatch({type:SUCCESS_PRODUCT,payload:data.data})
 }catch(error){
    dispatch({type:FAILURE_PRODUCT})
 }
 return data
}

export const filter=(search)=>async(dispatch)=>{
  try{
    dispatch({type:REQUEST_PRODUCT})
    let response=await axios.get('http://localhost:3000/products')
    let filter=response.data.filter(x => {
    return Object.values(x).some(value => value.toLowerCase().includes(search));
  });
  console.log(filter)
    dispatch({type:SUCCESS_PRODUCT,payload:filter})
 }catch(error){
    dispatch({type:FAILURE_PRODUCT})
 } 
}

export const getWomen=async(dispatch)=>{
  try{
    dispatch({type:REQUEST_PRODUCT})
    let response=await axios.get('http://localhost:3000/products')
    let filter=response.data.filter(x=>x.gender==='female')
  console.log(filter)
    dispatch({type:SUCCESS_PRODUCT,payload:filter})
 }catch(error){
    dispatch({type:FAILURE_PRODUCT})
 } 
}

export const rating=(data)=>(dispatch)=>{
   dispatch({type:SUCCESS_PRODUCT,payload:data})
}

export const getPage=(page)=>async(dispatch)=>{
  try{
    dispatch({type:REQUEST_PRODUCT})
    let response=await axios.get(`http://localhost:3000/products?_limit_=10&_page=${page}`)
     console.log(response.data)
 
    dispatch({type:SUCCESS_PRODUCT,payload:response.data})
 }catch(error){
    dispatch({type:FAILURE_PRODUCT})
 } 
}



 export const fetchBag = (bagId,size) =>async(dispatch)=> {
    
    
    dispatch({type:REQUEST_BAG})
    for (let i = 0; i < bagId.length; i++) {
            const response = await axios.get(`http://localhost:3000/products/${bagId[i]}`);
            dispatch({ type: SUCCESS_BAG, payload: response.data, size: size[i] });
        }
    
    
  };

  export const postBag = (bagId) =>async(dispatch)=> {
    
    
   try{
    dispatch({type:REQUEST_BAG})
     const response = await axios.get(`http://localhost:3000/products/${bagId}`);
    

    dispatch({type:SUCCESS_BAG,payload:response.data})

 }catch(error){
    dispatch({type:FAILURE_BAG})
 } 
  };

  export const fetchWish = (bagId) =>async(dispatch)=> {
    
    
    dispatch({type:REQUEST_WISHLIST})
    
   Promise.all(
        bagId.map((id) => axios.get(`http://localhost:3000/products/${id}`))
      )
        .then((responses) => {
          const products = responses.map((response) => response.data);
          dispatch({ type: SUCCESS_WISHLIST, payload: products });
        })
        .catch((error) => {
          dispatch({ type: FAILURE_BAG, payload: error.message });
        });
    
  };