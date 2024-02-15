import React, { useEffect, useState } from 'react'
// import { popularProducts } from '../data'
import "./Products.scss"
import Product from '../Product/Product'
import axios from "axios"

const Products = ({cat,filters,sort}) => {
  
  const [products,setProducts] = useState([]);
  const [filteredproducts,setFilteredProducts] = useState([]);

  useEffect(()=>{
    // console.log(cat)
    const getProducts = async ()=>{
      try{
        const res = await axios.get( cat ? `http://localhost:5000/api/products?categories=${cat}` : "http://localhost:5000/api/products");
        setProducts(res.data);
        // console.log(res)
      }
      catch(err){

      }
      
    }
    getProducts();
    
  },[cat])

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  

  // useEffect(() => {
  //   console.log(filteredproducts);
  // }, [filteredproducts]);

  useEffect(() => {
    if (sort === "Newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);



  return (
    <div className='Products'>
        {cat
        ? filteredproducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </div>
  )
}

export default Products