import { Box, Input, TagLabel } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import "../../Filters.css";
import styled from "styled-components";
import axios from "axios";
import { rating } from "../../redux/action";


const Filters = () => {
  let data=useSelector(s=>s.productReducer.data)
 
  const [searchParams,setSearchParams] = useSearchParams();
 const initialGender = searchParams.getAll("gender") || [];
  const initialCat = searchParams.getAll("category") || [];
  const initialPrice = searchParams.getAll("order");
  const initialBrand=searchParams.getAll('brand')||[];

  const [gender, setGender] = useState(initialGender || []);

  const [category, setCategory] = useState(initialCat || []);

  const [order, setOrder] = useState(initialPrice || "");

  const [brand,setBrand]=useState(initialBrand || [])

  const [d,setD]=useState([])
  const [rat,setRat]=useState(0)
  const dispatch = useDispatch();

  const getProducts=async()=>{
 try{
  
    let data=await axios.get('http://localhost:3000/products')
    
    setD(data.data)
    
 }catch(error){
   
 }
}

  useEffect(()=>{
    getProducts()
    console.log(d)
  },[])



  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleOrder=(e)=>{
    setOrder(e.target.value)
  }

  const handleCat = (e) => {
     let newCat = [...category];
    if (newCat.includes(e.target.value)) {
      newCat = newCat.filter((x) => x !== e.target.value);
      setCategory(newCat);
    } else {
      newCat.push(e.target.value)
      setCategory(newCat);
    }
  };

  const handleBrand = (e) => {
    let newBrand=[...brand]
    console.log(newBrand)
    if (newBrand.includes(e.target.value)) {
      newBrand = newBrand.filter((x) => x !== e.target.value);
      setBrand(newBrand);
    } else if (!brand.includes(e.target.value)) {
      newBrand.push(e.target.value)
      setBrand(newBrand);
    }
  };

  const handle=(num)=>{
    setRat(num)
     data=data.filter(x=>x.rating>=num).sort((a,b)=>b.rating-a.rating)
     dispatch(rating(data))
  }

  useEffect(()=>{
    let obj={  
        gender, 
        brand,
        category     
    } 
    if (order) {
      obj.order = order;
    } 

    if(rat){
      handle()
    }
   
    setSearchParams(obj)
  },[gender, category, brand,order,rat])

  return (
    <Box margin="30px" width="200px" >
      <Box onChange={handleGender} >
        <h3 style={{ color: "skyblue", fontWeight: "bold" }}>
          Filters
        </h3>
        <hr />
        <Box>
          <input type="radio" name="gender" value="male" />
          <label>Men</label>
        </Box>
        <Box>
          <input type="radio" name="gender" value="female"/>
          <label>women</label>
        </Box>
        <Box>
          <input type="radio" name="gender" value="kid"  />
          <label>kids</label>
        </Box>
      </Box>

      <Box  >
        <h3 style={{ color: "solid rgb(58, 168, 211)", fontWeight: "bold" }}>
          Categories
        </h3>
        <hr />
        <Box>
          <input type="checkbox" name="shirt" value="shirt" onChange={handleCat} checked={category.includes('shirt')} />
          <label>Shirt</label>
        </Box>
        <Box>
          <input type="checkbox" name="jacket" value="jacket" onChange={handleCat} checked={category.includes('jacket')}/>
          <label>Jacket</label>
        </Box>
        <Box>
          <input type="checkbox" name="shoes" value="shoes" onChange={handleCat} checked={category.includes('shoes')}/>
          <label>Shoes</label>
        </Box>
        <Box>
          <input type="checkbox" name="trousers" value="trousers" onChange={handleCat} checked={category.includes('trousers')}/>
          <label>Trousers</label>
        </Box>

        <Box>
          <input type="checkbox" name="dress" value="dress" onChange={handleCat} checked={category.includes('dress')}/>
          <label>Dress</label>
        </Box>

        <Box>
          <input type="checkbox" name="sarees" value="saree" onChange={handleCat} checked={category.includes('saree')}/>
          <label>Sarees</label>
        </Box>
      </Box>

      <h3 style={{ color: "solid rgb(58, 168, 211)", fontWeight: "bold" }}>
        Brands
      </h3>
      <hr />
      <Box
    
      >
       
      {d.map(x=>{
        return(
         <Box key={x.id}>
          <input type="checkbox" name={x.brand} value={x.brand} onChange={handleBrand} checked={brand.includes(x.brand)}/>
          <label>{x.brand}</label>
        </Box>
       )
      })}
        
      </Box>
      <h3 style={{ color: "solid rgb(58, 168, 211)", fontWeight: "bold" }}>
        Filter by Price
      </h3>
      <hr />
      <Box >
        <input type="radio" name="price" value="asc" onClick={handleOrder}/>
        <label>low to high</label>
      </Box>
      <Box >
        <input type="radio" name="price" value="desc" onClick={handleOrder}/>
        <label>high to low</label>
      </Box>

      <h3 style={{ color: "solid rgb(107, 203, 240)", fontWeight: "bold" }}>
        Filter by Rating
      </h3>
      <hr />
      <Box >
        <input type="radio" name="rating" onChange={()=>handle(4)}/>
        <label>4 & above</label>
      </Box>
      <Box>
        <input type="radio" name="rating"onChange={()=>handle(3)} />
        <label>3 & above</label>
      </Box>
    </Box>
  );
};

export default Filters;
