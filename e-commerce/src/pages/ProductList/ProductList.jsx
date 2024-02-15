import React, { useState } from 'react'
import "./ProductList.scss"
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Products from '../../components/Products/Products'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Footer from '../../Footer/Footer'
import { useLocation } from 'react-router-dom'



const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters,setfilters] = useState({});
  const [sort,setsort] = useState("Newest")

  const handleFilters=(e)=>{
    const value = e.target.value;
    setfilters({
      ...filters,
      [e.target.name]:value
    })
  }
  


  return (
    <div className='ProductList'>
    <Navbar /> 
       <Announcement />
       <h1 className={cat}>Dresses</h1>
       <div className='FilterContainer'>
        <div className='Filter'>
            <span>Filter Products:</span>
            <select name='color' onChange={handleFilters}>
                <option disabled >Color</option>
                <option>white</option>
                <option>black</option>
                <option>red</option>
                <option>blue</option>
                <option>yellow</option>
                <option>green</option>
            </select>
            <select name='size' onChange={handleFilters}>
            <option disabled >
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            </select>
        </div>
        <div className='Filter'>
            <span>Sort Products:</span>
            <select onChange={(e)=>setsort(e.target.value)}>
            <option value="Newest" >Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
            </select>
        </div>
       </div>
       <Products cat={cat} filters={filters} sort={sort} />
       <NewsLetter />
       <Footer />
    </div>
  )
}

export default ProductList