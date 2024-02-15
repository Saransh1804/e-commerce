import React from 'react'
import "./CategoryItem.scss"
import { Link } from 'react-router-dom'


const CategoryItem = ({item}) => {
  return (
    <div className='CategoryItem' >
    <Link to={`/products/${item.cat}`}>
        <img src={item.img} alt=''></img>
        <div className='Info'>
            <h1>{item.title}</h1>
            <button>SHOP NOW</button>
        </div>
    </Link>
    </div>
  )
}

export default CategoryItem