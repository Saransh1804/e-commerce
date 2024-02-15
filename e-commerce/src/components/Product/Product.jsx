import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import "./Product.scss"
import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({item}) => {
  return (
    <div className='Product'>
        <div className='Circle'></div>
        <img src={item.img} alt=''></img>
        <div className='Info'>
            <div className='Icon'>
                <ShoppingCartOutlined />
            </div>
            <div className='Icon'>
            <Link to={`/product/${item._id}`}>
                <SearchOutlined />
            </Link>
            </div>
            <div className='Icon'>
                <FavoriteBorderOutlined />
            </div>
        </div>

    </div>
  )
}

export default Product