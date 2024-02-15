import React from 'react'
import "./Navbar.scss"
import { Search,ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'



const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    // console.log(quantity)

  return (
    <div className='Container'>
        <div className='Wrapper'>
        <div className='Left'>
            <span>EN</span>
            <div className='SearchContainer'>
                <input placeholder='Search'></input>
                <Search />
                
            </div>
        </div>
        <div className='Center'>
            <h1>SARA.</h1>
        </div>
        <div className='Right'>
            <div className='MenuItem'>REGISTER</div>
            <div className='MenuItem'>SIGN IN</div>
            <Link to="/cart">
            <div className='MenuItem'> 
                <Badge badgeContent={quantity} color="primary"> 
                <ShoppingCartOutlined />
                </Badge>
            </div>
            </Link>

        </div>

        </div>
    </div>
  )
}

export default Navbar