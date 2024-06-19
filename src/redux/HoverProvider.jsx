import React, { useState } from 'react'
import { createContext } from 'react'

export const HoverContext=createContext();

const HoverProvider = ({children}) => {

   
    const [search,setSearch]=useState('')
    const [searched,setSearched]=useState(false)
    const [size,setSize]=useState('')
    const [bag,setBag]=useState(0)
    const [original, setOriginal] = useState("");
    const [bagId,setBagId]=useState([])
    const [wishlist,setWishlist]=useState([])
  return (
    <HoverContext.Provider value={{searched,setSearched,search,setSearch,size,setSize,bag,setBag,original, setOriginal,bagId,setBagId,wishlist,setWishlist}}>{children}</HoverContext.Provider>
  )
}

export default HoverProvider